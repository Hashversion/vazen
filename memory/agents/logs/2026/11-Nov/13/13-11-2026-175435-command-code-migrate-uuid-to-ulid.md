| Field | Value |
| --- | --- |
| when | 13-11-2026 05:54 PM UTC / 13-11-2026 11:24 PM IST |
| agent | command-code |
| ask | Migrate ids from uuid to ulid |
| did | Swapped uuid dep for ulid 3.0.2 in @repo/db; added src/lib/ids.ts helpers (ulidPrimaryKey, ulidReference, ulidNullableReference, createRecordId, isUlid) with ./ids export; converted auth schema id/user_id columns to varchar(26) ulid columns; wired better-auth advanced.database.generateId to createRecordId |
| outcome | pnpm install --lockfile-only done; typecheck (14 tasks) passes |
