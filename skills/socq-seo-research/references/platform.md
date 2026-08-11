# SEO

Generated from SocQ Capability Registry schema `v1-c051f5df2885`. Read this file when the request targets SEO.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`seo/google-organic-serp`](https://docs.socq.ai/api-manual/seo/google-organic-serp) | Fetch normalized google organic serp data from SEO. | query | `serp-result@1.0` | live pricing |
| [`seo/keyword-difficulty`](https://docs.socq.ai/api-manual/seo/keyword-difficulty) | Fetch normalized keyword difficulty data from SEO. | keywords | `seo-keyword@1.0` | live pricing |
| [`seo/keyword-overview`](https://docs.socq.ai/api-manual/seo/keyword-overview) | Fetch normalized keyword overview data from SEO. | keywords | `seo-keyword@1.0` | live pricing |
| [`seo/keyword-search-volume`](https://docs.socq.ai/api-manual/seo/keyword-search-volume) | Fetch normalized keyword search volume data from SEO. | keywords | `seo-keyword@1.0` | live pricing |
| [`seo/keyword-suggestions`](https://docs.socq.ai/api-manual/seo/keyword-suggestions) | Fetch normalized keyword suggestions data from SEO. | query | `seo-keyword@1.0` | live pricing |
| [`seo/keywords-for-site`](https://docs.socq.ai/api-manual/seo/keywords-for-site) | Fetch normalized keywords for site data from SEO. | target | `seo-keyword@1.0` | live pricing |
| [`seo/ranked-keywords`](https://docs.socq.ai/api-manual/seo/ranked-keywords) | Fetch normalized ranked keywords data from SEO. | target | `seo-keyword@1.0` | live pricing |
| [`seo/related-keywords`](https://docs.socq.ai/api-manual/seo/related-keywords) | Fetch normalized related keywords data from SEO. | query | `seo-keyword@1.0` | live pricing |
| [`seo/relevant-pages`](https://docs.socq.ai/api-manual/seo/relevant-pages) | Fetch normalized relevant pages data from SEO. | target | `serp-result@1.0` | live pricing |
| [`seo/search-intent`](https://docs.socq.ai/api-manual/seo/search-intent) | Fetch normalized search intent data from SEO. | keywords | `seo-keyword@1.0` | live pricing |

## Validated examples

### `seo/google-organic-serp`

Typed MCP tool: `socq_seo_google_organic_serp`

```json
{
  "query": "keyword research",
  "location_code": 2840,
  "language_code": "en",
  "results_limit": 10
}
```

### `seo/keyword-difficulty`

Typed MCP tool: `socq_seo_keyword_difficulty`

```json
{
  "keywords": [
    "keyword research"
  ],
  "location_code": 2840,
  "language_code": "en"
}
```

### `seo/keyword-overview`

Typed MCP tool: `socq_seo_keyword_overview`

```json
{
  "keywords": [
    "keyword research"
  ],
  "location_code": 2840,
  "language_code": "en"
}
```

### `seo/keyword-search-volume`

Typed MCP tool: `socq_seo_keyword_search_volume`

```json
{
  "keywords": [
    "keyword research"
  ],
  "location_code": 2840,
  "language_code": "en"
}
```

### `seo/keyword-suggestions`

Typed MCP tool: `socq_seo_keyword_suggestions`

```json
{
  "query": "keyword research",
  "location_code": 2840,
  "language_code": "en",
  "results_limit": 100
}
```

### `seo/keywords-for-site`

Typed MCP tool: `socq_seo_keywords_for_site`

```json
{
  "target": "microsoft.com",
  "location_code": 2840,
  "language_code": "en",
  "results_limit": 5
}
```

### `seo/ranked-keywords`

Typed MCP tool: `socq_seo_ranked_keywords`

```json
{
  "target": "microsoft.com",
  "location_code": 2840,
  "language_code": "en",
  "results_limit": 5
}
```

### `seo/related-keywords`

Typed MCP tool: `socq_seo_related_keywords`

```json
{
  "query": "keyword research",
  "location_code": 2840,
  "language_code": "en",
  "results_limit": 100
}
```

### `seo/relevant-pages`

Typed MCP tool: `socq_seo_relevant_pages`

```json
{
  "target": "microsoft.com",
  "location_code": 2840,
  "language_code": "en",
  "results_limit": 5
}
```

### `seo/search-intent`

Typed MCP tool: `socq_seo_search_intent`

```json
{
  "keywords": [
    "keyword research"
  ],
  "language_code": "en"
}
```
