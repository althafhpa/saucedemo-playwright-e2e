import { defineConfig } from '@playwright/test';

/**
 * Playwright Configuration
 * ------------------------
 * This file defines global settings for all Playwright tests
 * including timeouts, retries, browser settings, reporters,
 * and base URLs. These settings are optimized for both:
 *  - Local development (headed mode)
 *  - CI environments such as GitHub Actions (auto headless)
 */

export default defineConfig({
  // Global test timeout (per test)
  timeout: 30_000, // 30 seconds is standard for E2E flows

  // Retry failing tests once (useful in CI to reduce flakiness)
  retries: 1,

  use: {
    /**
     * Browser Settings
     * ----------------
     * - headless: false for local debugging (CI automatically overrides to headless)
     * - baseURL: simplifies page.goto() calls
     */
    headless: false,

    // Capture artifacts only on failures (keeps report clean)
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',

    // Global base URL for all tests
    baseURL: 'https://www.saucedemo.com',
  },

  /**
   * Reporter
   * --------
   * Generate an HTML report for each test run.
   * (CI will upload this as an artifact)
   */
  reporter: [
    ['html', { open: 'never' }] // Do not auto-open locally
  ],
});
