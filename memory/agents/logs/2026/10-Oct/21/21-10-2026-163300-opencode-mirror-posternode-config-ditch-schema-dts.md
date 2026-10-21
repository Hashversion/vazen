---
title: Interaction log
---

| Field | Value |
| --- | --- |
| when | 21-10-2026 04:33 PM UTC |
| agent | opencode |
| ask | Mirror posternode's entire packages/config across all brand repos and drop the schema-dts dependency. |
| did | Rebuilt packages/config to posternode's site/{identity,urls,index} + seo/{schemas,json-ld,index} shape, removed schema-dts, repointed @repo/config/app consumers to @repo/config/site, updated layouts to builder calls with data prop. |
| outcome | Repo typechecks green on `pnpm turbo typecheck`; emitted JSON-LD unchanged except org sameAs key order now follows site sameAs. |
