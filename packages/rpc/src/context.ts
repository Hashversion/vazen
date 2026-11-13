import { db } from "@repo/db";
import type { LoggerContext } from "@repo/telemetry/evlog/orpc";

export function createContext(options: { headers: Headers }) {
  return {
    ...options,
    db,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>> & LoggerContext;
