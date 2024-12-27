const { defineConfig } = require("cypress");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    supportFile: false, // Or specify the path to the support file if necessary
    specPattern: "cypress/integration/**/*.feature", // Match feature files
    video: false,
    setupNodeEvents(on, config) {
      require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin(on, config);
      return config;
    },
  },
});
