const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    grepFilterSpecs: true,
    grepOmitFiltered: true,
    grepTags: "osos",
    // burn: 5,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;

      // implement node event listeners here
    },
  },
});
