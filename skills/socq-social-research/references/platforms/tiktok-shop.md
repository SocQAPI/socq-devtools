# TikTok Shop

Generated from SocQ Capability Registry schema `v1-c8347f9103e7`. Read this file when the request targets TikTok Shop.

## Endpoint selection

| Endpoint | Use for | Input choice | Cost |
| --- | --- | --- | --- |
| [`tiktok-shop/product`](https://docs.socq.ai/api-manual/tiktok-shop/product) | Fetch normalized product data from TikTok Shop. | url | live pricing |
| [`tiktok-shop/product-reviews`](https://docs.socq.ai/api-manual/tiktok-shop/product-reviews) | Fetch normalized product reviews data from TikTok Shop. | url | live pricing |
| [`tiktok-shop/products`](https://docs.socq.ai/api-manual/tiktok-shop/products) | Fetch normalized products data from TikTok Shop. | url | live pricing |
| [`tiktok-shop/search`](https://docs.socq.ai/api-manual/tiktok-shop/search) | Fetch normalized search data from TikTok Shop. | query | live pricing |
| [`tiktok-shop/user-showcase`](https://docs.socq.ai/api-manual/tiktok-shop/user-showcase) | Fetch normalized user showcase data from TikTok Shop. | username | live pricing |

## Validated examples

### `tiktok-shop/product`

Typed MCP tool: `socq_tiktok_shop_product`

```json
{
  "url": "https://www.tiktok.com/shop/pdp/example-product/1234567890123456789"
}
```

### `tiktok-shop/product-reviews`

Typed MCP tool: `socq_tiktok_shop_product_reviews`

```json
{
  "url": "https://www.tiktok.com/shop/pdp/example-product/1234567890123456789"
}
```

### `tiktok-shop/products`

Typed MCP tool: `socq_tiktok_shop_products`

```json
{
  "url": "https://www.tiktok.com/shop/store/example-store/1234567890123456789"
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
  "username": "example_creator"
}
```
