# Kwai

Generated from SocQ Capability Registry schema `v1-132d958902f5`. Read this file when the request targets Kwai.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`kwai/posts`](https://docs.socq.ai/api-manual/kwai/posts) | Fetch normalized posts data from Kwai. | url | `post@1.0` | 0.19 credits/request |
| [`kwai/profiles`](https://docs.socq.ai/api-manual/kwai/profiles) | Fetch normalized profiles data from Kwai. | one of: url; username | `account@1.0` | 0.19 credits/request |
| [`kwai/user-posts`](https://docs.socq.ai/api-manual/kwai/user-posts) | Fetch normalized user posts data from Kwai. | one of: url; username | `post@1.0` | 0.19 credits/request |

## Validated examples

### `kwai/posts`

Typed MCP tool: `socq_kwai_posts`

```json
{
  "url": "https://www.kwai.com/short-video/example"
}
```

### `kwai/profiles`

Typed MCP tool: `socq_kwai_profiles`

```json
{
  "username": "example"
}
```

### `kwai/user-posts`

Typed MCP tool: `socq_kwai_user_posts`

```json
{
  "username": "example"
}
```
