# Tiktok Ad Library

Generated from SocQ Capability Registry schema `v1-132d958902f5`. Read this file when the request targets Tiktok Ad Library.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`tiktok-ad-library/ad`](https://docs.socq.ai/api-manual/tiktok-ad-library/ad) | Fetch normalized ad data from TikTok Ad Library. | url | `ad@1.0` | live pricing |
| [`tiktok-ad-library/search`](https://docs.socq.ai/api-manual/tiktok-ad-library/search) | Fetch normalized search data from TikTok Ad Library. | query | `ad@1.0` | live pricing |

## Validated examples

### `tiktok-ad-library/ad`

Typed MCP tool: `socq_tiktok_ad_library_ad`

```json
{
  "url": "https://library.tiktok.com/ads/detail/?id=1871655924410641"
}
```

### `tiktok-ad-library/search`

Typed MCP tool: `socq_tiktok_ad_library_search`

```json
{
  "query": "Anysphere",
  "results_limit": 12
}
```
