# Google Ad Library

Generated from SocQ Capability Registry schema `v1-85cfc881f7f4`. Read this file when the request targets Google Ad Library.

## Endpoint selection

| Endpoint | Use for | Input choice | Cost |
| --- | --- | --- | --- |
| [`google-ad-library/ad`](https://docs.socq.ai/api-manual/google-ad-library/ad) | Fetch normalized ad data from Google Ad Library. | url | live pricing |
| [`google-ad-library/advertiser-search`](https://docs.socq.ai/api-manual/google-ad-library/advertiser-search) | Fetch normalized advertiser search data from Google Ad Library. | query | live pricing |
| [`google-ad-library/company-ads`](https://docs.socq.ai/api-manual/google-ad-library/company-ads) | Fetch normalized company ads data from Google Ad Library. | one of: advertiser_id; domain | live pricing |

## Validated examples

### `google-ad-library/ad`

Typed MCP tool: `socq_google_ad_library_ad`

```json
{
  "url": "https://adstransparency.google.com/advertiser/AR123/creative/CR123"
}
```

### `google-ad-library/advertiser-search`

Typed MCP tool: `socq_google_ad_library_advertiser_search`

```json
{
  "query": "Acme",
  "region": "US"
}
```

### `google-ad-library/company-ads`

Typed MCP tool: `socq_google_ad_library_company_ads`

```json
{
  "domain": "example.com",
  "results_limit": 20
}
```
