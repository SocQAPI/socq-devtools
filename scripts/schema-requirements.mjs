export function requiredAlternativeGroups(inputSchema = {}) {
  return (inputSchema.anyOf ?? [])
    .map((entry) => (entry.required ?? []).filter(Boolean))
    .filter((group) => group.length);
}

export function satisfiesRequiredAlternatives(inputSchema, input) {
  const alternatives = requiredAlternativeGroups(inputSchema);
  return !alternatives.length || alternatives.some((group) =>
    group.every((field) => hasValue(input[field])),
  );
}

export function describeInputRequirement(inputSchema = {}) {
  const required = inputSchema.required ?? [];
  const alternatives = requiredAlternativeGroups(inputSchema)
    .map((group) => group.join(" + "));
  if (required.length && alternatives.length) {
    return `${required.join(", ")}; one of: ${alternatives.join("; ")}`;
  }
  if (required.length) return required.join(", ");
  if (alternatives.length) return `one of: ${alternatives.join("; ")}`;
  return "none";
}

function hasValue(value) {
  return value !== undefined && value !== null && value !== ""
    && (!Array.isArray(value) || value.length > 0);
}
