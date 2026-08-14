# Amazon

Generated from SocQ Capability Registry schema `v1-132d958902f5`. Read this file when the request targets Amazon.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`amazon/best-sellers`](https://docs.socq.ai/api-manual/amazon/best-sellers) | Fetch normalized best sellers data from Amazon. | urls | `product@1.0` | 0.15 credits/result |
| [`amazon/products`](https://docs.socq.ai/api-manual/amazon/products) | Fetch normalized products data from Amazon. | urls | `product@1.0` | 0.15 credits/result |
| [`amazon/reviews`](https://docs.socq.ai/api-manual/amazon/reviews) | Fetch normalized reviews data from Amazon. | urls | `review@1.0` | 0.15 credits/result |
| [`amazon/search`](https://docs.socq.ai/api-manual/amazon/search) | Fetch normalized search data from Amazon. | domain, query | `product@1.0` | 0.15 credits/result |
| [`amazon/sellers`](https://docs.socq.ai/api-manual/amazon/sellers) | Fetch normalized sellers data from Amazon. | urls | `seller@1.0` | 0.15 credits/result |

## Validated examples

### `amazon/best-sellers`

Typed MCP tool: `socq_amazon_best_sellers`

```json
{
  "urls": [
    "https://www.amazon.com/Best-Sellers-Electronics/zgbs/electronics"
  ],
  "results_limit": 20
}
```

### `amazon/products`

Typed MCP tool: `socq_amazon_products`

```json
{
  "urls": [
    "https://www.amazon.com/dp/B0CHHSFMRL"
  ]
}
```

### `amazon/reviews`

Typed MCP tool: `socq_amazon_reviews`

```json
{
  "urls": [
    "https://www.amazon.com/dp/B0CHHSFMRL"
  ],
  "results_limit": 20
}
```

### `amazon/search`

Typed MCP tool: `socq_amazon_search`

```json
{
  "query": "wireless earbuds",
  "domain": "https://www.amazon.com",
  "results_limit": 20
}
```

### `amazon/sellers`

Typed MCP tool: `socq_amazon_sellers`

```json
{
  "urls": [
    "https://www.amazon.com/sp?seller=EXAMPLE"
  ]
}
```
