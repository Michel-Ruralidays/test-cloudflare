export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/env-check") {
      return Response.json({
        demoValue: env.DEMO_VALUE ?? null,
        secretConfigured: Boolean(env.DEMO_SECRET),
      });
    }

    return env.ASSETS.fetch(request);
  },
};
