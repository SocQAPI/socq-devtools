import {copyFile, mkdir, readFile, readdir, rm, writeFile} from "node:fs/promises";
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
  output_schema_id: string;
  output_schema_version: string;
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
const skillsOutput = option("skills-output", "skills");
const catalog = JSON.parse(await readFile(input, "utf8")) as Catalog;
const endpoints = (Array.isArray(catalog.endpoints) ? catalog.endpoints : catalog.endpoints.items)
  .slice()
  .sort((left, right) => left.public_id.localeCompare(right.public_id));

const catalogLines = [
  "# Capability Catalog",
  "",
  `Generated from SocQ Capability Registry schema \`${catalog.schema_version}\`. Do not edit endpoint definitions manually.`,
  "",
  "| Endpoint | Purpose | Required input | Standard schema | Cost |",
  "| --- | --- | --- | --- | --- |",
  ...endpoints.map((item) =>
    `| [\`${item.public_id}\`](${item.docs_url}) | ${escapeTable(item.description)} | ${escapeTable(inputRequirement(item))} | \`${item.output_schema_id}@${item.output_schema_version}\` | ${escapeTable(billingSummary(item.billing))} |`,
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
    "| Endpoint | Use for | Input choice | Standard schema | Cost |",
    "| --- | --- | --- | --- | --- |",
    ...items.map((item) =>
      `| [\`${item.public_id}\`](${item.docs_url}) | ${escapeTable(item.description)} | ${escapeTable(inputRequirement(item))} | \`${item.output_schema_id}@${item.output_schema_version}\` | ${escapeTable(billingSummary(item.billing))} |`,
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
  await writePlatformSkill(platform, resolve(platformOutput, `${platform}.md`));
}

process.stderr.write(`Wrote ${output}\nWrote ${grouped.size} platform references to ${platformOutput}\n`);
process.stderr.write(`Wrote ${grouped.size} platform Skills to ${skillsOutput}\n`);

async function writePlatformSkill(platform: string, platformReference: string): Promise<void> {
  const title = platformTitle(platform);
  const skillName = platformSkillName(platform);
  const skillRoot = resolve(skillsOutput, skillName);
  const referencesRoot = resolve(skillRoot, "references");
  await mkdir(resolve(skillRoot, "agents"), {recursive: true});
  await mkdir(referencesRoot, {recursive: true});

  const description = platformSkillDescription(platform, title);
  const platformPage = platformHomepage(platform);
  const skill = `---
name: ${skillName}
description: ${description}
metadata:
  openclaw:
    homepage: https://github.com/SocQAPI/socq-devtools
    primaryEnv: SOCQ_API_KEY
    requires:
      env:
        - SOCQ_API_KEY
      anyBins:
        - socq
        - npx
    envVars:
      - name: SOCQ_API_KEY
        required: true
        description: SocQ API key used to authenticate CLI, MCP, and REST requests.
    install:
      - kind: node
        package: "@socq/cli"
        bins:
          - socq
---

# SocQ ${title} Research

## SocQ Links

- Website: <https://socq.ai/>
- Platform page: <${platformPage}>
- API documentation: <https://docs.socq.ai/api-manual/${platform}>
- API key: <https://socq.ai/dashboard/api-key>
- MCP and CLI: <https://docs.socq.ai/integrations/overview>
- Agent Skill guide: <https://docs.socq.ai/integrations/skill>

Use this Skill to select and run SocQ endpoints for public ${title} research. SocQ requests are asynchronous and credit-metered.

## Use When

- The user asks to discover, collect, compare, or analyze public ${title} data.
- The workflow needs ${title}-specific endpoint selection, input validation, pagination, or raw exports.
- An agent must estimate credits, submit a task, poll it to completion, and report normalized results.
${platformPlaybook(platform)}
## Endpoint Selection

- Read [platform.md](references/platform.md) before selecting an endpoint or constructing input. It contains the current endpoint IDs, typed MCP tools, CLI mappings, costs, input choices, and validated examples generated from the Capability Registry.
- Choose from the shape of the requested resource; do not route every request through broad search.
- Prefer direct URLs, canonical usernames, or platform IDs when the user supplies them.
- Re-read the live schema after a validation error instead of inventing parameters.

## Key Inputs

- Preserve the user's entities, query terms, date range, locale, filters, ordering, and requested result limit.
- Ask only for missing input required by the selected endpoint.
- Use \`view: "standard"\` for MCP and Skill result reads. Use \`_result_view: "standard"\` for typed MCP tools or \`--result-view standard\` for CLI output.
- Add a reusable idempotency key when a submission might be retried.
- Treat \`next_cursor\` as opaque and continue only until the requested scope or user-approved cap is reached.

## Execution

1. Prefer an already configured SocQ MCP server at \`https://api.socq.ai/mcp?platforms=${platform}\`; use the typed tool listed in [platform.md](references/platform.md), or compact \`socq_execute\` when needed.
2. If MCP is unavailable, use \`socq\` or \`npx @socq/cli\`. Use REST only as the final fallback.
3. Read [authentication.md](references/authentication.md), keep \`SOCQ_API_KEY\` in the environment, and never put it in prompts, URLs, committed files, or retained commands.
4. Read [billing.md](references/billing.md), report the expected cost, and obtain confirmation before a paid large-volume or multi-endpoint run.
5. Submit with \`_request_source: "skill"\`, \`--request-source skill\`, or \`X-Socq-Source: skill-rest\` for MCP, CLI, or REST.
6. Save the returned task ID. Treat \`queued\` and \`running\` as incomplete and follow [async-tasks.md](references/async-tasks.md) until \`succeeded\` or \`failed\`.
7. Follow [pagination.md](references/pagination.md) for all requested pages. Retrieve task files when complete raw JSONL output is required.
8. Read [errors.md](references/errors.md) before retrying authentication, credit, rate-limit, validation, or provider failures.

## Output Expectations

Include:

- selected endpoint and execution path (MCP, CLI, or REST)
- concise input and filter summary
- expected and reported credit usage when available
- task ID and terminal status
- result count, pages read, and whether more data remains
- normalized findings or the raw export location
- collection time, failed requests, unsupported filters, and incomplete coverage

## Guardrails

- Collect only public data supported by the selected endpoint.
- Do not retry a failed paid request blindly; inspect the normalized error first.
- Do not start a paid large-volume or multi-endpoint run without user confirmation.
- Do not claim completeness when pagination stops early, a provider fails, or a requested filter is unsupported.
- Do not compare metrics collected with different date windows, filters, locales, or content types without labeling the difference.
- Keep task IDs in working notes so interrupted research can resume without resubmitting.
`;
  await writeFile(resolve(skillRoot, "SKILL.md"), skill, "utf8");

  const openai = `interface:
  display_name: "SocQ ${title} Research"
  short_description: "Collect and analyze public ${title} data"
  default_prompt: "Use $${skillName} to collect and analyze this public ${title} research request."
dependencies:
  tools:
    - type: "mcp"
      value: "socq"
      description: "Hosted SocQ ${title} data tools"
      transport: "streamable_http"
      url: "https://api.socq.ai/mcp?platforms=${platform}"
`;
  await writeFile(resolve(skillRoot, "agents", "openai.yaml"), openai, "utf8");
  await copyFile(platformReference, resolve(referencesRoot, "platform.md"));
  for (const name of ["authentication.md", "async-tasks.md", "billing.md", "errors.md", "pagination.md"]) {
    await copyFile(resolve("skills/socq-social-research/references", name), resolve(referencesRoot, name));
  }
}

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
    linkedin: "LinkedIn",
    "google-maps": "Google Maps",
    "google-play": "Google Play",
    "apple-app-store": "Apple App Store",
    "truth-social": "Truth Social",
    rednote: "Rednote",
    douyin: "Douyin",
    seo: "SEO",
    tiktok: "TikTok",
    x: "X",
    youtube: "YouTube",
  };
  return titles[platform] ?? platform.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join(" ");
}

