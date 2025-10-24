import "server-only";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "../env";
import * as schema from "./schema";

export function getDb() {
  const globalDb = globalThis as unknown as {
    conn: postgres.Sql | undefined;
  };

  const client =
    globalDb.conn ??
    postgres(env().DATABASE_URL, {
      prepare: false,
      ssl: process.env.NODE_ENV === "production" ? "require" : undefined,
    });

  if (process.env.NODE_ENV !== "production") globalDb.conn = client;

  const db = drizzle(client, { schema, casing: "snake_case" });

  return db;
}

export type DB = ReturnType<typeof getDb>;
