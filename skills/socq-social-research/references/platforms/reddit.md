# Reddit

Generated from SocQ Capability Registry schema `v1-c8347f9103e7`. Read this file when the request targets Reddit.

## Endpoint selection

| Endpoint | Use for | Input choice | Cost |
| --- | --- | --- | --- |
| [`reddit/comments`](https://docs.socq.ai/api-manual/reddit/comments) | Fetch normalized comments data from Reddit. | urls | live pricing |
| [`reddit/posts`](https://docs.socq.ai/api-manual/reddit/posts) | Fetch normalized posts data from Reddit. | urls | live pricing |
| [`reddit/search`](https://docs.socq.ai/api-manual/reddit/search) | Fetch normalized search data from Reddit. | query | live pricing |
| [`reddit/subreddit-posts`](https://docs.socq.ai/api-manual/reddit/subreddit-posts) | Fetch normalized subreddit posts data from Reddit. | urls | live pricing |

## Validated examples

### `reddit/comments`

Typed MCP tool: `socq_reddit_comments`

```json
{
  "urls": [
    "https://www.reddit.com/r/technology/comments/abc123/example_post/"
  ]
}
```

### `reddit/posts`

Typed MCP tool: `socq_reddit_posts`

```json
{
  "urls": [
    "https://www.reddit.com/r/technology/comments/abc123/example_post/"
  ]
}
```

### `reddit/search`

Typed MCP tool: `socq_reddit_search`

```json
{
  "query": "AI agents"
}
```

### `reddit/subreddit-posts`

Typed MCP tool: `socq_reddit_subreddit_posts`

```json
{
  "urls": [
    "https://www.reddit.com/r/technology/"
  ]
}
```
