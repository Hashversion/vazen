import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import checkFile from "eslint-plugin-check-file";
import onlyWarn from "eslint-plugin-only-warn";
import pluginTurbo from "eslint-plugin-turbo";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const gitignorePath = resolve(__dirname, "../../../.gitignore");

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: pluginTurbo,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ["dist/**"],
  },
  {
    files: ["src/**/*.*"],
    plugins: {
      "check-file": checkFile,
    },
    rules: {
      "check-file/filename-naming-convention": [
        "error",
        {
          "**/*.{ts,tsx}": "KEBAB_CASE",
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],
      "check-file/folder-naming-convention": [
        "error",
        {
          "src/**/!(__tests__)": "KEBAB_CASE",
        },
      ],
    },
  },
  includeIgnoreFile(gitignorePath, "Imported .gitignore patterns"),
  { ignores: ["**/*.css", "**/*.d.ts", "**/*.ico"] },
]);
