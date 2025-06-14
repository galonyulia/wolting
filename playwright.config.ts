import { join } from 'path';
const env = process.env.TEST_ENV ?? 'dev';
require('dotenv').config({ path: join(__dirname, `.env.${env}`) });

import { defineConfig } from '@playwright/test';
import config from './config';

const availableBrowsers = [
  { name: 'chromium', use: {} },
  { name: 'firefox', use: {} },
  { name: 'webkit', use: {} },
];

const envBrowsers = process.env.BROWSERS
  ? process.env.BROWSERS.split(',').map(b => b.trim().toLowerCase())
  : null;

const projects = (envBrowsers
  ? availableBrowsers.filter(b => envBrowsers.includes(b.name))
  : availableBrowsers
).map(b => ({ name: b.name, use: b.use }));

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 1,
  workers: process.env.CI ? 1 : 4,
  reporter: [
    ['allure-playwright'],
    ['list']
  ],
  use: {
    baseURL: 'https://wolt.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: config.ACTION_TIMEOUT,
    navigationTimeout: config.NAVIGATION_TIMEOUT,
    ignoreHTTPSErrors: true,
    headless: config.HEADLESS,
  },
  timeout: config.TEST_TIMEOUT,
  expect: {
    timeout: config.EXPECT_TIMEOUT,
  },
  outputDir: 'test-results/',
  projects
}); 
