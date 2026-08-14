# Google Maps

Generated from SocQ Capability Registry schema `v1-132d958902f5`. Read this file when the request targets Google Maps.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`google-maps/places`](https://docs.socq.ai/api-manual/google-maps/places) | Fetch normalized places data from Google Maps. | urls | `place@1.0` | 0.15 credits/result |
| [`google-maps/reviews`](https://docs.socq.ai/api-manual/google-maps/reviews) | Fetch normalized reviews data from Google Maps. | urls | `review@1.0` | 0.15 credits/result |
| [`google-maps/search`](https://docs.socq.ai/api-manual/google-maps/search) | Fetch normalized search data from Google Maps. | location, query | `place@1.0` | 0.15 credits/result |

## Validated examples

### `google-maps/places`

Typed MCP tool: `socq_google_maps_places`

```json
{
  "urls": [
    "https://www.google.com/maps/place/Empire+State+Building"
  ]
}
```

### `google-maps/reviews`

Typed MCP tool: `socq_google_maps_reviews`

```json
{
  "urls": [
    "https://www.google.com/maps/place/Empire+State+Building"
  ],
  "days_limit": 30,
  "results_limit": 20
}
```

### `google-maps/search`

Typed MCP tool: `socq_google_maps_search`

```json
{
  "query": "coffee",
  "location": "New York, NY",
  "country": "US",
  "results_limit": 20
}
```
