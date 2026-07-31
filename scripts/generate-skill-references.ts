import {mkdir, readFile, readdir, rm, writeFile} from "node:fs/promises";
import {resolve} from "node:path";
import {describeInputRequirement} from "./schema-requirements.mjs";

function option(name: string, fallback: string): string {
  const index = process.argv.indexOf(`--${name}`);
  return resolve(index >= 0 && process.argv[index + 1] ? process.argv[index + 1] : fallback);
}

interface Billing {
  mode?: string;
  credits: number | null;
  base_credits?: number | null;
  unit: string;
  unit_size?: number;
  unit_credits?: number | null;
  dynamic?: boolean;
}

interface Capability {
  public_id: string;
  platform: string;
  resource: string;
  tool_name: string;
  title: string;
  description: string;
  billing: Billing;
  input_schema: {
    required?: string[];
    anyOf?: Array<{required?: string[]}>;
    properties?: Record<string, unknown>;
  };
  examples: Array<Record<string, unknown>>;
  docs_url: string;
}

interface Catalog {
  schema_version: string;
  endpoints: Capability[] | {items: Capability[]};
}

const input = option("input", "artifacts/capability-catalog.json");
const output = option("output", "skills/socq-social-research/references/catalog.md");
const platformOutput = option("platform-output", "skills/socq-social-research/references/platforms");
const catalog = JSON.parse(await readFile(input, "utf8")) as Catalog;
const endpoints = (Array.isArray(catalog.endpoints) ? catalog.endpoints : catalog.endpoints.items)
  .slice()
  .sort((left, right) => left.public_id.localeCompare(right.public_id));

const catalogLines = [
  "# Capability Catalog",
  "",
  `Generated from SocQ Capability Registry schema \`${catalog.schema_version}\`. Do not edit endpoint definitions manually.`,
  "",
  "| Endpoint | Purpose | Required input | Cost |",
  "| --- | --- | --- | --- |",
  ...endpoints.map((item) =>
    `| [\`${item.public_id}\`](${item.docs_url}) | ${escapeTable(item.description)} | ${escapeTable(inputRequirement(item))} | ${escapeTable(billingSummary(item.billing))} |`,
  ),
  "",
];
await mkdir(resolve(output, ".."), {recursive: true});
await writeFile(output, catalogLines.join("\n"), "utf8");

const grouped = new Map<string, Capability[]>();
for (const endpoint of endpoints) {
  const items = grouped.get(endpoint.platform) ?? [];
  items.push(endpoint);
  grouped.set(endpoint.platform, items);
}
await mkdir(platformOutput, {recursive: true});
const expectedPlatformFiles = new Set([...grouped.keys()].map((platform) => `${platform}.md`));
for (const entry of await readdir(platformOutput, {withFileTypes: true})) {
  if (entry.isFile() && entry.name.endsWith(".md") && !expectedPlatformFiles.has(entry.name)) {
    await rm(resolve(platformOutput, entry.name));
  }
}
for (const [platform, items] of grouped) {
  const lines = [
    `# ${platformTitle(platform)}`,
    "",
    `Generated from SocQ Capability Registry schema \`${catalog.schema_version}\`. Read this file when the request targets ${platformTitle(platform)}.`,
    "",
    "## Endpoint selection",
    "",
    "| Endpoint | Use for | Input choice | Cost |",
    "| --- | --- | --- | --- |",
    ...items.map((item) =>
      `| [\`${item.public_id}\`](${item.docs_url}) | ${escapeTable(item.description)} | ${escapeTable(inputRequirement(item))} | ${escapeTable(billingSummary(item.billing))} |`,
    ),
    "",
    "## Validated examples",
    "",
    ...items.flatMap((item) => [
      `### \`${item.public_id}\``,
      "",
      `Typed MCP tool: \`${item.tool_name}\``,
      "",
      "```json",
      JSON.stringify(item.examples[0] ?? {}, null, 2),
      "```",
      "",
    ]),
  ];
  await writeFile(resolve(platformOutput, `${platform}.md`), lines.join("\n"), "utf8");
}

process.stderr.write(`Wrote ${output}\nWrote ${grouped.size} platform references to ${platformOutput}\n`);

function inputRequirement(item: Capability): string {
  return describeInputRequirement(item.input_schema);
}

function billingSummary(billing: Billing): string {
  if (billing.unit_credits !== undefined && billing.unit_credits !== null) {
    const size = Math.max(1, Number(billing.unit_size ?? 1));
    const unit = size === 1 ? billing.unit : `${size} ${billing.unit}s`;
    const base = billing.base_credits ? `${billing.base_credits} base + ` : "";
    return `${base}${billing.unit_credits} credits/${unit}`;
  }
  if (billing.credits !== null && billing.credits !== undefined) return `${billing.credits} credits/${billing.unit}`;
  return "live pricing";
}

function escapeTable(value: string): string {
  return String(value).replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
}

function platformTitle(platform: string): string {
  const titles: Record<string, string> = {
    "facebook-ad-library": "Facebook Ad Library",
    "facebook-marketplace": "Facebook Marketplace",
    "tiktok-shop": "TikTok Shop",
    x: "X",
  };
  return titles[platform] ?? platform.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join(" ");
}
