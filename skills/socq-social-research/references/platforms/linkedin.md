# LinkedIn

Generated from SocQ Capability Registry schema `v1-c051f5df2885`. Read this file when the request targets LinkedIn.

## Endpoint selection

| Endpoint | Use for | Input choice | Standard schema | Cost |
| --- | --- | --- | --- | --- |
| [`linkedin/companies`](https://docs.socq.ai/api-manual/linkedin/companies) | Fetch normalized companies data from LinkedIn. | urls | `company@1.0` | live pricing |
| [`linkedin/company-jobs`](https://docs.socq.ai/api-manual/linkedin/company-jobs) | Fetch normalized company jobs data from LinkedIn. | urls | `job@1.0` | live pricing |
| [`linkedin/company-posts`](https://docs.socq.ai/api-manual/linkedin/company-posts) | Fetch normalized company posts data from LinkedIn. | urls | `post@1.0` | live pricing |
| [`linkedin/jobs`](https://docs.socq.ai/api-manual/linkedin/jobs) | Fetch normalized jobs data from LinkedIn. | urls | `job@1.0` | live pricing |
| [`linkedin/post-comments`](https://docs.socq.ai/api-manual/linkedin/post-comments) | Fetch normalized post comments data from LinkedIn. | url | `comment@1.0` | live pricing |
| [`linkedin/posts`](https://docs.socq.ai/api-manual/linkedin/posts) | Fetch normalized posts data from LinkedIn. | urls | `post@1.0` | live pricing |
| [`linkedin/profile-posts`](https://docs.socq.ai/api-manual/linkedin/profile-posts) | Fetch normalized profile posts data from LinkedIn. | urls | `post@1.0` | live pricing |
| [`linkedin/profiles`](https://docs.socq.ai/api-manual/linkedin/profiles) | Fetch normalized profiles data from LinkedIn. | urls | `account@1.0` | live pricing |
| [`linkedin/search-jobs`](https://docs.socq.ai/api-manual/linkedin/search-jobs) | Fetch normalized search jobs data from LinkedIn. | location | `job@1.0` | live pricing |
| [`linkedin/search-people`](https://docs.socq.ai/api-manual/linkedin/search-people) | Fetch normalized search people data from LinkedIn. | urls | `account@1.0` | live pricing |
| [`linkedin/search-posts`](https://docs.socq.ai/api-manual/linkedin/search-posts) | Fetch normalized search posts data from LinkedIn. | query | `post@1.0` | live pricing |

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

### `linkedin/company-jobs`

Typed MCP tool: `socq_linkedin_company_jobs`

```json
{
  "urls": [
    "https://www.linkedin.com/jobs/microsoft-jobs/"
  ],
  "results_limit": 20
}
```

### `linkedin/company-posts`

Typed MCP tool: `socq_linkedin_company_posts`

```json
{
  "urls": [
    "https://www.linkedin.com/company/microsoft/"
  ],
  "results_limit": 20
}
```

### `linkedin/jobs`

Typed MCP tool: `socq_linkedin_jobs`

```json
{
  "urls": [
    "https://www.linkedin.com/jobs/view/4435421919/"
  ]
}
```

### `linkedin/post-comments`

Typed MCP tool: `socq_linkedin_post_comments`

```json
{
  "url": "https://www.linkedin.com/posts/aagupta_what-you-need-to-know-ai-agents-activity-7354600338621906944-RvXR"
}
```

### `linkedin/posts`

Typed MCP tool: `socq_linkedin_posts`

```json
{
  "urls": [
    "https://www.linkedin.com/posts/microsoft_ai-is-entering-a-new-era-defined-by-real-world-activity-7403848387738955776-hCMS"
  ]
}
```

### `linkedin/profile-posts`

Typed MCP tool: `socq_linkedin_profile_posts`

```json
{
  "urls": [
    "https://www.linkedin.com/in/satyanadella/"
  ],
  "only_authored_posts": true,
  "results_limit": 20
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

### `linkedin/search-jobs`

Typed MCP tool: `socq_linkedin_search_jobs`

```json
{
  "location": "Seattle",
  "keyword": "Python",
  "country": "US",
  "results_limit": 20
}
```

### `linkedin/search-people`

Typed MCP tool: `socq_linkedin_search_people`

```json
{
  "urls": [
    "https://www.linkedin.com/search/results/people/?keywords=Aakash%20Gupta"
  ]
}
```

### `linkedin/search-posts`

Typed MCP tool: `socq_linkedin_search_posts`

```json
{
  "query": "AI agents",
  "date_posted": "last-week",
  "results_limit": 10
}
```
