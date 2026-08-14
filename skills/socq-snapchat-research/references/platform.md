# Snapchat

Generated from SocQ Capability Registry schema `v1-132d958902f5`. Read this file when the request targets Snapchat.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`snapchat/profiles`](https://docs.socq.ai/api-manual/snapchat/profiles) | Fetch normalized profiles data from Snapchat. | username | `account@1.0` | 0.19 credits/request |
| [`snapchat/spotlight-comments`](https://docs.socq.ai/api-manual/snapchat/spotlight-comments) | Fetch normalized spotlight comments data from Snapchat. | url | `comment@1.0` | 0.19 credits/request |
| [`snapchat/spotlights`](https://docs.socq.ai/api-manual/snapchat/spotlights) | Fetch normalized spotlights data from Snapchat. | url | `reel-video@1.0` | 0.19 credits/request |

## Validated examples

### `snapchat/profiles`

Typed MCP tool: `socq_snapchat_profiles`

```json
{
  "username": "snapchat"
}
```

### `snapchat/spotlight-comments`

Typed MCP tool: `socq_snapchat_spotlight_comments`

```json
{
  "url": "https://www.snapchat.com/spotlight/example"
}
```

### `snapchat/spotlights`

Typed MCP tool: `socq_snapchat_spotlights`

```json
{
  "url": "https://www.snapchat.com/spotlight/example"
}
```
