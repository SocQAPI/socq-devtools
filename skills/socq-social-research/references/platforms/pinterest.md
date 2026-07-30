# Pinterest

Generated from SocQ Capability Registry schema `v1-c8347f9103e7`. Read this file when the request targets Pinterest.

## Endpoint selection

| Endpoint | Use for | Input choice | Cost |
| --- | --- | --- | --- |
| [`pinterest/pins`](https://docs.socq.ai/api-manual/pinterest/pins) | Fetch normalized pins data from Pinterest. | urls | live pricing |
| [`pinterest/profiles`](https://docs.socq.ai/api-manual/pinterest/profiles) | Fetch normalized profiles data from Pinterest. | urls | live pricing |
| [`pinterest/search`](https://docs.socq.ai/api-manual/pinterest/search) | Fetch normalized search data from Pinterest. | query | live pricing |
| [`pinterest/user-pins`](https://docs.socq.ai/api-manual/pinterest/user-pins) | Fetch normalized user pins data from Pinterest. | urls | live pricing |

## Validated examples

### `pinterest/pins`

Typed MCP tool: `socq_pinterest_pins`

```json
{
  "urls": [
    "https://www.pinterest.com/pin/123456789012345678/"
  ]
}
```

### `pinterest/profiles`

Typed MCP tool: `socq_pinterest_profiles`

```json
{
  "urls": [
    "https://www.pinterest.com/pinterest/"
  ]
}
```

### `pinterest/search`

Typed MCP tool: `socq_pinterest_search`

```json
{
  "query": "home office ideas"
}
```

### `pinterest/user-pins`

Typed MCP tool: `socq_pinterest_user_pins`

```json
{
  "urls": [
    "https://www.pinterest.com/pinterest/"
  ]
}
```
