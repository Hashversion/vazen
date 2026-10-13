import { defineConfig } from "blume";

export default defineConfig({
  title: "memory",
  description: "The canonical institutional memory for vazen.",
  logo: {
    image: {
      light: "/icon.png",
      dark: "/icon-dark.png",
      alt: "vazen",
    },
  },
  content: {
    root: ".",
    // README.md already migrated to index.mdx; keep excludes
    exclude: [
      "**/_*",
      "**/.*",
      "**/node_modules/**",
      "**/dist/**",
      "**/.blume/**",
      "**/README.md",
    ],
  },
  theme: {
    accent: "neutral",
    radius: "md",
  },
  navigation: {
    sidebar: {
      display: "group",
    },
  },
  seo: {
    robots: false,
    sitemap: false,
    structuredData: false,
    og: { enabled: false },
    rss: { enabled: false },
  },
  agents: {
    llmsTxt: false,
  },
  feedback: false,
});
