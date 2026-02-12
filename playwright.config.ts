import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  use: {
    baseURL: 'https://dummyjson.com',
    extraHTTPHeaders: {
      'Content-Type': 'application/json'
    }
  },
  reporter: [['list']]
});
