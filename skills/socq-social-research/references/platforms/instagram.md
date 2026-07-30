# Instagram

Generated from SocQ Capability Registry schema `v1-c8347f9103e7`. Read this file when the request targets Instagram.

## Endpoint selection

| Endpoint | Use for | Input choice | Cost |
| --- | --- | --- | --- |
| [`instagram/audio-reels`](https://docs.socq.ai/api-manual/instagram/audio-reels) | Fetch normalized audio reels data from Instagram. | audio_ids | live pricing |
| [`instagram/comments`](https://docs.socq.ai/api-manual/instagram/comments) | Fetch normalized comments data from Instagram. | urls | live pricing |
| [`instagram/followers-count`](https://docs.socq.ai/api-manual/instagram/followers-count) | Fetch normalized followers count data from Instagram. | one of query, urls, usernames | live pricing |
| [`instagram/followers-list`](https://docs.socq.ai/api-manual/instagram/followers-list) | Fetch normalized followers list data from Instagram. | usernames | live pricing |
| [`instagram/following-list`](https://docs.socq.ai/api-manual/instagram/following-list) | Fetch normalized following list data from Instagram. | usernames | live pricing |
| [`instagram/hashtag-posts`](https://docs.socq.ai/api-manual/instagram/hashtag-posts) | Fetch normalized hashtag posts data from Instagram. | hashtags | live pricing |
| [`instagram/highlight-items`](https://docs.socq.ai/api-manual/instagram/highlight-items) | Fetch normalized highlight items data from Instagram. | highlight_ids | live pricing |
| [`instagram/post-info`](https://docs.socq.ai/api-manual/instagram/post-info) | Fetch normalized post info data from Instagram. | urls | live pricing |
| [`instagram/posts`](https://docs.socq.ai/api-manual/instagram/posts) | Fetch normalized posts data from Instagram. | one of query, urls, usernames | live pricing |
| [`instagram/profiles`](https://docs.socq.ai/api-manual/instagram/profiles) | Fetch normalized profiles data from Instagram. | usernames | live pricing |
| [`instagram/reels`](https://docs.socq.ai/api-manual/instagram/reels) | Fetch normalized reels data from Instagram. | one of query, urls, usernames | live pricing |
| [`instagram/reels-search`](https://docs.socq.ai/api-manual/instagram/reels-search) | Fetch normalized reels search data from Instagram. | query | live pricing |
| [`instagram/search`](https://docs.socq.ai/api-manual/instagram/search) | Fetch normalized search data from Instagram. | one of query, urls, usernames | live pricing |
| [`instagram/story-highlights`](https://docs.socq.ai/api-manual/instagram/story-highlights) | Fetch normalized story highlights data from Instagram. | usernames | live pricing |
| [`instagram/tagged-posts`](https://docs.socq.ai/api-manual/instagram/tagged-posts) | Fetch normalized tagged posts data from Instagram. | usernames | live pricing |
| [`instagram/transcript`](https://docs.socq.ai/api-manual/instagram/transcript) | Fetch normalized transcript data from Instagram. | urls | live pricing |
| [`instagram/trending-reels`](https://docs.socq.ai/api-manual/instagram/trending-reels) | Fetch normalized trending reels data from Instagram. | none | live pricing |

## Validated examples

### `instagram/audio-reels`

Typed MCP tool: `socq_instagram_audio_reels`

```json
{
  "audio_ids": [
    "123456789012345"
  ],
  "results_limit": 20
}
```

### `instagram/comments`

Typed MCP tool: `socq_instagram_comments`

```json
{
  "urls": [
    "https://www.instagram.com/p/ABC123xyz/"
  ]
}
```

### `instagram/followers-count`

Typed MCP tool: `socq_instagram_followers_count`

```json
{
  "usernames": [
    "instagram"
  ]
}
```

### `instagram/followers-list`

Typed MCP tool: `socq_instagram_followers_list`

```json
{
  "usernames": [
    "instagram"
  ],
  "results_limit": 100
}
```

### `instagram/following-list`

Typed MCP tool: `socq_instagram_following_list`

```json
{
  "usernames": [
    "instagram"
  ],
  "results_limit": 100
}
```

### `instagram/hashtag-posts`

Typed MCP tool: `socq_instagram_hashtag_posts`

```json
{
  "hashtags": [
    "#travel"
  ],
  "results_limit": 20
}
```

### `instagram/highlight-items`

Typed MCP tool: `socq_instagram_highlight_items`

```json
{
  "highlight_ids": [
    "18067016518767507"
  ]
}
```

### `instagram/post-info`

Typed MCP tool: `socq_instagram_post_info`

```json
{
  "urls": [
    "https://www.instagram.com/p/ABC123xyz/"
  ]
}
```

### `instagram/posts`

Typed MCP tool: `socq_instagram_posts`

```json
{
  "usernames": [
    "instagram"
  ]
}
```

### `instagram/profiles`

Typed MCP tool: `socq_instagram_profiles`

```json
{
  "usernames": [
    "instagram"
  ]
}
```

### `instagram/reels`

Typed MCP tool: `socq_instagram_reels`

```json
{
  "usernames": [
    "instagram"
  ]
}
```

### `instagram/reels-search`

Typed MCP tool: `socq_instagram_reels_search`

```json
{
  "query": "street photography",
  "results_limit": 20
}
```

### `instagram/search`

Typed MCP tool: `socq_instagram_search`

```json
{
  "query": "travel photography"
}
```

### `instagram/story-highlights`

Typed MCP tool: `socq_instagram_story_highlights`

```json
{
  "usernames": [
    "instagram"
  ]
}
```

### `instagram/tagged-posts`

Typed MCP tool: `socq_instagram_tagged_posts`

```json
{
  "usernames": [
    "instagram"
  ],
  "results_limit": 20
}
```

### `instagram/transcript`

Typed MCP tool: `socq_instagram_transcript`

```json
{
  "urls": [
    "https://www.instagram.com/reel/DHsD6HGqJhp/"
  ]
}
```

### `instagram/trending-reels`

Typed MCP tool: `socq_instagram_trending_reels`

```json
{}
```