function platformSkillDescription(platform: string, title: string): string {
  const subjects: Record<string, string> = {
    "facebook-ad-library": "ads, advertisers, creatives, and campaign activity",
    "facebook-marketplace": "Marketplace listings, sellers, prices, and product details",
    seo: "keyword volume, suggestions, related terms, difficulty, intent, organic results, and site rankings",
    "tiktok-shop": "TikTok Shop products, shops, creators, categories, and sales signals",
  };
  const subject = subjects[platform] ?? `${title} content, accounts, keywords, and performance data`;
  return `Research public ${subject} with SocQ. Use when an agent needs ${title}-specific discovery, collection, endpoint selection, credit estimates, asynchronous task execution, pagination, or raw exports through the SocQ CLI, MCP, or REST API.`;
}

function platformPlaybook(platform: string): string {
  if (platform === "x") {
    return `
## Plan X research

Choose the endpoint from the shape of the question instead of treating every X request as generic search:

- Use \`x/search\` for topic, phrase, hashtag, or time-bounded conversation discovery. Preserve the user's query operators and requested ordering.
- Use \`x/trends\` for currently trending topics. Report the collection time and requested region because trends are time- and market-sensitive.
- Use \`x/profiles\` to resolve account identity before collecting an account's posts or network.
- Use \`x/user-posts\` for a known account's timeline and \`x/posts\` when the user supplies specific post URLs or IDs.
- Use \`x/post-replies\`, \`x/post-quotes\`, or \`x/post-retweeters\` for distinct engagement behaviors. Do not combine them into one engagement metric without labeling each source.
- Use \`x/followers-list\` and \`x/following-list\` for network questions. Treat the returned relationship snapshot as point-in-time data, not proof of historical following.

For conversation analysis, collect seed posts first, retain their IDs, and expand only the requested reply, quote, or repost branches. Distinguish original posts, replies, quotes, and reposts in the final report. When comparing accounts, use the same date window and collection method for each account. X search and trend results can change quickly, so state when the data was collected and avoid claiming exhaustive coverage when pagination or search visibility limits the result.

`;
  }
  if (platform === "youtube") {
    return `
## Plan YouTube research

Select an endpoint based on the YouTube content object the user needs:

- Use \`youtube/search\` or \`youtube/hashtag-search\` for discovery, then resolve selected results with \`youtube/videos\` or \`youtube/channels\` when detailed metadata is required.
- Use \`youtube/channel-videos\`, \`youtube/channel-live-videos\`, and \`youtube/shorts\` for format-specific channel inventories. Keep regular uploads, live streams, and Shorts separate in comparisons.
- Use \`youtube/playlist-videos\` only when playlist membership or ordering matters; do not treat a playlist as the channel's complete catalog.
- Use \`youtube/comments\` for top-level discussion and \`youtube/comment-replies\` for a selected thread. Preserve parent comment IDs so replies remain attributable.
- Use \`youtube/transcripts\` for spoken-content analysis. Report unavailable, disabled, auto-generated, or language-mismatched transcripts instead of substituting descriptions.
- Use \`youtube/community-posts\` for channel community activity and keep it distinct from video publishing activity.

Resolve channel and video URLs to canonical IDs before joining results across endpoints. For performance comparisons, align publication windows and distinguish cumulative counters from activity observed during the requested period. A video's current views or comments are not the number gained inside a historical date range. When analyzing themes from transcripts and comments, identify which evidence comes from creator speech and which comes from audience discussion. State whether the result includes videos, Shorts, live streams, playlists, community posts, or only a subset.

`;
  }
  return "";
}

function platformSkillName(platform: string): string {
  const names: Record<string, string> = {
    "facebook-ad-library": "socq-facebook-ad-library",
    "facebook-marketplace": "socq-facebook-marketplace",
    "tiktok-shop": "socq-tiktok-shop",
  };
  return names[platform] ?? `socq-${platform}-research`;
}

function platformHomepage(platform: string): string {
  const published = new Set([
    "facebook",
    "facebook-ad-library",
    "facebook-marketplace",
    "instagram",
    "linkedin",
    "pinterest",
    "reddit",
    "seo",
    "threads",
    "tiktok",
    "tiktok-shop",
    "x",
    "youtube",
  ]);
  return published.has(platform) ? `https://socq.ai/apis/${platform}` : "https://socq.ai/platforms";
}
