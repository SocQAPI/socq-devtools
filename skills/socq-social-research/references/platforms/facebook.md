# Facebook

Generated from SocQ Capability Registry schema `v1-603ff741990d`. Read this file when the request targets Facebook.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`facebook/ad-transcript`](https://docs.socq.ai/api-manual/facebook/ad-transcript) | Fetch normalized ad transcript data from Facebook. | urls | `transcript@1.0` | live pricing |
| [`facebook/comment-replies`](https://docs.socq.ai/api-manual/facebook/comment-replies) | Fetch normalized comment replies data from Facebook. | one of: comment_id + url; expansion_token + feedback_id | `comment@1.0` | live pricing |
| [`facebook/comments`](https://docs.socq.ai/api-manual/facebook/comments) | Fetch normalized comments data from Facebook. | urls | `comment@1.0` | live pricing |
| [`facebook/company-reviews`](https://docs.socq.ai/api-manual/facebook/company-reviews) | Fetch normalized company reviews data from Facebook. | urls | `review@1.0` | live pricing |
| [`facebook/event-details`](https://docs.socq.ai/api-manual/facebook/event-details) | Fetch normalized event details data from Facebook. | urls | `event@1.0` | live pricing |
| [`facebook/events-search`](https://docs.socq.ai/api-manual/facebook/events-search) | Fetch normalized events search data from Facebook. | query | `event@1.0` | live pricing |
| [`facebook/group-posts`](https://docs.socq.ai/api-manual/facebook/group-posts) | Fetch normalized group posts data from Facebook. | urls | `post@1.0` | live pricing |
| [`facebook/pages`](https://docs.socq.ai/api-manual/facebook/pages) | Fetch normalized pages data from Facebook. | one of: query; urls; usernames | `account@1.0` | live pricing |
| [`facebook/posts`](https://docs.socq.ai/api-manual/facebook/posts) | Fetch normalized posts data from Facebook. | one of: query; urls; usernames | `post@1.0` | live pricing |
| [`facebook/profile-events`](https://docs.socq.ai/api-manual/facebook/profile-events) | Fetch normalized profile events data from Facebook. | urls | `event@1.0` | live pricing |
| [`facebook/profile-photos`](https://docs.socq.ai/api-manual/facebook/profile-photos) | Fetch normalized profile photos data from Facebook. | urls | `reel-video@1.0` | live pricing |
| [`facebook/profiles`](https://docs.socq.ai/api-manual/facebook/profiles) | Fetch normalized profiles data from Facebook. | urls | `account@1.0` | live pricing |
| [`facebook/reels`](https://docs.socq.ai/api-manual/facebook/reels) | Fetch normalized reels data from Facebook. | urls | `reel-video@1.0` | live pricing |
| [`facebook/video-transcript`](https://docs.socq.ai/api-manual/facebook/video-transcript) | Fetch normalized video transcript data from Facebook. | urls | `transcript@1.0` | live pricing |

## Validated examples

### `facebook/ad-transcript`

Typed MCP tool: `socq_facebook_ad_transcript`

```json
{
  "urls": [
    "https://www.facebook.com/ads/library?id=1545582153738441"
  ]
}
```

### `facebook/comment-replies`

Typed MCP tool: `socq_facebook_comment_replies`

```json
{
  "url": "https://www.facebook.com/NASA/posts/would-you-lie-in-bed-for-60-days-for-scientific-research11-volunteers-did-exactl/1271494461012594/",
  "comment_id": "Y29tbWVudDoxMjcxNDk0NDYxMDEyNTk0XzU4NzcxOTAzMTA0Mjk5MQ==",
  "results_limit": 20
}
```

### `facebook/comments`

Typed MCP tool: `socq_facebook_comments`

```json
{
  "urls": [
    "https://www.facebook.com/reel/1064194079626979/"
  ]
}
```

### `facebook/company-reviews`

Typed MCP tool: `socq_facebook_company_reviews`

```json
{
  "urls": [
    "https://www.facebook.com/PepsiCo/reviews/"
  ],
  "results_limit": 20
}
```

### `facebook/event-details`

Typed MCP tool: `socq_facebook_event_details`

```json
{
  "urls": [
    "https://www.facebook.com/events/2255360061870188/"
  ]
}
```

### `facebook/events-search`

Typed MCP tool: `socq_facebook_events_search`

```json
{
  "query": "technology conference",
  "results_limit": 20
}
```

### `facebook/group-posts`

Typed MCP tool: `socq_facebook_group_posts`

```json
{
  "urls": [
    "https://www.facebook.com/groups/1270525996445602/"
  ]
}
```

### `facebook/pages`

Typed MCP tool: `socq_facebook_pages`

```json
{
  "usernames": [
    "nasa"
  ]
}
```

### `facebook/posts`

Typed MCP tool: `socq_facebook_posts`

```json
{
  "urls": [
    "https://www.facebook.com/nasa"
  ]
}
```

### `facebook/profile-events`

Typed MCP tool: `socq_facebook_profile_events`

```json
{
  "urls": [
    "https://www.facebook.com/NASA"
  ],
  "results_limit": 20
}
```

### `facebook/profile-photos`

Typed MCP tool: `socq_facebook_profile_photos`

```json
{
  "urls": [
    "https://www.facebook.com/NASA"
  ],
  "results_limit": 20
}
```

### `facebook/profiles`

Typed MCP tool: `socq_facebook_profiles`

```json
{
  "urls": [
    "https://www.facebook.com/NASA"
  ]
}
```

### `facebook/reels`

Typed MCP tool: `socq_facebook_reels`

```json
{
  "urls": [
    "https://www.facebook.com/NASA"
  ],
  "results_limit": 20
}
```

### `facebook/video-transcript`

Typed MCP tool: `socq_facebook_video_transcript`

```json
{
  "urls": [
    "https://www.facebook.com/reel/1535656380759655"
  ]
}
```
