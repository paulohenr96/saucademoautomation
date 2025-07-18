const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 240000,
  requestTimeout: 15000,
  responseTimeout: 30000,
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
  },
})