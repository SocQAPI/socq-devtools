# TikTok Shop

Generated from SocQ Capability Registry schema `v1-603ff741990d`. Read this file when the request targets TikTok Shop.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`tiktok-shop/product`](https://docs.socq.ai/api-manual/tiktok-shop/product) | Fetch normalized product data from TikTok Shop. | url | `product@1.0` | live pricing |
| [`tiktok-shop/product-reviews`](https://docs.socq.ai/api-manual/tiktok-shop/product-reviews) | Fetch normalized product reviews data from TikTok Shop. | url | `review@1.0` | live pricing |
| [`tiktok-shop/products`](https://docs.socq.ai/api-manual/tiktok-shop/products) | Fetch normalized products data from TikTok Shop. | url | `product@1.0` | live pricing |
| [`tiktok-shop/search`](https://docs.socq.ai/api-manual/tiktok-shop/search) | Fetch normalized search data from TikTok Shop. | query | `product@1.0` | live pricing |
| [`tiktok-shop/user-showcase`](https://docs.socq.ai/api-manual/tiktok-shop/user-showcase) | Fetch normalized user showcase data from TikTok Shop. | username | `product@1.0` | live pricing |

## Validated examples

### `tiktok-shop/product`

Typed MCP tool: `socq_tiktok_shop_product`

```json
{
  "url": "https://www.tiktok.com/shop/pdp/1729548220307968132"
}
```

### `tiktok-shop/product-reviews`

Typed MCP tool: `socq_tiktok_shop_product_reviews`

```json
{
  "url": "https://www.tiktok.com/shop/pdp/1729548220307968132",
  "results_limit": 20
}
```

### `tiktok-shop/products`

Typed MCP tool: `socq_tiktok_shop_products`

```json
{
  "url": "https://www.tiktok.com/shop/store/cmf-by-nothing/7495669706651568260",
  "results_limit": 20
}
```

### `tiktok-shop/search`

Typed MCP tool: `socq_tiktok_shop_search`

```json
{
  "query": "wireless earbuds"
}
```

### `tiktok-shop/user-showcase`

Typed MCP tool: `socq_tiktok_shop_user_showcase`

```json
{
  "username": "simplymandys",
  "results_limit": 20
}
```
