import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import { jsPluginSettings, selectJsPlugins } from "ultracite/oxlint/js-plugins";
import next from "ultracite/oxlint/next";
import nextJsPlugins from "ultracite/oxlint/next/js-plugins";
import react from "ultracite/oxlint/react";
import tanstack from "ultracite/oxlint/tanstack";
import tanstackJsPlugins from "ultracite/oxlint/tanstack/js-plugins";

const jsPlugins = selectJsPlugins(["react-doctor"]);

export default defineConfig({
  env: core.env,
  extends: [
    core,
    react,
    next,
    tanstack,
    jsPlugins,
    nextJsPlugins,
    tanstackJsPlugins,
  ],
  ignorePatterns: [...(core.ignorePatterns ?? []), "**/env.ts", "**/env.d.ts"],
  jsPlugins: jsPlugins.jsPlugins,
  settings: jsPluginSettings,
  // overides
  rules: {
    "sort-keys": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "react/function-component-definition": "off",
    "func-style": "off",
    "no-warning-comments": "off",
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
