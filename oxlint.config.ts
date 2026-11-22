import { recommended } from "@effect/tsgo/oxlint-presets";
import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import drizzle from "ultracite/oxlint/drizzle";
import { jsPluginSettings, selectJsPlugins } from "ultracite/oxlint/js-plugins";
import next from "ultracite/oxlint/next";
import nextJsPlugins from "ultracite/oxlint/next/js-plugins";
import playwright from "ultracite/oxlint/playwright";
import react from "ultracite/oxlint/react";
import shadcn from "ultracite/oxlint/shadcn";
import tanstack from "ultracite/oxlint/tanstack";
import tanstackJsPlugins from "ultracite/oxlint/tanstack/js-plugins";

const jsPlugins = selectJsPlugins(["react-doctor"]);
const varlockPatterns = ["**/env.ts", "**/env.d.ts"];

export default defineConfig({
  env: core.env,
  extends: [
    core,
    react,
    next,
    tanstack,
    playwright,
    drizzle,
    jsPlugins,
    nextJsPlugins,
    tanstackJsPlugins,
    shadcn,
    recommended,
  ],
  ignorePatterns: [...(core.ignorePatterns ?? []), ...varlockPatterns],
  jsPlugins: [...jsPlugins.jsPlugins, ...shadcn.jsPlugins],
  options: { typeAware: true },
  settings: jsPluginSettings,
  // overides
  rules: {
    "sort-keys": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "react/function-component-definition": "off",
    "func-style": "off",
    "no-warning-comments": "off",
    // Why :: Ultracite already enforces typescript/strict-boolean-expressions via the typescript plugin.
    "effecttsgo/strict-boolean-expressions": "off",
  },
  // Blume island filenames become the component tag, so they must stay
  // PascalCase (e.g. islands/CopyCodeBlock.tsx -> <CopyCodeBlock />).
  overrides: [
    {
      files: ["apps/docs/islands/**/*.tsx"],
      rules: {
        "unicorn/filename-case": "off",
      },
    },
  ],
});
