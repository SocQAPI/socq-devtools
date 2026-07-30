# Youtube

Generated from SocQ Capability Registry schema `v1-c8347f9103e7`. Read this file when the request targets Youtube.

## Endpoint selection

| Endpoint | Use for | Input choice | Cost |
| --- | --- | --- | --- |
| [`youtube/channel-live-videos`](https://docs.socq.ai/api-manual/youtube/channel-live-videos) | Fetch normalized channel live videos data from YouTube. | urls | live pricing |
| [`youtube/channel-videos`](https://docs.socq.ai/api-manual/youtube/channel-videos) | Fetch normalized channel videos data from YouTube. | urls | live pricing |
| [`youtube/channels`](https://docs.socq.ai/api-manual/youtube/channels) | Fetch normalized channels data from YouTube. | urls | live pricing |
| [`youtube/comment-replies`](https://docs.socq.ai/api-manual/youtube/comment-replies) | Fetch normalized comment replies data from YouTube. | continuation_token | live pricing |
| [`youtube/comments`](https://docs.socq.ai/api-manual/youtube/comments) | Fetch normalized comments data from YouTube. | urls | live pricing |
| [`youtube/community-posts`](https://docs.socq.ai/api-manual/youtube/community-posts) | Fetch normalized community posts data from YouTube. | urls | live pricing |
| [`youtube/hashtag-search`](https://docs.socq.ai/api-manual/youtube/hashtag-search) | Fetch normalized hashtag search data from YouTube. | hashtags | live pricing |
| [`youtube/playlist-videos`](https://docs.socq.ai/api-manual/youtube/playlist-videos) | Fetch normalized playlist videos data from YouTube. | urls | live pricing |
| [`youtube/search`](https://docs.socq.ai/api-manual/youtube/search) | Fetch normalized search data from YouTube. | query | live pricing |
| [`youtube/shorts`](https://docs.socq.ai/api-manual/youtube/shorts) | Fetch normalized shorts data from YouTube. | urls | live pricing |
| [`youtube/transcripts`](https://docs.socq.ai/api-manual/youtube/transcripts) | Fetch normalized transcripts data from YouTube. | urls | live pricing |
| [`youtube/videos`](https://docs.socq.ai/api-manual/youtube/videos) | Fetch normalized videos data from YouTube. | urls | live pricing |

## Validated examples

### `youtube/channel-live-videos`

Typed MCP tool: `socq_youtube_channel_live_videos`

```json
{
  "urls": [
    "https://www.youtube.com/@YouTube"
  ],
  "results_limit": 20
}
```

### `youtube/channel-videos`

Typed MCP tool: `socq_youtube_channel_videos`

```json
{
  "urls": [
    "https://www.youtube.com/@YouTube"
  ]
}
```

### `youtube/channels`

Typed MCP tool: `socq_youtube_channels`

```json
{
  "urls": [
    "https://www.youtube.com/@YouTube"
  ]
}
```

### `youtube/comment-replies`

Typed MCP tool: `socq_youtube_comment_replies`

```json
{
  "continuation_token": "reply_continuation_token",
  "results_limit": 20
}
```

### `youtube/comments`

Typed MCP tool: `socq_youtube_comments`

```json
{
  "urls": [
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  ]
}
```

### `youtube/community-posts`

Typed MCP tool: `socq_youtube_community_posts`

```json
{
  "urls": [
    "https://www.youtube.com/@YouTube"
  ],
  "results_limit": 20
}
```

### `youtube/hashtag-search`

Typed MCP tool: `socq_youtube_hashtag_search`

```json
{
  "hashtags": [
    "#technology"
  ],
  "results_limit": 20
}
```

### `youtube/playlist-videos`

Typed MCP tool: `socq_youtube_playlist_videos`

```json
{
  "urls": [
    "https://www.youtube.com/playlist?list=PLBCF2DAC6FFB574DE"
  ],
  "results_limit": 100
}
```

### `youtube/search`

Typed MCP tool: `socq_youtube_search`

```json
{
  "query": "AI agents tutorial"
}
```

### `youtube/shorts`

Typed MCP tool: `socq_youtube_shorts`

```json
{
  "urls": [
    "https://www.youtube.com/@YouTube"
  ]
}
```

### `youtube/transcripts`

Typed MCP tool: `socq_youtube_transcripts`

```json
{
  "urls": [
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  ],
  "language": "en"
}
```

### `youtube/videos`

Typed MCP tool: `socq_youtube_videos`

```json
{
  "urls": [
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  ]
}
```
