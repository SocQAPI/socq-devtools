export type InputSchema = {
  required?: string[];
  anyOf?: Array<{required?: string[]}>;
};

export function requiredAlternativeGroups(inputSchema?: InputSchema): string[][];
export function satisfiesRequiredAlternatives(
  inputSchema: InputSchema,
  input: Record<string, unknown>,
): boolean;
export function describeInputRequirement(inputSchema?: InputSchema): string;
