# Linkedin Ad Library

Generated from SocQ Capability Registry schema `v1-c051f5df2885`. Read this file when the request targets Linkedin Ad Library.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`linkedin-ad-library/ad`](https://docs.socq.ai/api-manual/linkedin-ad-library/ad) | Fetch normalized ad data from LinkedIn Ad Library. | url | `ad@1.0` | live pricing |
| [`linkedin-ad-library/search`](https://docs.socq.ai/api-manual/linkedin-ad-library/search) | Fetch normalized search data from LinkedIn Ad Library. | one of: company; company_id; keyword | `ad@1.0` | live pricing |

## Validated examples

### `linkedin-ad-library/ad`

Typed MCP tool: `socq_linkedin_ad_library_ad`

```json
{
  "url": "https://www.linkedin.com/ad-library/detail/666281156"
}
```

### `linkedin-ad-library/search`

Typed MCP tool: `socq_linkedin_ad_library_search`

```json
{
  "company": "Microsoft",
  "countries": [
    "US"
  ],
  "results_limit": 24
}
```
