import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,
    launchOptions: {
      slowMo: 500, // delay in ms between each action
    },
  },
});
