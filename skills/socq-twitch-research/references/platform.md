# Twitch

Generated from SocQ Capability Registry schema `v1-132d958902f5`. Read this file when the request targets Twitch.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`twitch/clips`](https://docs.socq.ai/api-manual/twitch/clips) | Fetch normalized clips data from Twitch. | url | `reel-video@1.0` | 0.19 credits/request |
| [`twitch/profiles`](https://docs.socq.ai/api-manual/twitch/profiles) | Fetch normalized profiles data from Twitch. | username | `account@1.0` | 0.19 credits/request |
| [`twitch/user-videos`](https://docs.socq.ai/api-manual/twitch/user-videos) | Fetch normalized user videos data from Twitch. | username | `reel-video@1.0` | 0.19 credits/request |

## Validated examples

### `twitch/clips`

Typed MCP tool: `socq_twitch_clips`

```json
{
  "url": "https://www.twitch.tv/example/clip/ExampleClip"
}
```

### `twitch/profiles`

Typed MCP tool: `socq_twitch_profiles`

```json
{
  "username": "twitch"
}
```

### `twitch/user-videos`

Typed MCP tool: `socq_twitch_user_videos`

```json
{
  "username": "twitch",
  "filter_by": "all",
  "sort_by": "time"
}
```
