import { defineConfig } from "blume";

export default defineConfig({
  title: "Vazen",
  description:
    "A production grade monorepo starter to build full-stack applications",
  logo: "/logo.svg",
  basePath: "/docs",
  theme: {
    accent: { light: "black", dark: "white" },
    fonts: {
      mono: {
        name: "CommitMonoVazen",
        variants: [
          { src: "./public/fonts/CommitMonoVazen.woff2", weight: 400 },
        ],
      },
    },
  },
  navigation: {
    sidebar: { display: "group" },
    actions: [{ label: "Docs", href: "/docs" }],
  },
  github: {
    owner: "Hashversion",
    repo: "vazen",
    dir: "apps/docs",
  },
  deployment: {
    site: "https://vazen.dev",
  },
});
