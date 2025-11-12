import { defineConfig } from "@terrazzo/cli";
import css from "@terrazzo/plugin-css";
import js from "@terrazzo/plugin-js";
import tailwind from "@terrazzo/plugin-tailwind";
import { toOklch } from "#utils/to-oklch.js";

export default defineConfig({
  tokens: ["./src/tokens/tokens.json", "./src/tokens/easings.json"],
  outDir: "./dist/",
  plugins: [
    css({
      skipBuild: true,
      transform: (token) => toOklch(token),
    }),
    js({ js: true }),
    tailwind({
      filename: "tailwind.css",
      theme: {
        /** @see https://terrazzo.app/docs/cli/integrations/tailwind/#theme */

        color: ["color.*"],
        font: ["typography.font-family.*"],
        ease: ["ease.*"],
      },
    }),
  ],
  lint: {
    /** @see https://terrazzo.app/docs/cli/lint */
  },
});
