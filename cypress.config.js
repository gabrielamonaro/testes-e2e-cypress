const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "5r8jyb",
  e2e: {
    baseUrl: "https://notes-serverless-app.com",
    defaultCommandTimeout: 15000,
    requestTimeout: 15000,
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
  chromeWebSecurity: false,
  env: {
    viewportWidthBreakpoint: 768,
  },
});
