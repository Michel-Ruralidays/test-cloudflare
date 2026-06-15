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
- `FEATURE_FLAG_A` as a normal environment variable
- `DEMO_SECRET` as a secret

The endpoint only returns whether the secret exists. It does not expose the secret value.

## Simple edge test

This project also includes `/api/hello` for a minimal Worker response test.

## Secret-backed test

This project also includes `/api/token-check`, which returns whether `API_TOKEN`
is configured as a secret without exposing the secret value.

## Recommended config split

Store plaintext runtime config like `FEATURE_FLAG_A` in `wrangler.jsonc`.
Store secrets like `API_TOKEN` in the Cloudflare dashboard as secrets.
