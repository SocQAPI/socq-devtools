# Threads

Generated from SocQ Capability Registry schema `v1-132d958902f5`. Read this file when the request targets Threads.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`threads/posts`](https://docs.socq.ai/api-manual/threads/posts) | Fetch normalized posts data from Threads. | urls | `post@1.0` | live pricing |
| [`threads/profiles`](https://docs.socq.ai/api-manual/threads/profiles) | Fetch normalized profiles data from Threads. | urls | `account@1.0` | live pricing |
| [`threads/user-posts`](https://docs.socq.ai/api-manual/threads/user-posts) | Fetch normalized user posts data from Threads. | urls | `post@1.0` | live pricing |

## Validated examples

### `threads/posts`

Typed MCP tool: `socq_threads_posts`

```json
{
  "urls": [
    "https://www.threads.net/@instagram/post/ABC123/"
  ]
}
```

### `threads/profiles`

Typed MCP tool: `socq_threads_profiles`

```json
{
  "urls": [
    "https://www.threads.net/@instagram/"
  ]
}
```

### `threads/user-posts`

Typed MCP tool: `socq_threads_user_posts`

```json
{
  "urls": [
    "https://www.threads.net/@instagram/"
  ]
}
```
