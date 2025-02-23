# `@ubiquity-os/daemon-responder`

This plugin is designed to respond to issues with a predefined message. It is useful for no-reply repositories, where users are directed to a different platform for support or to a parent repository for issues etc.

## Getting Started

1. Clone and install dependencies.

```bash
bun install
```

2. Define your plugin's settings.

```yml
plugins:
  - uses:
      - plugin: http://localhost:4000
        with:
          automatedResponses:
            "daemon-responder": "This is a no-reply repo, please visit the link in the issue description. Thank you!"
```

3. Launch the plugin.

```bash
bun worker
```

4. Launch the kernel (in Kernel repository).

```bash
bun dev
```

5. Test your plugin by commenting on an issue you defined in step two.

### Worker Plugins

- `bun worker` - to run the worker locally.
- To trigger the worker, `POST` requests to http://localhost:4000/ with an event payload similar to:

```ts
await fetch("http://localhost:4000/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    stateId: "",
    eventName: "",
    eventPayload: "",
    settings: "",
    ref: "",
    authToken: "",
  }),
});
```

A full example can be found [here](https://github.com/ubiquibot/assistive-pricing/blob/623ea3f950f04842f2d003bda3fc7b7684e41378/tests/http/request.http).

#### Deploying the Worker

For testing purposes, the worker can be deployed through the Worker Deploy and Worker Delete workflows. It requires to
create a personal [Cloudflare Account](https://www.cloudflare.com/), and fill the `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` within your
GitHub Action Secrets.
