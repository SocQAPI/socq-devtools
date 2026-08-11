# X

Generated from SocQ Capability Registry schema `v1-c051f5df2885`. Read this file when the request targets X.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`x/followers-list`](https://docs.socq.ai/api-manual/x/followers-list) | Fetch normalized followers list data from X. | usernames | `relationship@1.0` | live pricing |
| [`x/following-list`](https://docs.socq.ai/api-manual/x/following-list) | Fetch normalized following list data from X. | usernames | `relationship@1.0` | live pricing |
| [`x/post-quotes`](https://docs.socq.ai/api-manual/x/post-quotes) | Fetch normalized post quotes data from X. | urls | `post@1.0` | live pricing |
| [`x/post-replies`](https://docs.socq.ai/api-manual/x/post-replies) | Fetch normalized post replies data from X. | urls | `comment@1.0` | live pricing |
| [`x/post-retweeters`](https://docs.socq.ai/api-manual/x/post-retweeters) | Fetch normalized post retweeters data from X. | urls | `relationship@1.0` | live pricing |
| [`x/posts`](https://docs.socq.ai/api-manual/x/posts) | Fetch normalized posts data from X. | urls | `post@1.0` | live pricing |
| [`x/profiles`](https://docs.socq.ai/api-manual/x/profiles) | Fetch normalized profiles data from X. | usernames | `account@1.0` | live pricing |
| [`x/search`](https://docs.socq.ai/api-manual/x/search) | Fetch normalized search data from X. | query | `post@1.0` | live pricing |
| [`x/trends`](https://docs.socq.ai/api-manual/x/trends) | Fetch normalized trends data from X. | woeids | `hashtag-trend@1.0` | live pricing |
| [`x/user-posts`](https://docs.socq.ai/api-manual/x/user-posts) | Fetch normalized user posts data from X. | usernames | `post@1.0` | live pricing |

## Validated examples

### `x/followers-list`

Typed MCP tool: `socq_x_followers_list`

```json
{
  "usernames": [
    "@X"
  ],
  "results_limit": 200
}
```

### `x/following-list`

Typed MCP tool: `socq_x_following_list`

```json
{
  "usernames": [
    "@X"
  ],
  "results_limit": 200
}
```

### `x/post-quotes`

Typed MCP tool: `socq_x_post_quotes`

```json
{
  "urls": [
    "https://x.com/X/status/2073395918011789670"
  ],
  "results_limit": 20
}
```

### `x/post-replies`

Typed MCP tool: `socq_x_post_replies`

```json
{
  "urls": [
    "https://x.com/X/status/2073395918011789670"
  ],
  "results_limit": 20
}
```

### `x/post-retweeters`

Typed MCP tool: `socq_x_post_retweeters`

```json
{
  "urls": [
    "https://x.com/X/status/2073395918011789670"
  ],
  "results_limit": 100
}
```

### `x/posts`

Typed MCP tool: `socq_x_posts`

```json
{
  "urls": [
    "https://x.com/X/status/2073395918011789670"
  ]
}
```

### `x/profiles`

Typed MCP tool: `socq_x_profiles`

```json
{
  "usernames": [
    "@X"
  ]
}
```

### `x/search`

Typed MCP tool: `socq_x_search`

```json
{
  "query": "AI agents"
}
```

### `x/trends`

Typed MCP tool: `socq_x_trends`

```json
{
  "woeids": [
    "1"
  ],
  "results_limit": 100
}
```

### `x/user-posts`

Typed MCP tool: `socq_x_user_posts`

```json
{
  "usernames": [
    "@X"
  ]
}
```
