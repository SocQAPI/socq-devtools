# @socq/mcp

Local stdio bridge for the hosted SocQ Streamable HTTP MCP server. It forwards MCP messages and credentials without maintaining a separate copy of SocQ tool schemas.

## Run

```bash
SOCQ_API_KEY=your_api_key npx @socq/mcp
```

Filter the visible tools when the client only needs a subset:

```bash
npx @socq/mcp --platforms youtube,tiktok
npx @socq/mcp --tools youtube_comments,x_search
```

Configuration variables:

- `SOCQ_API_KEY`: SocQ API key.
- `SOCQ_MCP_URL`: remote MCP URL; defaults to `https://api.socq.ai/mcp`.
- `SOCQ_MCP_PLATFORMS`: comma-separated platform filter.
- `SOCQ_MCP_TOOLS`: comma-separated endpoint tool filter.

Do not configure platforms and tools at the same time. See the [SocQ MCP documentation](https://socq.ai/mcp).

## License

MIT
