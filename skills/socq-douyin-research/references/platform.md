# Douyin

Generated from SocQ Capability Registry schema `v1-457a38f62a01`. Read this file when the request targets Douyin.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`douyin/comments`](https://docs.socq.ai/api-manual/douyin/comments) | Collect one page of public Douyin video comments. | url | `comment@1.0` | 0.1 credits/request |
| [`douyin/live-room-info`](https://docs.socq.ai/api-manual/douyin/live-room-info) | Collect public Douyin live room details. | room_id | `live-room@1.0` | 0.1 credits/request |
| [`douyin/live-room-products`](https://docs.socq.ai/api-manual/douyin/live-room-products) | Collect one page of public Douyin live room products. | author_id, room_id | `product@1.0` | 0.1 credits/request |
| [`douyin/profiles`](https://docs.socq.ai/api-manual/douyin/profiles) | Collect a public Douyin profile. | one of: url; user_id | `account@1.0` | 0.1 credits/request |
| [`douyin/search`](https://docs.socq.ai/api-manual/douyin/search) | Search public Douyin videos. | query | `reel-video@1.0` | 0.1 credits/request |
| [`douyin/user-videos`](https://docs.socq.ai/api-manual/douyin/user-videos) | Collect one page of public Douyin user videos. | one of: url; user_id | `reel-video@1.0` | 0.1 credits/request |
| [`douyin/videos`](https://docs.socq.ai/api-manual/douyin/videos) | Collect public Douyin video details. | url | `reel-video@1.0` | 0.1 credits/request |

## Validated examples

### `douyin/comments`

Typed MCP tool: `socq_douyin_comments`

```json
{
  "url": "https://www.douyin.com/video/7448118827402972455",
  "results_limit": 3
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
  "room_id": "7462723839303093032",
  "author_id": "82194685715",
  "results_limit": 3
}
```

### `douyin/profiles`

Typed MCP tool: `socq_douyin_profiles`

```json
{
  "user_id": "MS4wLjABAAAAW9FWcqS7RdQAWPd2AA5fL_ilmqsIFUCQ_Iym6Yh9_cUa6ZRqVLjVQSUjlHrfXY1Y"
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
  "user_id": "MS4wLjABAAAANXSltcLCzDGmdNFI2Q_QixVTr67NiYzjKOIP5s03CAE",
  "results_limit": 3
}
```

### `douyin/videos`

Typed MCP tool: `socq_douyin_videos`

```json
{
  "url": "https://www.douyin.com/video/7448118827402972455"
}
```
