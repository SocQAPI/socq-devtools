# Bluesky

Generated from SocQ Capability Registry schema `v1-132d958902f5`. Read this file when the request targets Bluesky.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`bluesky/posts`](https://docs.socq.ai/api-manual/bluesky/posts) | Fetch normalized posts data from Bluesky. | url | `post@1.0` | 0.19 credits/request |
| [`bluesky/profiles`](https://docs.socq.ai/api-manual/bluesky/profiles) | Fetch normalized profiles data from Bluesky. | username | `account@1.0` | 0.19 credits/request |
| [`bluesky/user-posts`](https://docs.socq.ai/api-manual/bluesky/user-posts) | Fetch normalized user posts data from Bluesky. | one of: user_id; username | `post@1.0` | 0.19 credits/request |

## Validated examples

### `bluesky/posts`

Typed MCP tool: `socq_bluesky_posts`

```json
{
  "url": "https://bsky.app/profile/bsky.app/post/example"
}
```

### `bluesky/profiles`

Typed MCP tool: `socq_bluesky_profiles`

```json
{
  "username": "bsky.app"
}
```

### `bluesky/user-posts`

Typed MCP tool: `socq_bluesky_user_posts`

```json
{
  "username": "bsky.app"
}
```
