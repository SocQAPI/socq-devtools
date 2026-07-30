import {mkdir, writeFile} from "node:fs/promises";
import {dirname, resolve} from "node:path";
import {pathToFileURL} from "node:url";

type CatalogEndpoint = {
  public_id?: string;
  [key: string]: unknown;
};

type CatalogPage = {
  schema_version?: string;
  platforms?: unknown[];
  endpoints: CatalogEndpoint[] | {
    items: CatalogEndpoint[];
    next_cursor?: string | null;
    has_more?: boolean;
  };
  [key: string]: unknown;
};

type Envelope<T> = {data?: T};
type FetchJson = (url: string) => Promise<unknown>;

function option(name: string, fallback: string): string {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 && process.argv[index + 1] ? process.argv[index + 1] : fallback;
}

async function fetchJson(url: string): Promise<unknown> {
  const response = await fetch(url, {headers: {Accept: "application/json"}});
  if (!response.ok) throw new Error(`GET ${url} failed with ${response.status}: ${(await response.text()).slice(0, 500)}`);
  return response.json();
}

function unwrapCatalog(value: unknown): CatalogPage {
  if (!value || typeof value !== "object") throw new Error("Capability Catalog returned an invalid response");
  const envelope = value as Envelope<CatalogPage>;
  const catalog = envelope.data ?? value as CatalogPage;
  if (!catalog || typeof catalog !== "object" || !catalog.endpoints) {
    throw new Error("Capability Catalog response is missing endpoints");
  }
  return catalog;
}

function endpointPage(catalog: CatalogPage): {
  items: CatalogEndpoint[];
  nextCursor?: string;
  hasMore: boolean;
} {
  if (Array.isArray(catalog.endpoints)) {
    return {items: catalog.endpoints, hasMore: false};
  }
  if (!Array.isArray(catalog.endpoints.items)) {
    throw new Error("Capability Catalog response has invalid endpoint items");
  }
  const nextCursor = catalog.endpoints.next_cursor || undefined;
  const hasMore = Boolean(catalog.endpoints.has_more);
  if (hasMore && !nextCursor) {
    throw new Error("Capability Catalog indicates more pages but returned no next cursor");
  }
  return {items: catalog.endpoints.items, nextCursor, hasMore};
}

export async function fetchCompleteCatalog(baseUrl: string, request: FetchJson = fetchJson): Promise<CatalogPage> {
  const normalizedBaseUrl = baseUrl.replace(/\/$/, "");
  const endpoints: CatalogEndpoint[] = [];
  const seenCursors = new Set<string>();
  let firstPage: CatalogPage | undefined;
  let cursor: string | undefined;

  do {
    const url = new URL(`${normalizedBaseUrl}/v1/catalog`);
    url.searchParams.set("limit", "100");
    if (cursor) url.searchParams.set("cursor", cursor);

    const catalog = unwrapCatalog(await request(url.toString()));
    if (!firstPage) {
      firstPage = catalog;
    } else if (catalog.schema_version !== firstPage.schema_version) {
      throw new Error("Capability Catalog schema changed while synchronizing pages; retry the synchronization");
    }

    const page = endpointPage(catalog);
    endpoints.push(...page.items);
    if (!page.hasMore) break;

    if (seenCursors.has(page.nextCursor!)) {
      throw new Error(`Capability Catalog returned a repeated cursor: ${page.nextCursor}`);
    }
    seenCursors.add(page.nextCursor!);
    cursor = page.nextCursor;
  } while (cursor);

  if (!firstPage) throw new Error("Capability Catalog returned no pages");
  return {
    ...firstPage,
    endpoints: {
      items: endpoints,
      next_cursor: null,
      has_more: false,
    },
  };
}

async function main(): Promise<void> {
  const baseUrl = option("base-url", process.env.SOCQ_BASE_URL ?? "https://api.socq.ai").replace(/\/$/, "");
  const catalogOutput = resolve(option("catalog-output", "artifacts/capability-catalog.json"));
  const openapiOutput = resolve(option("openapi-output", "artifacts/agent-openapi.json"));
  const openapiPromise = fetchJson(`${baseUrl}/v1/catalog/openapi.json`);
  const [catalog, openapi] = await Promise.all([
    fetchCompleteCatalog(baseUrl),
    openapiPromise,
  ]);

  for (const [path, value] of [[catalogOutput, catalog], [openapiOutput, openapi]] as const) {
    await mkdir(dirname(path), {recursive: true});
    await writeFile(path, `${JSON.stringify(value, null, 2)}\n`, "utf8");
  }
  process.stderr.write(`Wrote ${catalogOutput}\nWrote ${openapiOutput}\n`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  await main();
}
