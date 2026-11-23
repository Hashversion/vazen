import path from "node:path";

import { defineConfig, devices } from "@playwright/test";
import { isNonEmptyString } from "@repo/utils/is-non-empty-string";

const repoRoot = path.resolve(import.meta.dirname, "../..");

type CreatePlaywrightSuiteConfigOptions = {
  appName: string;
  baseURL?: string;
  port?: number;
  suiteDir: string;
};

export function createPlaywrightSuiteConfig({
  appName,
  baseURL,
  port = Number(process.env.PLAYWRIGHT_PORT ?? "3000"),
  suiteDir,
}: CreatePlaywrightSuiteConfigOptions) {
  const resolvedBaseURL = baseURL ?? `http://localhost:${port}`;
  const isCI = isNonEmptyString(process.env.CI);

  return defineConfig({
    testDir: path.join(suiteDir, "tests"),
    // Run all tests in parallel.
    fullyParallel: true,
    // Fail the build on CI if you accidentally left test.only in the source code.
    forbidOnly: isCI,
    // Retry on CI only.
    retries: isCI ? 2 : 0,
    // Opt out of parallel tests on CI.
    workers: isCI ? 1 : undefined,
    // Reporter to use
    reporter: [
      ["list"],
      [
        "html",
        {
          open: "never",
          outputFolder: path.join(suiteDir, "playwright-report"),
        },
      ],
    ],

    outputDir: path.join(suiteDir, "test-results"),

    use: {
      // Base URL to use in actions like `await page.goto('/')`.
      baseURL: resolvedBaseURL,
      screenshot: "only-on-failure",
      // Collect trace when retrying the failed test.
      trace: "retain-on-failure",
      video: "retain-on-failure",
    },

    // Configure projects for major browsers.
    projects: [
      {
        name: "chromium",
        use: { ...devices["Desktop Chrome"] },
      },

      // {
      //   name: "firefox",
      //   use: { ...devices["Desktop Firefox"] },
      // },

      // {
      //   name: "webkit",
      //   use: { ...devices["Desktop Safari"] },
      // },
    ],

    // Run your local dev server before starting the tests
    webServer: {
      command: `pnpm --filter ${appName} exec next start`,
      cwd: repoRoot,
      env: {
        ...process.env,
        HOSTNAME: "localhost",
        PORT: String(port),
      },
      reuseExistingServer: !isCI,
      //3 minutes in milliseconds
      timeout: 3 * 60 * 1000,
      url: resolvedBaseURL,
    },
  });
}
