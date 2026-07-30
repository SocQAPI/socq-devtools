# Facebook Marketplace

Generated from SocQ Capability Registry schema `v1-c8347f9103e7`. Read this file when the request targets Facebook Marketplace.

## Endpoint selection

| Endpoint | Use for | Input choice | Cost |
| --- | --- | --- | --- |
| [`facebook-marketplace/item`](https://docs.socq.ai/api-manual/facebook-marketplace/item) | Fetch normalized item data from Facebook Marketplace. | urls | live pricing |
| [`facebook-marketplace/location-search`](https://docs.socq.ai/api-manual/facebook-marketplace/location-search) | Fetch normalized location search data from Facebook Marketplace. | query | live pricing |
| [`facebook-marketplace/search`](https://docs.socq.ai/api-manual/facebook-marketplace/search) | Fetch normalized search data from Facebook Marketplace. | latitude, longitude, query | live pricing |

## Validated examples

### `facebook-marketplace/item`

Typed MCP tool: `socq_facebook_marketplace_item`

```json
{
  "urls": [
    "https://www.facebook.com/marketplace/item/123456789012345/"
  ]
}
```

### `facebook-marketplace/location-search`

Typed MCP tool: `socq_facebook_marketplace_location_search`

```json
{
  "query": "San Francisco"
}
```

### `facebook-marketplace/search`

Typed MCP tool: `socq_facebook_marketplace_search`

```json
{
  "query": "standing desk",
  "latitude": 37.7749,
  "longitude": -122.4194
}
```
