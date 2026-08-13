import { createPlaywrightSuiteConfig } from "@repo/playwright";

const currentDir = import.meta.dirname;

export default createPlaywrightSuiteConfig({
  appName: "web",
  suiteDir: currentDir,
});
