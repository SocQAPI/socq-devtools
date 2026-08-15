# Twitch

Generated from SocQ Capability Registry schema `v1-457a38f62a01`. Read this file when the request targets Twitch.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`twitch/profiles`](https://docs.socq.ai/api-manual/twitch/profiles) | Collect a public Twitch profile. | username | `account@1.0` | 0.19 credits/request |
| [`twitch/user-videos`](https://docs.socq.ai/api-manual/twitch/user-videos) | Collect one page of public Twitch user videos. | username | `reel-video@1.0` | 0.19 credits/request |

## Validated examples

### `twitch/profiles`

Typed MCP tool: `socq_twitch_profiles`

```json
{
  "username": "ninja"
}
```

### `twitch/user-videos`

Typed MCP tool: `socq_twitch_user_videos`

```json
{
  "username": "ninja",
  "filter_by": "all",
  "sort_by": "time"
}
```
