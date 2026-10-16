import {createInterface} from "node:readline/promises";
import {readFile} from "node:fs/promises";
import {stdin, stdout} from "node:process";
import {Writable} from "node:stream";
import {
  clearStoredCredential,
  loadConfig,
  loadStoredCredential,
  maskApiKey,
  storeApiKey,
  SocqApiError,
  SocqClient,
  type Capability,
} from "@socq/core";
import {runProxy} from "@socq/mcp";
import {parseArgs, numberOption, type ParsedArgs} from "./args.js";
import {buildInput} from "./input.js";
import {renderOutput, type OutputFormat} from "./output.js";

export async function runCli(argv: string[]): Promise<number> {
  const parsed = parseArgs(argv);
  const [command, subcommand, third] = parsed.positionals;
  if (command === "version" || parsed.options.version === true) {
    const {version} = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8")) as {version: string};
    process.stdout.write(`${version}\n`);
    return 0;
  }
  if (!command || command === "help" || parsed.options.help) {
    process.stdout.write(HELP);
    return 0;
  }

  if (command === "auth") return authCommand(subcommand, parsed);
  if (command === "mcp") {
    const config = await loadConfig();
    const stored = await loadStoredCredential(config);
    await runProxy({
      url: stringOption(parsed, "url") ?? process.env.SOCQ_MCP_URL,
      apiKey: stringOption(parsed, "api-key") ?? process.env.SOCQ_API_KEY ?? stored.apiKey,
      platforms: stringOption(parsed, "platforms"),
      tools: stringOption(parsed, "tools"),
    });
    return 0;
  }

  const config = await loadConfig();
  const publicCommand = command === "platforms" || command === "tools" || command === "describe";
  const stored = publicCommand ? {source: "none" as const, apiKey: undefined} : await loadStoredCredential(config);
  const client = new SocqClient({
    baseUrl: stringOption(parsed, "base-url") ?? process.env.SOCQ_BASE_URL ?? config.baseUrl,
    apiKey: stringOption(parsed, "api-key") ?? process.env.SOCQ_API_KEY ?? stored.apiKey,
    source: requestSource(parsed),
  });
  const format = outputFormat(parsed);
  const output = stringOption(parsed, "output");

  if (command === "platforms") {
    const catalog = await client.catalog();
    await renderOutput(catalog.platforms, format, output);
    return 0;
  }
  if (command === "tools") {
    await renderOutput(await allCapabilities(client, subcommand), format, output);
    return 0;
  }
  if (command === "describe") {
    if (!subcommand) throw new Error("Usage: socq describe PLATFORM/RESOURCE");
    await renderOutput(await client.capability(subcommand), format, output);
    return 0;
  }
  if (command === "account") {
    await renderOutput(await client.account(), format, output);
    return 0;
  }
  if (command === "task") return taskCommand(client, subcommand, third, parsed, format, output);
  if (command === "run") {
    if (!subcommand || !third) throw new Error("Usage: socq run PLATFORM RESOURCE [options]");
    return execute(client, subcommand, third, parsed, format, output);
  }

  // Friendly dynamic form: socq youtube comments --urls ...
  if (!subcommand) throw new Error(`Unknown command: ${command}`);
  const capabilities = await allCapabilities(client, command);
  if (!capabilities.some((item) => item.resource === subcommand)) throw new Error(`Unknown command or endpoint: ${command} ${subcommand}`);
  return execute(client, command, subcommand, parsed, format, output);
}

async function allCapabilities(client: SocqClient, platform?: string): Promise<Capability[]> {
  const items: Capability[] = [];
  const seenCursors = new Set<string>();
  let cursor: string | undefined;
  while (true) {
    const catalog = await client.catalog({...(platform ? {platform} : {}), ...(cursor ? {cursor} : {})});
    items.push(...catalog.endpoints.items);
    if (!catalog.endpoints.has_more) return items;
    const nextCursor = catalog.endpoints.next_cursor;
    if (!nextCursor || seenCursors.has(nextCursor)) throw new Error("Catalog pagination did not provide a new cursor");
    seenCursors.add(nextCursor);
    cursor = nextCursor;
  }
}

async function execute(
  client: SocqClient,
  platform: string,
  resource: string,
  parsed: ParsedArgs,
  format: OutputFormat,
  output?: string,
): Promise<number> {
  const capability = await client.capability(`${platform}/${resource}`);
  const input = await buildInput(capability, parsed.options);
  const task = await client.submit(platform, resource, input, {idempotencyKey: stringOption(parsed, "idempotency-key")});
  if (parsed.options.wait === true) {
    const completed = await client.waitTask(task.task_id, {
      timeoutSeconds: numberOption(parsed.options, "timeout", 90),
      limit: numberOption(parsed.options, "result-limit", 50),
      view: resultView(parsed),
      fields: stringOption(parsed, "result-fields"),
      // A newly submitted task can be briefly invisible while the request
      // transaction finishes on another API worker.
      notFoundGraceSeconds: 10,
    });
    await renderOutput(completed, format, output);
    return completed.status === "failed" ? 5 : 0;
  }
  await renderOutput(task, format, output);
  return 0;
}

