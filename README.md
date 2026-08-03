# SocQ Devtools

Official SocQ CLI, stdio MCP bridge, and Agent Skill. Endpoint schemas are discovered from the hosted SocQ Capability Registry rather than maintained in this repository.

## Workspace

- [`@socq/core`](packages/core): REST and Capability Catalog client.
- [`@socq/cli`](packages/cli): catalog-driven `socq` command.
- [`@socq/mcp`](packages/mcp): local stdio bridge to hosted SocQ MCP.
- [`socq-social-research`](skills/socq-social-research): Agent research workflow and generated endpoint references.

## Install the Agent Skill

Install the published Skill from ClawHub:

```bash
openclaw skills install @socq/socq-social-research
```

The public listing is [SocQ Social and SEO Research on ClawHub](https://clawhub.ai/socq/skills/socq-social-research). Set `SOCQ_API_KEY` in the OpenClaw process environment before using the Skill. SocQ is an external, credit-metered service, so requests may consume paid credits.

ClawHub publishing is separate from the npm package release. Pull requests run a dry-run for `skills/socq-social-research`; maintainers publish new or changed versions by manually running the `Publish ClawHub skill` workflow. The publishing identity must have access to the `socq` ClawHub publisher, and its token must be stored as the `CLAWHUB_TOKEN` Actions secret. Review the workflow output and ClawHub security scan after every release. If a version is held or blocked, inspect its scan report, fix the Skill, and publish a new version rather than replacing an existing version.

## Development

```bash
pnpm install
pnpm build
pnpm typecheck
pnpm test
```

Generated production artifacts are refreshed immediately before a release:

```bash
SOCQ_BASE_URL=https://api.socq.ai pnpm sync:catalog
pnpm generate:skills
```

Do not commit test-environment Catalog output as production artifacts. npm publishing is performed by the protected `publish.yml` workflow after the committed artifacts match the production Registry.

To prepare a stable release from a clean working tree, run:

```bash
pnpm run release:stable -- 0.1.0
```

This updates all package versions, refreshes production artifacts, runs the release
checks, and creates the release commit. It does not push or publish. After pushing,
run the protected `publish.yml` workflow with `dist_tag` set to `latest` and the
confirmation set to `publish:0.1.0:latest`.

## License

MIT
