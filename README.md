# 🔔🌐 Slack Netlify Trigger

Automagically trigger a Netlify build webhook by posting a message on Slack.

[![Node CI](https://github.com/koj-co/slack-netlify-trigger/workflows/Node%20CI/badge.svg)](https://github.com/koj-co/slack-netlify-trigger/actions?query=workflow%3A%22Node+CI%22)

## ⭐ Getting started

1. Fork this repository
1. Add required environment variables and run the Node.js script
1. Create a Slack outgoing webhook with the URL (see [Outgoing webhooks](https://api.slack.com/outgoing-webhooks))
1. Send the "trigger" message to your Slack channel

<img alt="Screenshot of trigger message" width="400" src="https://raw.githubusercontent.com/koj-co/slack-netlify-trigger/master/Screen%20Shot%202020-07-24%20at%2017.05.31%402x.png">

## ⚙️ Configuration

Add the following environment variables:

- `NETLIFY_WEBHOOK` is the Netlify webhook endpoint
- `SLACK_TOKEN` is the webhook token provided by Slack

## 👩‍💻 Development

Build TypeScript:

```bash
npm run build # tsc
```

Run the service on http://localhost:3000:

```
npm run launch # node dist/index.js
```

## 📄 License

- Code: [MIT](./LICENSE) © [Koj](https://joinkoj.com)
- "Slack" is a trademark of Slack Technologies, Inc.
- "Netlify" is a trademark of Netlify, Inc.
