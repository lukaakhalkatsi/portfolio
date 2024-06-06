import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://28362ce738676f6e850874949a8c37ba@o4507378126815232.ingest.de.sentry.io/4507378132123728",

  tracesSampleRate: 1,

  debug: false,

  replaysOnErrorSampleRate: 1.0,

  replaysSessionSampleRate: 0.1,

  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
    Sentry.feedbackIntegration({
      colorScheme: "dark",
    }),
  ],
});
