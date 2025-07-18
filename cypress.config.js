const { defineConfig } = require('cypress')

module.exports = defineConfig( {
   projectId: "2jm9b8",
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 240000,
  requestTimeout: 15000,
  responseTimeout: 30000,
  e2e: {},

})