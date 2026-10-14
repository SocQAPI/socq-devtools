import {readFile} from "node:fs/promises";
import type {Capability, JsonSchema} from "@socq/core";

const RESERVED = new Set([
  "api-key", "base-url", "input", "input-file", "format", "output", "wait", "timeout", "result-limit",
  "idempotency-key", "cursor", "platforms", "tools", "request-source", "result-fields", "result-view",
]);

export async function buildInput(
  capability: Capability,
  options: Record<string, string | boolean>,
): Promise<Record<string, unknown>> {
  let input: Record<string, unknown> = {};
  if (typeof options.input === "string") input = parseObject(options.input, "--input");
  if (typeof options["input-file"] === "string") input = parseObject(await readFile(options["input-file"], "utf8"), "--input-file");
  const properties = capability.input_schema.properties ?? {};
  for (const [key, value] of Object.entries(options)) {
    if (RESERVED.has(key)) continue;
    const field = key.replace(/-/g, "_");
    if (!(field in properties)) throw new Error(`Unknown option --${key} for ${capability.public_id}`);
    try {
      input[field] = coerce(value, properties[field]);
    } catch (error) {
      throw new Error(`Invalid value for --${key}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  return input;
}

function parseObject(value: string, source: string): Record<string, unknown> {
  const parsed = JSON.parse(value) as unknown;
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) throw new Error(`${source} must contain a JSON object`);
  return parsed as Record<string, unknown>;
}

function coerce(value: string | boolean, schema: JsonSchema): unknown {
  let result: unknown;
  if (schema.type === "boolean") {
    if (value === true || value === "true") result = true;
    else if (value === false || value === "false") result = false;
    else throw new Error("expected true or false");
  } else if (schema.type === "integer") {
    if (typeof value !== "string" || !/^[+-]?\d+$/.test(value)) throw new Error("expected an integer");
    result = Number(value);
    if (!Number.isSafeInteger(result)) throw new Error("expected a safe integer");
  } else if (schema.type === "number") {
    if (typeof value !== "string" || !value.trim()) throw new Error("expected a number");
    result = Number(value);
    if (!Number.isFinite(result)) throw new Error("expected a finite number");
  } else if (schema.type === "array") {
    if (typeof value !== "string") throw new Error("expected an array value");
    result = value.trim().startsWith("[") ? JSON.parse(value) : value.split(",").map((item) => item.trim()).filter(Boolean);
    if (!Array.isArray(result)) throw new Error("expected an array");
    if (schema.items?.type === "string" && result.some((item: unknown) => typeof item !== "string")) throw new Error("expected an array of strings");
  } else {
    if (typeof value !== "string") throw new Error("expected a value");
    result = value;
  }
  if (Array.isArray(schema.enum) && !schema.enum.includes(result)) throw new Error("expected one of: " + schema.enum.join(", "));
  if (typeof result === "number") {
    if (typeof schema.minimum === "number" && result < schema.minimum) throw new Error("value is below the minimum");
    if (typeof schema.maximum === "number" && result > schema.maximum) throw new Error("value exceeds the maximum");
    if (typeof schema.multipleOf === "number" && result % schema.multipleOf !== 0) throw new Error("value must be a multiple of " + schema.multipleOf);
  }
  return result;
}
