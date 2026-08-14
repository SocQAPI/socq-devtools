# Google Play

Generated from SocQ Capability Registry schema `v1-132d958902f5`. Read this file when the request targets Google Play.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`google-play/apps`](https://docs.socq.ai/api-manual/google-play/apps) | Fetch normalized apps data from Google Play. | urls | `app@1.0` | 0.15 credits/result |
| [`google-play/rankings`](https://docs.socq.ai/api-manual/google-play/rankings) | Fetch normalized rankings data from Google Play. | urls | `app@1.0` | 0.15 credits/result |
| [`google-play/reviews`](https://docs.socq.ai/api-manual/google-play/reviews) | Fetch normalized reviews data from Google Play. | urls | `review@1.0` | 0.15 credits/result |

## Validated examples

### `google-play/apps`

Typed MCP tool: `socq_google_play_apps`

```json
{
  "urls": [
    "https://play.google.com/store/apps/details?id=com.openai.chatgpt"
  ]
}
```

### `google-play/rankings`

Typed MCP tool: `socq_google_play_rankings`

```json
{
  "urls": [
    "https://play.google.com/store/apps/category/PRODUCTIVITY"
  ],
  "results_limit": 20
}
```

### `google-play/reviews`

Typed MCP tool: `socq_google_play_reviews`

```json
{
  "urls": [
    "https://play.google.com/store/apps/details?id=com.openai.chatgpt"
  ],
  "country": "US",
  "results_limit": 20
}
```
