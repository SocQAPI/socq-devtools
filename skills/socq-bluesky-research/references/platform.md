# Bluesky

Generated from SocQ Capability Registry schema `v1-457a38f62a01`. Read this file when the request targets Bluesky.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`bluesky/posts`](https://docs.socq.ai/api-manual/bluesky/posts) | Collect a public Bluesky post. | url | `post@1.0` | 0.19 credits/request |
| [`bluesky/profiles`](https://docs.socq.ai/api-manual/bluesky/profiles) | Collect a public Bluesky profile. | username | `account@1.0` | 0.19 credits/request |
| [`bluesky/user-posts`](https://docs.socq.ai/api-manual/bluesky/user-posts) | Collect one page of public Bluesky user posts. | one of: user_id; username | `post@1.0` | 0.19 credits/request |

## Validated examples

### `bluesky/posts`

Typed MCP tool: `socq_bluesky_posts`

```json
{
  "url": "https://bsky.app/profile/jay.bsky.team/post/3micofpyeys2g"
}
```

### `bluesky/profiles`

Typed MCP tool: `socq_bluesky_profiles`

```json
{
  "username": "jay.bsky.team"
}
```

### `bluesky/user-posts`

Typed MCP tool: `socq_bluesky_user_posts`

```json
{
  "username": "jay.bsky.team"
}
```
