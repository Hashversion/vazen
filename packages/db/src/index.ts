import { upstashCache } from "drizzle-orm/cache/upstash";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import "server-only";

import { ENV } from "#env";

import { relations } from "./schema/relations";

export * from "drizzle-orm";

const globalForDb = globalThis as unknown as {
  client: postgres.Sql | undefined;
};

const client =
  globalForDb.client ?? postgres(ENV.DATABASE_URL, { prepare: false });

if (ENV.APP_ENV !== "production") {
  globalForDb.client = client;
}

export const db = drizzle({
  client,
  relations,
  cache: upstashCache({
    url: ENV.UPSTASH_REDIS_REST_URL,
    token: ENV.UPSTASH_REDIS_REST_TOKEN,
  }),
});

export type DB = typeof db;
