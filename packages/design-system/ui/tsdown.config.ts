import { defineConfig } from "tsdown";

export default defineConfig([
  {
    entry: ["src/index.ts"],
    platform: "neutral",
    dts: true,
    minify: true,
    clean: true,
    outDir: "dist",
    treeshake: true,
    format: "esm",
    onSuccess: async () => {
      const { cp } = await import("fs/promises");
      await cp("src/styles/globals.css", "dist/globals.css");
    },
  },
]);
