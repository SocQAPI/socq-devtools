export interface JsonSchema {
  type?: string | string[];
  properties?: Record<string, JsonSchema>;
  required?: string[];
  items?: JsonSchema;
  [key: string]: unknown;
}

export type RequestSource =
  | "rest"
  | "cli"
  | "mcp-remote"
  | "mcp-stdio"
  | "skill-mcp"
  | "skill-cli"
  | "skill-rest";

export interface Capability {
  public_id: string;
  platform: string;
  resource: string;
  tool_name: string;
  title: string;
  description: string;
  input_schema: JsonSchema;
  output_schema: JsonSchema;
  output_schema_id: string;
  output_schema_version: string;
  billing: {credits: number | null; unit: string; dynamic?: boolean; config?: Record<string, unknown>};
  examples: Array<Record<string, unknown>>;
  tags: string[];
  execution_mode: "async";
  supports_pagination: boolean;
  supports_files: boolean;
  supports_callback: boolean;
  status: string;
  docs_url: string;
}

export interface PlatformSummary {
  platform: string;
  title: string;
  endpoint_count: number;
  tools: string[];
}

export type ResultView = "full" | "standard";

export interface TaskResultOptions {
  cursor?: string;
  limit?: number;
  view?: ResultView;
  fields?: string | string[];
}

export interface CatalogData {
  schema_version: string;
  platforms: PlatformSummary[];
  endpoints: {items: Capability[]; next_cursor: string | null; has_more: boolean};
}

export interface TaskData {
  task_id: string;
  status: string;
  public_id?: string;
  request_source?: RequestSource;
  input?: Record<string, unknown>;
  output?: Record<string, unknown>;
  result_count?: number;
  error_message?: string | null;
  credits_amount?: number;
  created_time?: string | null;
  finished_time?: string | null;
  idempotent_replay?: boolean;
  results?: {
    limit: number;
    next_cursor: string | null;
    has_more: boolean;
    view: ResultView;
    schema_id: string | null;
    schema_version: string | null;
    items: unknown[];
  };
  poll_after_seconds?: number;
}

export interface TaskFile {
  file_type: string;
  public_url: string;
  file_size?: number | null;
  item_count?: number | null;
  expires_at?: string | null;
}

export interface TaskFiles {
  task_id: string;
  items: TaskFile[];
}

export interface DownloadedTaskFile extends TaskFile {
  path: string;
}

export interface ClientOptions {
  baseUrl?: string;
  apiKey?: string;
  source?: RequestSource | "skill";
  fetch?: typeof globalThis.fetch;
}
