import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30_000, // 30s per test - safe and standard
  retries: 1,      // Retry once on failure, useful in CI

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure', // Gives trace viewer for failed tests
    baseURL: 'https://www.saucedemo.com', // Optional but clean
  },

  reporter: [['html', { open: 'never' }]], // ensures HTML report is generated
});
