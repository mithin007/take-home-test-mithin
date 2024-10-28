import { defineConfig } from "cypress";


export default defineConfig({
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 15000,
  requestTimeout: 5000,
  responseTimeout: 5000,
  retries: 0,
  videoCompression: 32,
  viewportHeight: 1500,
  viewportWidth: 1980,
  scrollBehavior: 'center',
  video: false,
  e2e: {

    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    specPattern: 'cypress/specs/**/*.{js,jsx,ts,tsx}',
  },
});
