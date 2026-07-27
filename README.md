# SocQ Devtools

Official SocQ CLI, stdio MCP bridge, and Agent Skill. Endpoint schemas are discovered from the hosted SocQ Capability Registry rather than maintained in this repository.

## Workspace

- [`@socq/core`](packages/core): REST and Capability Catalog client.
- [`@socq/cli`](packages/cli): catalog-driven `socq` command.
- [`@socq/mcp`](packages/mcp): local stdio bridge to hosted SocQ MCP.
- [`socq-social-research`](skills/socq-social-research): Agent research workflow and generated endpoint references.

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
