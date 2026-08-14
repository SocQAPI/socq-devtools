# Truth Social

Generated from SocQ Capability Registry schema `v1-132d958902f5`. Read this file when the request targets Truth Social.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`truth-social/posts`](https://docs.socq.ai/api-manual/truth-social/posts) | Fetch normalized posts data from Truth Social. | url | `post@1.0` | 0.19 credits/request |
| [`truth-social/profiles`](https://docs.socq.ai/api-manual/truth-social/profiles) | Fetch normalized profiles data from Truth Social. | username | `account@1.0` | 0.19 credits/request |
| [`truth-social/user-posts`](https://docs.socq.ai/api-manual/truth-social/user-posts) | Fetch normalized user posts data from Truth Social. | one of: user_id; username | `post@1.0` | 0.19 credits/request |

## Validated examples

### `truth-social/posts`

Typed MCP tool: `socq_truth_social_posts`

```json
{
  "url": "https://truthsocial.com/@example/posts/123456"
}
```

### `truth-social/profiles`

Typed MCP tool: `socq_truth_social_profiles`

```json
{
  "username": "realDonaldTrump"
}
```

### `truth-social/user-posts`

Typed MCP tool: `socq_truth_social_user_posts`

```json
{
  "username": "realDonaldTrump"
}
```
