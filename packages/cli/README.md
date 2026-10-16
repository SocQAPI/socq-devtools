# @socq/cli

Catalog-driven command-line interface for SocQ social-data APIs.

## Install

```bash
npm install --global @socq/cli
```

You can also run it without a global install using `npx @socq/cli`.

## Quick start

```bash
socq --version
socq auth login
socq platforms
socq tools youtube
socq describe youtube/videos
socq youtube videos --urls "https://www.youtube.com/watch?v=VIDEO_ID" --wait
socq task results TASK_ID --format jsonl
socq task download TASK_ID --directory ./socq-results
```

Authentication priority is `--api-key`, `SOCQ_API_KEY`, then the system keyring or local fallback config. Prefer the environment variable or `socq auth login`; command-line keys can remain in shell history.

Use `SOCQ_BASE_URL` or `--base-url` to target another SocQ API environment. Run `socq mcp` to start the bundled stdio MCP bridge.

Agent Skills should pass `--request-source skill` or set `SOCQ_REQUEST_SOURCE=skill`; submitted tasks are then attributed as `skill-cli`.

`socq tools` follows Catalog pagination and lists every available endpoint. Add a platform, such as `socq tools tiktok`, to filter the complete list. `socq --version` prints the installed package version without authentication or network access.

See the [SocQ website](https://socq.ai/).

## License

MIT
