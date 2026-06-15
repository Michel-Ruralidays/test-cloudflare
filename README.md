# test-cloudflare

Simple Cloudflare deployment test with static assets plus a minimal Worker runtime.

## Files

- `index.html`
- `styles.css`
- `worker.js`
- `wrangler.jsonc`

## Runtime env test

This project now includes `/api/env-check`, which reads:

- `DEMO_VALUE` as a normal environment variable
- `DEMO_SECRET` as a secret

The endpoint only returns whether the secret exists. It does not expose the secret value.
