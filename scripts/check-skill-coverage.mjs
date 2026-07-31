import {access, readFile} from "node:fs/promises";
import {resolve} from "node:path";
import {requiredAlternativeGroups, satisfiesRequiredAlternatives} from "./schema-requirements.mjs";

const catalogPath = resolve(process.argv[2] ?? "artifacts/capability-catalog.json");
const skillRoot = resolve("skills/socq-social-research");
const catalog = JSON.parse(await readFile(catalogPath, "utf8"));
const endpoints = Array.isArray(catalog.endpoints) ? catalog.endpoints : catalog.endpoints.items;
if (!endpoints.length) throw new Error("Capability Catalog contains no endpoints");
if (!Array.isArray(catalog.endpoints) && catalog.endpoints.has_more) {
  throw new Error("Capability Catalog artifact is incomplete; synchronize all endpoint pages");
}
if (new Set(endpoints.map((item) => item.public_id)).size !== endpoints.length) throw new Error("Duplicate public_id");

for (const endpoint of endpoints) {
  if (!endpoint.examples?.length) throw new Error(`Missing example for ${endpoint.public_id}`);
  const properties = endpoint.input_schema?.properties ?? {};
  if (!Object.keys(properties).length) throw new Error(`Missing input properties for ${endpoint.public_id}`);
  if (!endpoint.docs_url) throw new Error(`Missing docs URL for ${endpoint.public_id}`);
  const example = endpoint.examples[0];
  const unknown = Object.keys(example).filter((field) => !(field in properties));
  if (unknown.length) throw new Error(`Example for ${endpoint.public_id} has unknown fields: ${unknown.join(",")}`);
  const missing = (endpoint.input_schema.required ?? []).filter((field) => !hasValue(example[field]));
  if (missing.length) throw new Error(`Example for ${endpoint.public_id} misses required fields: ${missing.join(",")}`);
  const alternatives = requiredAlternativeGroups(endpoint.input_schema);
  if (!satisfiesRequiredAlternatives(endpoint.input_schema, example)) {
    const choices = alternatives.map((group) => group.join(" + ")).join("; ");
    throw new Error(`Example for ${endpoint.public_id} must satisfy one of: ${choices}`);
  }
}

const platforms = new Set(endpoints.map((item) => item.platform));
for (const platform of platforms) {
  const path = resolve(skillRoot, "references", "platforms", `${platform}.md`);
  await access(path);
  const content = await readFile(path, "utf8");
  for (const endpoint of endpoints.filter((item) => item.platform === platform)) {
    if (!content.includes(`\`${endpoint.public_id}\``)) throw new Error(`${path} is missing ${endpoint.public_id}`);
    if (!content.includes(`\`${endpoint.tool_name}\``)) throw new Error(`${path} is missing ${endpoint.tool_name}`);
  }
}

const generatedCatalog = await readFile(resolve(skillRoot, "references", "catalog.md"), "utf8");
if (generatedCatalog.includes("鈥") || generatedCatalog.includes("�")) throw new Error("Generated catalog contains mojibake");
for (const endpoint of endpoints) {
  if (!generatedCatalog.includes(`\`${endpoint.public_id}\``)) throw new Error(`Catalog reference is missing ${endpoint.public_id}`);
}

process.stdout.write(`Validated Skill coverage for ${endpoints.length} endpoints across ${platforms.size} platforms.\n`);

function hasValue(value) {
  return value !== undefined && value !== null && value !== "" && (!Array.isArray(value) || value.length > 0);
}
