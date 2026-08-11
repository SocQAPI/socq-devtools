# Facebook Ad Library

Generated from SocQ Capability Registry schema `v1-603ff741990d`. Read this file when the request targets Facebook Ad Library.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`facebook-ad-library/ad`](https://docs.socq.ai/api-manual/facebook-ad-library/ad) | Fetch normalized ad data from Facebook Ad Library. | url | `ad@1.0` | live pricing |
| [`facebook-ad-library/company-ads`](https://docs.socq.ai/api-manual/facebook-ad-library/company-ads) | Fetch normalized company ads data from Facebook Ad Library. | page_id | `ad@1.0` | live pricing |
| [`facebook-ad-library/company-search`](https://docs.socq.ai/api-manual/facebook-ad-library/company-search) | Fetch normalized company search data from Facebook Ad Library. | query | `advertiser@1.0` | live pricing |
| [`facebook-ad-library/search`](https://docs.socq.ai/api-manual/facebook-ad-library/search) | Fetch normalized search data from Facebook Ad Library. | query | `ad@1.0` | live pricing |

## Validated examples

### `facebook-ad-library/ad`

Typed MCP tool: `socq_facebook_ad_library_ad`

```json
{
  "url": "https://www.facebook.com/ads/library?id=1545582153738441"
}
```

### `facebook-ad-library/company-ads`

Typed MCP tool: `socq_facebook_ad_library_company_ads`

```json
{
  "page_id": "20531316728"
}
```

### `facebook-ad-library/company-search`

Typed MCP tool: `socq_facebook_ad_library_company_search`

```json
{
  "query": "Nike"
}
```

### `facebook-ad-library/search`

Typed MCP tool: `socq_facebook_ad_library_search`

```json
{
  "query": "running shoes"
}
```
