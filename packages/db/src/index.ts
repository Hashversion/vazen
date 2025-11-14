import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import "server-only";
import * as schema from "./schema";

interface CloudflareEnv {
  HYPERDRIVE: Hyperdrive;
}

export function getDb(cloudflareEnv: CloudflareEnv) {
  const globalDb = globalThis as unknown as {
    conn: postgres.Sql | undefined;
  };

  const client =
    globalDb.conn ??
    postgres(cloudflareEnv.HYPERDRIVE.connectionString, {
      prepare: false,
      max: 5,
      fetch_types: false,
    });

  if (process.env.NODE_ENV !== "production") globalDb.conn = client;

  const db = drizzle(client, { schema, casing: "snake_case" });

  return db;
}

export type DB = ReturnType<typeof getDb>;
