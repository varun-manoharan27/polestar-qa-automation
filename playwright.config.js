const { defineConfig, devices } = require('@playwright/test');
const { AllureReporter } = require('allure-playwright');

module.exports = {
    testDir: './tests/frontend',
    timeout: 30000,
    retries: 2,
    reporter: [['list'], ['allure-playwright']],
    use: {
      headless: true,
      screenshot: 'on',
      video: 'retain-on-failure',
    },
    projects: [
      {
        name: 'Chromium',
        use: { browserName: 'chromium' },
      },
      {
        name: 'Firefox',
        use: { browserName: 'firefox' },
      },
      {
        name: 'WebKit',
        use: { browserName: 'webkit' },
      },
    ],
  };
  