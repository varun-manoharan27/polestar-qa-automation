module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/tests/backend/**/*.js'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    reporters: ['default', 'jest-allure'],
  };
  