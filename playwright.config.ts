import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 2,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://demoqa.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    headless: false,
    video: 'retry-with-video'
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        contextOptions: {
          viewport: { width: 1920, height: 1080 }, // Defina um viewport padrão
          recordVideo: { dir: 'videos/' },
          screen: { width: 1920, height: 1080 },
        }
      },
    },
  ],
});
