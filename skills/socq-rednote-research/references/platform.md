# Rednote

Generated from SocQ Capability Registry schema `v1-132d958902f5`. Read this file when the request targets Rednote.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`rednote/comment-replies`](https://docs.socq.ai/api-manual/rednote/comment-replies) | Fetch normalized comment replies data from Rednote. | comment_id, url | `comment@1.0` | 1 credits/request |
| [`rednote/comments`](https://docs.socq.ai/api-manual/rednote/comments) | Fetch normalized comments data from Rednote. | url | `comment@1.0` | 1 credits/request |
| [`rednote/home-recommendations`](https://docs.socq.ai/api-manual/rednote/home-recommendations) | Fetch normalized home recommendations data from Rednote. | none | `post@1.0` | 1 credits/request |
| [`rednote/notes`](https://docs.socq.ai/api-manual/rednote/notes) | Fetch normalized notes data from Rednote. | url | `post@1.0` | 1 credits/request |
| [`rednote/profiles`](https://docs.socq.ai/api-manual/rednote/profiles) | Fetch normalized profiles data from Rednote. | one of: url; user_id | `account@1.0` | 1 credits/request |
| [`rednote/search`](https://docs.socq.ai/api-manual/rednote/search) | Fetch normalized search data from Rednote. | query | `post@1.0` | 1 credits/request |
| [`rednote/search-users`](https://docs.socq.ai/api-manual/rednote/search-users) | Fetch normalized search users data from Rednote. | query | `account@1.0` | 1 credits/request |
| [`rednote/user-notes`](https://docs.socq.ai/api-manual/rednote/user-notes) | Fetch normalized user notes data from Rednote. | one of: url; user_id | `post@1.0` | 1 credits/request |

## Validated examples

### `rednote/comment-replies`

Typed MCP tool: `socq_rednote_comment_replies`

```json
{
  "url": "https://www.xiaohongshu.com/explore/example",
  "comment_id": "example_comment_id"
}
```

### `rednote/comments`

Typed MCP tool: `socq_rednote_comments`

```json
{
  "url": "https://www.xiaohongshu.com/explore/example"
}
```

### `rednote/home-recommendations`

Typed MCP tool: `socq_rednote_home_recommendations`

```json
{
  "category": "homefeed_recommend",
  "results_limit": 20
}
```

### `rednote/notes`

Typed MCP tool: `socq_rednote_notes`

```json
{
  "url": "https://www.xiaohongshu.com/explore/example?xsec_token=example"
}
```

### `rednote/profiles`

Typed MCP tool: `socq_rednote_profiles`

```json
{
  "user_id": "example_user_id"
}
```

### `rednote/search`

Typed MCP tool: `socq_rednote_search`

```json
{
  "query": "旅行攻略",
  "sort_by": "general",
  "media_type": "all"
}
```

### `rednote/search-users`

Typed MCP tool: `socq_rednote_search_users`

```json
{
  "query": "摄影"
}
```

### `rednote/user-notes`

Typed MCP tool: `socq_rednote_user_notes`

```json
{
  "user_id": "example_user_id"
}
```
