import { defineConfig } from "drizzle-kit";

import { ENV } from "./env";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/schema/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: ENV.DATABASE_URL,
  },
  schemaFilter: ["public", "auth", "main"],
});
