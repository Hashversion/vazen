import drizzle from "eslint-plugin-drizzle";
import { defineConfig } from "eslint/config";
import base from "@repo/eslint-config/base";

/** @type {import("eslint").Linter.Config} */
export default defineConfig([
  ...base,
  {
    plugins: {
      drizzle,
    },
    rules: {
      ...drizzle.configs.recommended.rules,
    },
  },
]);
