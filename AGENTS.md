# AGENTS

## pnpm catalogs (`pnpm-workspace.yaml`)

- 1 use → inline version.
- 2+ uses → default `catalog:`.
- Related + same version + shared → named `catalogs:<name>`.
- No dead entries, no single-entry named catalogs.
- After changes: `pnpm install --lockfile-only`.
