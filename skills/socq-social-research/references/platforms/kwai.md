# Kwai

Generated from SocQ Capability Registry schema `v1-457a38f62a01`. Read this file when the request targets Kwai.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`kwai/posts`](https://docs.socq.ai/api-manual/kwai/posts) | Collect a public Kwai post. | url | `post@1.0` | 0.19 credits/request |
| [`kwai/profiles`](https://docs.socq.ai/api-manual/kwai/profiles) | Collect a public Kwai profile. | one of: url; username | `account@1.0` | 0.19 credits/request |
| [`kwai/user-posts`](https://docs.socq.ai/api-manual/kwai/user-posts) | Collect one page of public Kwai user posts. | one of: url; username | `post@1.0` | 0.19 credits/request |

## Validated examples

### `kwai/posts`

Typed MCP tool: `socq_kwai_posts`

```json
{
  "url": "https://www.kwai.com/@ShortShortz8/photo/5235021727595785285"
}
```

### `kwai/profiles`

Typed MCP tool: `socq_kwai_profiles`

```json
{
  "url": "https://www.kwai.com/@ShortShortz8"
}
```

### `kwai/user-posts`

Typed MCP tool: `socq_kwai_user_posts`

```json
{
  "url": "https://www.kwai.com/@ShortShortz8"
}
```
