# Linkedin

Generated from SocQ Capability Registry schema `v1-c8347f9103e7`. Read this file when the request targets Linkedin.

## Endpoint selection

| Endpoint | Use for | Input choice | Cost |
| --- | --- | --- | --- |
| [`linkedin/companies`](https://docs.socq.ai/api-manual/linkedin/companies) | Fetch normalized companies data from LinkedIn. | urls | live pricing |
| [`linkedin/jobs`](https://docs.socq.ai/api-manual/linkedin/jobs) | Fetch normalized jobs data from LinkedIn. | urls | live pricing |
| [`linkedin/posts`](https://docs.socq.ai/api-manual/linkedin/posts) | Fetch normalized posts data from LinkedIn. | urls | live pricing |
| [`linkedin/profiles`](https://docs.socq.ai/api-manual/linkedin/profiles) | Fetch normalized profiles data from LinkedIn. | urls | live pricing |

## Validated examples

### `linkedin/companies`

Typed MCP tool: `socq_linkedin_companies`

```json
{
  "urls": [
    "https://www.linkedin.com/company/microsoft/"
  ]
}
```

### `linkedin/jobs`

Typed MCP tool: `socq_linkedin_jobs`

```json
{
  "urls": [
    "https://www.linkedin.com/jobs/view/1234567890/"
  ]
}
```

### `linkedin/posts`

Typed MCP tool: `socq_linkedin_posts`

```json
{
  "urls": [
    "https://www.linkedin.com/posts/microsoft_ai-activity-1234567890"
  ]
}
```

### `linkedin/profiles`

Typed MCP tool: `socq_linkedin_profiles`

```json
{
  "urls": [
    "https://www.linkedin.com/in/satyanadella/"
  ]
}
```
