# Douyin

Generated from SocQ Capability Registry schema `v1-132d958902f5`. Read this file when the request targets Douyin.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`douyin/comments`](https://docs.socq.ai/api-manual/douyin/comments) | Fetch normalized comments data from Douyin. | url | `comment@1.0` | 0.1 credits/request |
| [`douyin/live-room-info`](https://docs.socq.ai/api-manual/douyin/live-room-info) | Fetch normalized live room info data from Douyin. | room_id | `live-room@1.0` | 0.1 credits/request |
| [`douyin/live-room-products`](https://docs.socq.ai/api-manual/douyin/live-room-products) | Fetch normalized live room products data from Douyin. | author_id, room_id | `product@1.0` | 0.1 credits/request |
| [`douyin/profiles`](https://docs.socq.ai/api-manual/douyin/profiles) | Fetch normalized profiles data from Douyin. | one of: url; user_id | `account@1.0` | 0.1 credits/request |
| [`douyin/search`](https://docs.socq.ai/api-manual/douyin/search) | Fetch normalized search data from Douyin. | query | `reel-video@1.0` | 0.1 credits/request |
| [`douyin/user-videos`](https://docs.socq.ai/api-manual/douyin/user-videos) | Fetch normalized user videos data from Douyin. | one of: url; user_id | `reel-video@1.0` | 0.1 credits/request |
| [`douyin/videos`](https://docs.socq.ai/api-manual/douyin/videos) | Fetch normalized videos data from Douyin. | url | `reel-video@1.0` | 0.1 credits/request |

## Validated examples

### `douyin/comments`

Typed MCP tool: `socq_douyin_comments`

```json
{
  "url": "https://www.douyin.com/video/7123456789012345678",
  "results_limit": 20
}
```

### `douyin/live-room-info`

Typed MCP tool: `socq_douyin_live_room_info`

```json
{
  "room_id": "7462723839303093032"
}
```

### `douyin/live-room-products`

Typed MCP tool: `socq_douyin_live_room_products`

```json
{
  "room_id": "7356742011975715619",
  "author_id": "2207432981615527",
  "results_limit": 20
}
```

### `douyin/profiles`

Typed MCP tool: `socq_douyin_profiles`

```json
{
  "user_id": "MS4wLjABAAAAExample"
}
```

### `douyin/search`

Typed MCP tool: `socq_douyin_search`

```json
{
  "query": "人工智能"
}
```

### `douyin/user-videos`

Typed MCP tool: `socq_douyin_user_videos`

```json
{
  "user_id": "MS4wLjABAAAAExample",
  "results_limit": 20
}
```

### `douyin/videos`

Typed MCP tool: `socq_douyin_videos`

```json
{
  "url": "https://www.douyin.com/video/7123456789012345678"
}
```
