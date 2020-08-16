# 🔔🌐 Slack Netlify Trigger

Automagically trigger a Netlify build webhook by posting a message on Slack.

[![Node CI](https://github.com/koj-co/slack-netlify-trigger/workflows/Node%20CI/badge.svg)](https://github.com/koj-co/slack-netlify-trigger/actions?query=workflow%3A%22Node+CI%22)

## ⭐ Getting started

1. Fork this repository
1. Add required environment variables and run the Node.js script
1. Create a Slack outgoing webhook with the URL (see [Outgoing webhooks](https://api.slack.com/outgoing-webhooks))
1. Send the "trigger" message to your Slack channel

<img alt="Screenshot of trigger message" width="400" src="https://raw.githubusercontent.com/koj-co/slack-netlify-trigger/master/screenshot.png">

## ⚙️ Configuration

Add the following environment variables:

- `NETLIFY_WEBHOOK` is the Netlify webhook endpoint
- `SLACK_TOKEN` is the webhook token provided by Slack
- `GH_PAT` is the GitHub Personal Access Token to trigger events

The `/` endpoint is used to trigger the Netlify webhook, and the `/:repo/:event` endpoint creates a repository dispatch event.

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

<p align="center">
  <a href="https://koj.co">
    <img width="44" alt="Koj" src="https://kojcdn.com/v1593890002/website-v2/logo_mcxuwq.svg">
  </a>
</p>
<p align="center">
  <sub>An open source project by <a href="https://koj.co">Koj</a>. <br> <a href="https://koj.co">Furnish your home in style, for as low as CHF175/month →</a></sub>
</p>
