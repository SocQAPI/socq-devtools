# Apple App Store

Generated from SocQ Capability Registry schema `v1-457a38f62a01`. Read this file when the request targets Apple App Store.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`apple-app-store/apps`](https://docs.socq.ai/api-manual/apple-app-store/apps) | Collect public Apple App Store app details. | urls | `app@1.0` | 0.15 credits/result |
| [`apple-app-store/rankings`](https://docs.socq.ai/api-manual/apple-app-store/rankings) | Collect public Apple App Store category rankings. | urls | `app@1.0` | 0.15 credits/result |
| [`apple-app-store/reviews`](https://docs.socq.ai/api-manual/apple-app-store/reviews) | Collect public Apple App Store reviews. | urls | `review@1.0` | 0.15 credits/result |

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
    "https://apps.apple.com/us/iphone/charts/6007"
  ],
  "results_limit": 3
}
```

### `apple-app-store/reviews`

Typed MCP tool: `socq_apple_app_store_reviews`

```json
{
  "urls": [
    "https://apps.apple.com/us/app/chatgpt/id6448311069"
  ],
  "results_limit": 3
}
```
