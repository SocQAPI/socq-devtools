# Seo

Generated from SocQ Capability Registry schema `v1-c8347f9103e7`. Read this file when the request targets Seo.

## Endpoint selection

| Endpoint | Use for | Input choice | Cost |
| --- | --- | --- | --- |
| [`seo/google-organic-serp`](https://docs.socq.ai/api-manual/seo/google-organic-serp) | Fetch normalized google organic serp data from SEO. | query | live pricing |
| [`seo/keyword-difficulty`](https://docs.socq.ai/api-manual/seo/keyword-difficulty) | Fetch normalized keyword difficulty data from SEO. | keywords | live pricing |
| [`seo/keyword-overview`](https://docs.socq.ai/api-manual/seo/keyword-overview) | Fetch normalized keyword overview data from SEO. | keywords | live pricing |
| [`seo/keyword-search-volume`](https://docs.socq.ai/api-manual/seo/keyword-search-volume) | Fetch normalized keyword search volume data from SEO. | keywords | live pricing |
| [`seo/keyword-suggestions`](https://docs.socq.ai/api-manual/seo/keyword-suggestions) | Fetch normalized keyword suggestions data from SEO. | query | live pricing |
| [`seo/keywords-for-site`](https://docs.socq.ai/api-manual/seo/keywords-for-site) | Fetch normalized keywords for site data from SEO. | target | live pricing |
| [`seo/ranked-keywords`](https://docs.socq.ai/api-manual/seo/ranked-keywords) | Fetch normalized ranked keywords data from SEO. | target | live pricing |
| [`seo/related-keywords`](https://docs.socq.ai/api-manual/seo/related-keywords) | Fetch normalized related keywords data from SEO. | query | live pricing |
| [`seo/relevant-pages`](https://docs.socq.ai/api-manual/seo/relevant-pages) | Fetch normalized relevant pages data from SEO. | target | live pricing |
| [`seo/search-intent`](https://docs.socq.ai/api-manual/seo/search-intent) | Fetch normalized search intent data from SEO. | keywords | live pricing |

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
  "target": "example.com",
  "location_code": 2840,
  "language_code": "en",
  "results_limit": 100
}
```

### `seo/ranked-keywords`

Typed MCP tool: `socq_seo_ranked_keywords`

```json
{
  "target": "example.com",
  "location_code": 2840,
  "language_code": "en",
  "results_limit": 100
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
  "target": "example.com",
  "location_code": 2840,
  "language_code": "en",
  "results_limit": 100
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
