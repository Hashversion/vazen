import "server-only";

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";
import { getDbUrl } from "./lib/utils";

export function getDb() {
  const globalDb = globalThis as unknown as {
    conn: postgres.Sql | undefined;
  };

  if (!getDbUrl()) {
    throw new Error(
      "DATABASE_URL environment variable is not set. Check your Wrangler secrets and environment configuration."
    );
  }

  const client =
    globalDb.conn ??
    postgres(getDbUrl() as string, {
      prepare: false,
      ssl: process.env.NODE_ENV === "production" ? "require" : undefined,
    });

  if (process.env.NODE_ENV !== "production") globalDb.conn = client;

  const db = drizzle(client, { schema, casing: "snake_case" });

  return db;
}

export type DB = ReturnType<typeof getDb>;
