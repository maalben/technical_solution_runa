import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,
    baseURL: 'https://openweathermap.org',
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  reporter: [['html', { open: 'never' }]],
});