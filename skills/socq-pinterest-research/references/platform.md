# Pinterest

Generated from SocQ Capability Registry schema `v1-603ff741990d`. Read this file when the request targets Pinterest.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`pinterest/pins`](https://docs.socq.ai/api-manual/pinterest/pins) | Fetch normalized pins data from Pinterest. | urls | `post@1.0` | live pricing |
| [`pinterest/profiles`](https://docs.socq.ai/api-manual/pinterest/profiles) | Fetch normalized profiles data from Pinterest. | urls | `account@1.0` | live pricing |
| [`pinterest/search`](https://docs.socq.ai/api-manual/pinterest/search) | Fetch normalized search data from Pinterest. | query | `post@1.0` | live pricing |
| [`pinterest/user-pins`](https://docs.socq.ai/api-manual/pinterest/user-pins) | Fetch normalized user pins data from Pinterest. | urls | `post@1.0` | live pricing |

## Validated examples

### `pinterest/pins`

Typed MCP tool: `socq_pinterest_pins`

```json
{
  "urls": [
    "https://www.pinterest.com/pin/1091841503437618715"
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
