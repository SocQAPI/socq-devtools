# Reddit AD Library

Generated from SocQ Capability Registry schema `v1-0a761bf42900`. Read this file when the request targets Reddit AD Library.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`reddit-ad-library/ad`](https://docs.socq.ai/api-manual/reddit-ad-library/ad) | Get a public Reddit ad creative by its ad identifier. | ad_id | `ad@1.0` | 0.6 credits/result |
| [`reddit-ad-library/search`](https://docs.socq.ai/api-manual/reddit-ad-library/search) | Search public Reddit ad inspiration with creative, industry and objective filters; up to 30 ads. | query | `ad@1.0` | 0.5 credits/result |

## Validated examples

### `reddit-ad-library/ad`

Typed MCP tool: `socq_reddit_ad_library_ad`

Provide ad_id from Reddit AD Library Search.

```json
{
  "ad_id": "79e005f1e09ec72245e904d87d2a0869"
}
```

### `reddit-ad-library/search`

Typed MCP tool: `socq_reddit_ad_library_search`

query is required. results_limit defaults to 30 and accepts integers from 1 to 30. Search returns at most 30 ads; additional collection pages are unavailable.

```json
{
  "query": "software",
  "results_limit": 30
}
```
