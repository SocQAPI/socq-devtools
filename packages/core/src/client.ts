import {createWriteStream} from "node:fs";
import {mkdir} from "node:fs/promises";
import {basename, extname, resolve} from "node:path";
import {Readable} from "node:stream";
import {pipeline} from "node:stream/promises";
import type {Capability, CatalogData, ClientOptions, DownloadedTaskFile, ResultView, TaskData, TaskFiles, TaskResultOptions} from "./types.js";

export class SocqApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly detail?: unknown,
  ) {
    super(message);
    this.name = "SocqApiError";
  }
}

export class SocqClient {
  readonly baseUrl: string;
  readonly apiKey?: string;
  readonly source: string;
  private readonly fetchImpl: typeof globalThis.fetch;
  private catalogCache?: {etag?: string; data: CatalogData};

  constructor(options: ClientOptions = {}) {
    this.baseUrl = (options.baseUrl ?? process.env.SOCQ_BASE_URL ?? "https://api.socq.ai").replace(/\/$/, "");
    this.apiKey = options.apiKey ?? process.env.SOCQ_API_KEY;
    this.source = options.source ?? "cli";
    this.fetchImpl = options.fetch ?? globalThis.fetch;
  }

  async catalog(params: Record<string, string | number | undefined> = {}): Promise<CatalogData> {
    const url = this.url("/v1/catalog", {...params, limit: params.limit ?? 100});
    const headers: Record<string, string> = {};
    if (this.catalogCache?.etag && Object.keys(params).length === 0) headers["If-None-Match"] = this.catalogCache.etag;
    const response = await this.fetchImpl(url, {headers});
    if (response.status === 304 && this.catalogCache) return this.catalogCache.data;
    const payload = await this.parseResponse<{code: number; data: CatalogData}>(response);
    if (Object.keys(params).length === 0) {
      this.catalogCache = {etag: response.headers.get("etag") ?? undefined, data: payload.data};
    }
    return payload.data;
  }

  async capability(publicId: string): Promise<Capability> {
    const [platform, resource] = normalizeEndpoint(publicId).split("/", 2);
    const response = await this.fetchImpl(this.url(`/v1/catalog/endpoints/${encodeURIComponent(platform)}/${encodeURIComponent(resource)}`));
    return (await this.parseResponse<{code: number; data: Capability}>(response)).data;
  }

  async submit(
    platform: string,
    resource: string,
    input: Record<string, unknown>,
    options: {idempotencyKey?: string} = {},
  ): Promise<TaskData> {
    const response = await this.fetchImpl(
      this.url(`/v1/${encodeURIComponent(platform)}/${encodeURIComponent(resource)}`),
      {
        method: "POST",
        headers: this.authHeaders({
          "Content-Type": "application/json",
          ...(options.idempotencyKey ? {"Idempotency-Key": options.idempotencyKey} : {}),
        }),
        body: JSON.stringify(input),
      },
    );
    return (await this.parseResponse<{code: number; data: TaskData}>(response)).data;
  }

  async task(taskId: string, options: TaskResultOptions = {}): Promise<TaskData> {
    const response = await this.fetchImpl(
      this.url(`/v1/tasks/${encodeURIComponent(taskId)}`, {
        cursor: options.cursor,
        limit: options.limit ?? 50,
        view: options.view ?? (options.fields !== undefined ? "standard" : undefined),
        fields: normalizeResultFields(options.fields),
      }),
      {headers: this.authHeaders()},
    );
    return (await this.parseResponse<{code: number; data: TaskData}>(response)).data;
  }

  async files(taskId: string): Promise<TaskFiles> {
    const response = await this.fetchImpl(this.url(`/v1/tasks/${encodeURIComponent(taskId)}/files`), {
      headers: this.authHeaders(),
    });
    return (await this.parseResponse<{code: number; data: TaskFiles}>(response)).data;
  }

