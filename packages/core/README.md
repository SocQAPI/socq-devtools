# @socq/core

Catalog-driven JavaScript client for the SocQ Agent API. Endpoint schemas are loaded from the hosted Capability Registry instead of being duplicated in this package.

## Install

```bash
npm install @socq/core
```

Node.js 20 or newer is required.

## Usage

```ts
import {SocqClient} from "@socq/core";

const client = new SocqClient({apiKey: process.env.SOCQ_API_KEY});
const capability = await client.capability("youtube/videos");
const task = await client.submit("youtube", "videos", {
  urls: ["https://www.youtube.com/watch?v=VIDEO_ID"],
});
const completed = await client.waitTask(task.task_id);
const downloaded = await client.downloadFiles(task.task_id, "./socq-results");
```

Set `SOCQ_BASE_URL` or pass `baseUrl` to target another SocQ environment. The default is `https://api.socq.ai`.

See the [SocQ website](https://socq.ai/).

## License

MIT
