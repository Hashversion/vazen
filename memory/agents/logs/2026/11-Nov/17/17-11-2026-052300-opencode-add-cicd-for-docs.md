# Interaction log

| Field | Value |
| --- | --- |
| when | 17-11-2026 05:23 AM UTC / 17-11-2026 10:54 AM IST |
| agent | opencode |
| ask | Add CI/CD for docs |
| did | Added `deploy-docs-preview` and `deploy-docs-production` jobs mirroring the web Vercel prebuilt flow in staging.yml and production.yml, and refreshed the stale deployment guide |
| outcome | Both workflows parse clean and `pnpm docs:build` passes; pending `VERCEL_DOCS_PROJECT_ID` secret plus a `docs` Vercel project with root directory set |
