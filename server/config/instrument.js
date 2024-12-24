// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://7a0bf491d33a37994adc2aa9a60d3081@o4508521615065088.ingest.us.sentry.io/4508521618669568",
  integrations: [
    Sentry.mongooseIntegration()
  ]
});