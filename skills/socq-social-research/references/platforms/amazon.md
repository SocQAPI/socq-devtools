# Amazon

Generated from SocQ Capability Registry schema `v1-457a38f62a01`. Read this file when the request targets Amazon.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`amazon/best-sellers`](https://docs.socq.ai/api-manual/amazon/best-sellers) | Collect public Amazon best sellers. | urls | `product@1.0` | 0.15 credits/result |
| [`amazon/products`](https://docs.socq.ai/api-manual/amazon/products) | Collect public Amazon product details. | urls | `product@1.0` | 0.15 credits/result |
| [`amazon/reviews`](https://docs.socq.ai/api-manual/amazon/reviews) | Collect public Amazon reviews. | urls | `review@1.0` | 0.15 credits/result |
| [`amazon/search`](https://docs.socq.ai/api-manual/amazon/search) | Search public Amazon products. | domain, query | `product@1.0` | 0.15 credits/result |
| [`amazon/sellers`](https://docs.socq.ai/api-manual/amazon/sellers) | Collect public Amazon seller information. | urls | `seller@1.0` | 0.15 credits/result |

## Validated examples

### `amazon/best-sellers`

Typed MCP tool: `socq_amazon_best_sellers`

```json
{
  "urls": [
    "https://www.amazon.com/Best-Sellers-Electronics/zgbs/electronics"
  ],
  "results_limit": 3
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
  "results_limit": 3
}
```

### `amazon/search`

Typed MCP tool: `socq_amazon_search`

```json
{
  "query": "wireless earbuds",
  "domain": "https://www.amazon.com",
  "results_limit": 3
}
```

### `amazon/sellers`

Typed MCP tool: `socq_amazon_sellers`

```json
{
  "urls": [
    "https://www.amazon.com/sp?seller=A2L77EE7U53NWQ"
  ]
}
```
