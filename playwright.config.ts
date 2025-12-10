import { defineConfig } from '@playwright/test';

export default defineConfig({
  // Global test timeout (per test)
  timeout: 30000, // 30 seconds
  retries: 1,     // Retry once on failure, useful for CI stability

  use: {
    /**
     * Headless Mode Configuration
     *
     * - In GitHub Actions (CI=true), Playwright must run headless
     *   because there is no X server available. Running headed would
     *   cause failures such as:
     *
     *   "Looks like you launched a headed browser without having an XServer running."
     *
     * - Locally (CI undefined), the browser runs in headed mode,
     *   allowing you to visually observe the test execution.
     */
    headless: process.env.CI ? true : false,

    // Capture debugging artifacts only when tests fail
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',

    // Base URL for cleaner test code
    baseURL: 'https://www.saucedemo.com',
  },

  /**
   * Reporter Configuration
   *
   * Generates an HTML report after the test run.
   * In CI, the report gets uploaded as a build artifact.
   */
  reporter: [['html', { open: 'never' }]],
});
