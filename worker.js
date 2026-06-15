export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/hello") {
      return Response.json({
        ok: true,
        message: "hello from cloudflare edge",
      });
    }

    if (url.pathname === "/api/env-check") {
      return Response.json({
        demoValue: env.DEMO_VALUE ?? null,
        secretConfigured: Boolean(env.DEMO_SECRET),
        featureFlagA: env.FEATURE_FLAG_A ?? null,
      });
    }

    return env.ASSETS.fetch(request);
  },
};
