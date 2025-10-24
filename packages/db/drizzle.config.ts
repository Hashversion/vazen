import { defineConfig } from "drizzle-kit";
import { getDbUrl } from "./src/lib/utils";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/schema/index.ts",
  dialect: "postgresql",
  casing: "snake_case",
  dbCredentials: {
    url: getDbUrl() as string,
    ssl: process.env.NODE_ENV === "production" ? "require" : undefined,
  },
  strict: true,
});
