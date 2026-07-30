# Tiktok

Generated from SocQ Capability Registry schema `v1-c8347f9103e7`. Read this file when the request targets Tiktok.

## Endpoint selection

| Endpoint | Use for | Input choice | Cost |
| --- | --- | --- | --- |
| [`tiktok/comment-replies`](https://docs.socq.ai/api-manual/tiktok/comment-replies) | Fetch normalized comment replies data from TikTok. | comment_id, url | live pricing |
| [`tiktok/comments`](https://docs.socq.ai/api-manual/tiktok/comments) | Fetch normalized comments data from TikTok. | urls | live pricing |
| [`tiktok/followers-list`](https://docs.socq.ai/api-manual/tiktok/followers-list) | Fetch normalized followers list data from TikTok. | usernames | live pricing |
| [`tiktok/following-list`](https://docs.socq.ai/api-manual/tiktok/following-list) | Fetch normalized following list data from TikTok. | usernames | live pricing |
| [`tiktok/hashtags`](https://docs.socq.ai/api-manual/tiktok/hashtags) | Fetch normalized hashtags data from TikTok. | hashtags | live pricing |
| [`tiktok/live-room-info`](https://docs.socq.ai/api-manual/tiktok/live-room-info) | Fetch normalized live room info data from TikTok. | room_id, user_id | live pricing |
| [`tiktok/profiles`](https://docs.socq.ai/api-manual/tiktok/profiles) | Fetch normalized profiles data from TikTok. | usernames | live pricing |
| [`tiktok/search`](https://docs.socq.ai/api-manual/tiktok/search) | Fetch normalized search data from TikTok. | query | live pricing |
| [`tiktok/trending-feed`](https://docs.socq.ai/api-manual/tiktok/trending-feed) | Fetch normalized trending feed data from TikTok. | region | live pricing |
| [`tiktok/user-videos`](https://docs.socq.ai/api-manual/tiktok/user-videos) | Fetch normalized user videos data from TikTok. | usernames | live pricing |
| [`tiktok/video-transcript`](https://docs.socq.ai/api-manual/tiktok/video-transcript) | Fetch normalized video transcript data from TikTok. | urls | live pricing |
| [`tiktok/videos`](https://docs.socq.ai/api-manual/tiktok/videos) | Fetch normalized videos data from TikTok. | urls | live pricing |

## Validated examples

### `tiktok/comment-replies`

Typed MCP tool: `socq_tiktok_comment_replies`

```json
{
  "url": "https://www.tiktok.com/@scout2015/video/6718335390845095173",
  "comment_id": "1234567890",
  "results_limit": 20
}
```

### `tiktok/comments`

Typed MCP tool: `socq_tiktok_comments`

```json
{
  "urls": [
    "https://www.tiktok.com/@scout2015/video/6718335390845095173"
  ]
}
```

### `tiktok/followers-list`

Typed MCP tool: `socq_tiktok_followers_list`

```json
{
  "usernames": [
    "@tiktok"
  ],
  "results_limit": 20
}
```

### `tiktok/following-list`

Typed MCP tool: `socq_tiktok_following_list`

```json
{
  "usernames": [
    "@tiktok"
  ],
  "results_limit": 20
}
```

### `tiktok/hashtags`

Typed MCP tool: `socq_tiktok_hashtags`

```json
{
  "hashtags": [
    "#travel"
  ]
}
```

### `tiktok/live-room-info`

Typed MCP tool: `socq_tiktok_live_room_info`

```json
{
  "room_id": "7523685855395842871",
  "user_id": "6742945285876515845"
}
```

### `tiktok/profiles`

Typed MCP tool: `socq_tiktok_profiles`

```json
{
  "usernames": [
    "@tiktok"
  ]
}
```

### `tiktok/search`

Typed MCP tool: `socq_tiktok_search`

```json
{
  "query": "AI tools"
}
```

### `tiktok/trending-feed`

Typed MCP tool: `socq_tiktok_trending_feed`

```json
{
  "region": "US",
  "results_limit": 20
}
```

### `tiktok/user-videos`

Typed MCP tool: `socq_tiktok_user_videos`

```json
{
  "usernames": [
    "@tiktok"
  ],
  "results_limit": 20
}
```

### `tiktok/video-transcript`

Typed MCP tool: `socq_tiktok_video_transcript`

```json
{
  "urls": [
    "https://www.tiktok.com/@scout2015/video/6718335390845095173"
  ],
  "language": "en"
}
```

### `tiktok/videos`

Typed MCP tool: `socq_tiktok_videos`

```json
{
  "urls": [
    "https://www.tiktok.com/@scout2015/video/6718335390845095173"
  ]
}
```