  async downloadFiles(taskId: string, directory: string): Promise<DownloadedTaskFile[]> {
    const files = await this.files(taskId);
    const outputDirectory = resolve(directory);
    await mkdir(outputDirectory, {recursive: true});
    const downloaded: DownloadedTaskFile[] = [];
    for (const [index, file] of files.items.entries()) {
      const response = await this.fetchImpl(file.public_url);
      if (!response.ok || !response.body) {
        throw new SocqApiError(`SocQ result file download failed (${response.status})`, response.status);
      }
      const path = resolve(outputDirectory, taskFileName(taskId, index, file.file_type, file.public_url));
      await pipeline(Readable.fromWeb(response.body as never), createWriteStream(path));
      downloaded.push({...file, path});
    }
    return downloaded;
  }

  async account(): Promise<unknown> {
    const response = await this.fetchImpl(this.url("/v1/account"), {headers: this.authHeaders()});
    return (await this.parseResponse<{code: number; data: unknown}>(response)).data;
  }

  async waitTask(
    taskId: string,
    options: {
      timeoutSeconds?: number;
      limit?: number;
      view?: ResultView;
      fields?: string | string[];
      onPoll?: (task: TaskData) => void;
      notFoundGraceSeconds?: number;
    } = {},
  ): Promise<TaskData> {
    const timeout = Math.max(1, options.timeoutSeconds ?? 90) * 1000;
    const deadline = Date.now() + timeout;
    const notFoundDeadline = Date.now() + Math.max(0, options.notFoundGraceSeconds ?? 0) * 1000;
    while (true) {
      let task: TaskData;
      try {
        task = await this.task(taskId, {
          limit: options.limit,
          view: options.view,
          fields: options.fields,
        });
      } catch (error) {
        if (error instanceof SocqApiError && error.status === 404 && Date.now() < notFoundDeadline && Date.now() < deadline) {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          continue;
        }
        throw error;
      }
      options.onPoll?.(task);
      if (task.status === "succeeded" || task.status === "failed") return task;
      if (Date.now() >= deadline) throw new SocqApiError(`Timed out waiting for task ${taskId}`, 408, task);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }

  private authHeaders(extra: Record<string, string> = {}): Record<string, string> {
    if (!this.apiKey) throw new SocqApiError("SOCQ_API_KEY is required for this command", 401);
    return {
      Authorization: `Bearer ${this.apiKey}`,
      "X-Socq-Source": this.source,
      ...extra,
    };
  }

  private url(path: string, params: Record<string, string | number | undefined> = {}): string {
    const url = new URL(path, this.baseUrl);
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== "") url.searchParams.set(key, String(value));
    }
    return url.toString();
  }

  private async parseResponse<T>(response: Response): Promise<T> {
    const text = await response.text();
    let payload: unknown;
    try {
      payload = text ? JSON.parse(text) : undefined;
    } catch {
      payload = text;
    }
    if (!response.ok) {
      const detail = typeof payload === "object" && payload !== null && "detail" in payload ? (payload as {detail: unknown}).detail : payload;
      throw new SocqApiError(`SocQ API request failed (${response.status})`, response.status, detail);
    }
    return payload as T;
  }
}

function normalizeResultFields(fields: string | string[] | undefined): string | undefined {
  if (fields === undefined) return undefined;
  return Array.isArray(fields) ? fields.join(",") : fields;
}

function taskFileName(taskId: string, index: number, fileType: string, publicUrl: string): string {
  let remoteName = "";
  try {
    remoteName = basename(new URL(publicUrl).pathname);
  } catch {
    remoteName = "";
  }
  const safeRemoteName = remoteName.replace(/[^A-Za-z0-9._-]/g, "_");
  const extension = extname(safeRemoteName)
    || `.${String(fileType || "jsonl").replace(/[^A-Za-z0-9]/g, "") || "jsonl"}`;
  return `${taskId}-${index + 1}${extension}`;
}

export function normalizeEndpoint(value: string): string {
  const normalized = value.trim().toLowerCase();
  if (!normalized.includes("/")) throw new SocqApiError(`Invalid endpoint: ${value}`, 400);
  const [platform, resource, ...extra] = normalized.split("/");
  if (!platform || !resource || extra.length) throw new SocqApiError(`Invalid endpoint: ${value}`, 400);
  return `${platform}/${resource}`;
}
