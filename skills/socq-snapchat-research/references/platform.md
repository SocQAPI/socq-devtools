# Snapchat

Generated from SocQ Capability Registry schema `v1-457a38f62a01`. Read this file when the request targets Snapchat.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`snapchat/profiles`](https://docs.socq.ai/api-manual/snapchat/profiles) | Collect a public Snapchat profile. | username | `account@1.0` | 0.19 credits/request |
| [`snapchat/spotlight-comments`](https://docs.socq.ai/api-manual/snapchat/spotlight-comments) | Collect one page of public Snapchat Spotlight comments. | url | `comment@1.0` | 0.19 credits/request |
| [`snapchat/spotlights`](https://docs.socq.ai/api-manual/snapchat/spotlights) | Collect a public Snapchat Spotlight item. | url | `reel-video@1.0` | 0.19 credits/request |

## Validated examples

### `snapchat/profiles`

Typed MCP tool: `socq_snapchat_profiles`

```json
{
  "username": "zane"
}
```

### `snapchat/spotlight-comments`

Typed MCP tool: `socq_snapchat_spotlight_comments`

```json
{
  "url": "https://www.snapchat.com/@queenhaley_13/spotlight/W7_EDlXWTBiXAEEniNoMPwAAYY2pnZnF0bG52AZslQsUdAZslQoRQAAAAAQ"
}
```

### `snapchat/spotlights`

Typed MCP tool: `socq_snapchat_spotlights`

```json
{
  "url": "https://www.snapchat.com/@queenhaley_13/spotlight/W7_EDlXWTBiXAEEniNoMPwAAYY2pnZnF0bG52AZslQsUdAZslQoRQAAAAAQ"
}
```
