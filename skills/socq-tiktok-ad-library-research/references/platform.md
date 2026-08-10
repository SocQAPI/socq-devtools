# Tiktok Ad Library

Generated from SocQ Capability Registry schema `v1-e4178ca97338`. Read this file when the request targets Tiktok Ad Library.

## Endpoint selection

| Endpoint | Use for | Input choice | Cost |
| --- | --- | --- | --- |
| [`tiktok-ad-library/ad`](https://docs.socq.ai/api-manual/tiktok-ad-library/ad) | Fetch normalized ad data from TikTok Ad Library. | url | live pricing |
| [`tiktok-ad-library/search`](https://docs.socq.ai/api-manual/tiktok-ad-library/search) | Fetch normalized search data from TikTok Ad Library. | query | live pricing |

## Validated examples

### `tiktok-ad-library/ad`

Typed MCP tool: `socq_tiktok_ad_library_ad`

```json
{
  "url": "https://library.tiktok.com/ads/detail/?id=1234567890"
}
```

### `tiktok-ad-library/search`

Typed MCP tool: `socq_tiktok_ad_library_search`

```json
{
  "query": "running shoes",
  "results_limit": 24
}
```
