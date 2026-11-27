| Field | Value |
| --- | --- |
| when | 27-11-2026 08:38 PM UTC / 28-11-2026 02:08 AM IST |
| agent | opencode |
| ask | Renovate prConcurrentLimit 5 may starve security, patch and dev PRs when all slots are occupied |
| did | Traced Renovate 44.257.9 limits code; gave github-actions, patch and dev-minor rules `prConcurrentLimit: 0` so they are never blocked, left prod minor and major limited; validator strict passes |
| outcome | Security lane was already exempt (own Vulnerability* counters); the real starvation was patch/dev/actions waiting behind prod-minor and major PRs |