async function taskCommand(
  client: SocqClient,
  action: string | undefined,
  taskId: string | undefined,
  parsed: ParsedArgs,
  format: OutputFormat,
  output?: string,
): Promise<number> {
  if (!action || !taskId) throw new Error("Usage: socq task get|wait|results|files|download TASK_ID");
  if (action === "download") {
    const directory = stringOption(parsed, "directory") ?? `socq-${taskId}`;
    await renderOutput(await client.downloadFiles(taskId, directory), format, output);
    return 0;
  }
  if (action === "files") {
    await renderOutput(await client.files(taskId), format, output);
    return 0;
  }
  const task = action === "wait"
    ? await client.waitTask(taskId, {
        timeoutSeconds: numberOption(parsed.options, "timeout", 90),
        limit: numberOption(parsed.options, "result-limit", 50),
        view: resultView(parsed),
        fields: stringOption(parsed, "result-fields"),
      })
    : await client.task(taskId, {
        cursor: stringOption(parsed, "cursor"),
        limit: numberOption(parsed.options, "result-limit", 50),
        view: resultView(parsed),
        fields: stringOption(parsed, "result-fields"),
      });
  const value = action === "results" ? task.results ?? {items: []} : task;
  await renderOutput(value, format, output);
  return task.status === "failed" ? 5 : 0;
}

async function authCommand(action: string | undefined, parsed: ParsedArgs): Promise<number> {
  const config = await loadConfig();
  if (action === "status") {
    if (process.env.SOCQ_API_KEY) {
      process.stdout.write(`${maskApiKey(process.env.SOCQ_API_KEY)} (environment)\n`);
      return 0;
    }
    const stored = await loadStoredCredential(config);
    process.stdout.write(`${maskApiKey(stored.apiKey)} (${stored.source})\n`);
    return 0;
  }
  if (action === "clear") {
    await clearStoredCredential();
    process.stdout.write("SocQ credentials cleared.\n");
    return 0;
  }
  if (action !== "login") throw new Error("Usage: socq auth login|status|clear");
  let apiKey = stringOption(parsed, "api-key") ?? process.env.SOCQ_API_KEY;
  if (!apiKey) {
    stdout.write("SocQ API key: ");
    const silentOutput = new Writable({write(_chunk, _encoding, callback) { callback(); }});
    const terminal = createInterface({input: stdin, output: silentOutput, terminal: Boolean(stdin.isTTY)});
    apiKey = (await terminal.question("")).trim();
    terminal.close();
    stdout.write("\n");
  }
  if (!apiKey) throw new Error("API key cannot be empty");
  const source = await storeApiKey(apiKey, stringOption(parsed, "base-url") ?? config.baseUrl);
  process.stdout.write(`Saved ${maskApiKey(apiKey)} using ${source === "keyring" ? "the system keyring" : "the local fallback config"}.\n`);
  return 0;
}

function outputFormat(parsed: ParsedArgs): OutputFormat {
  const value = stringOption(parsed, "format") ?? "table";
  if (!["json", "jsonl", "csv", "table"].includes(value)) throw new Error(`Unsupported format: ${value}`);
  return value as OutputFormat;
}

function stringOption(parsed: ParsedArgs, name: string): string | undefined {
  const value = parsed.options[name];
  return typeof value === "string" ? value : undefined;
}

function requestSource(parsed: ParsedArgs): "cli" | "skill-cli" {
  const value = (stringOption(parsed, "request-source") ?? process.env.SOCQ_REQUEST_SOURCE ?? "cli")
    .trim()
    .toLowerCase();
  if (value === "cli") return "cli";
  if (value === "skill" || value === "skill-cli") return "skill-cli";
  throw new Error("--request-source must be cli or skill");
}

function resultView(parsed: ParsedArgs): "full" | "standard" | undefined {
  const value = stringOption(parsed, "result-view");
  if (value === undefined) return stringOption(parsed, "result-fields") ? "standard" : undefined;
  if (value === "full" || value === "standard") return value;
  throw new Error("--result-view must be full or standard");
}

export function exitCodeFor(error: unknown): number {
  if (error instanceof SocqApiError) {
    if (error.status === 401 || error.status === 403) return 3;
    if (error.status === 402) return 4;
    if (error.status === 408) return 6;
    if (error.status === 429) return 7;
    return 5;
  }
  return 2;
}

const HELP = `SocQ CLI\n\nUsage:\n  socq --version\n  socq auth login|status|clear\n  socq platforms\n  socq tools [platform]\n  socq describe PLATFORM/RESOURCE\n  socq run PLATFORM RESOURCE [--input JSON | --input-file FILE]\n  socq PLATFORM RESOURCE [endpoint flags]\n  socq task get|wait|results|files|download TASK_ID\n  socq account\n  socq mcp [--platforms LIST | --tools LIST]\n\nGlobal output: --format table|json|jsonl|csv --output FILE\nResult view: --result-view standard|full [--result-fields id,url,author.username]\nSkill attribution: --request-source skill or SOCQ_REQUEST_SOURCE=skill.\nAuthentication priority: --api-key, SOCQ_API_KEY, system keyring, local fallback config. Avoid --api-key in shell history.\n`;
