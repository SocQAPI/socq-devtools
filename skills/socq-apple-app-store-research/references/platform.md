# Apple App Store

Generated from SocQ Capability Registry schema `v1-132d958902f5`. Read this file when the request targets Apple App Store.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`apple-app-store/apps`](https://docs.socq.ai/api-manual/apple-app-store/apps) | Fetch normalized apps data from Apple App Store. | urls | `app@1.0` | 0.15 credits/result |
| [`apple-app-store/rankings`](https://docs.socq.ai/api-manual/apple-app-store/rankings) | Fetch normalized rankings data from Apple App Store. | urls | `app@1.0` | 0.15 credits/result |
| [`apple-app-store/reviews`](https://docs.socq.ai/api-manual/apple-app-store/reviews) | Fetch normalized reviews data from Apple App Store. | urls | `review@1.0` | 0.15 credits/result |

## Validated examples

### `apple-app-store/apps`

Typed MCP tool: `socq_apple_app_store_apps`

```json
{
  "urls": [
    "https://apps.apple.com/us/app/chatgpt/id6448311069"
  ]
}
```

### `apple-app-store/rankings`

Typed MCP tool: `socq_apple_app_store_rankings`

```json
{
  "urls": [
    "https://apps.apple.com/us/charts/iphone/productivity-apps/6007"
  ],
  "results_limit": 20
}
```

### `apple-app-store/reviews`

Typed MCP tool: `socq_apple_app_store_reviews`

```json
{
  "urls": [
    "https://apps.apple.com/us/app/chatgpt/id6448311069"
  ],
  "results_limit": 20
}
```
