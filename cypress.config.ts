import { defineConfig } from "cypress";
import * as createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {

    viewportWidth : 1800,
    viewportHeight : 1000,
    testIsolation: false, // fot not taking blank page error
    env: {hideXhr : true},// for not see all xhr requests in test running >> looks it is not working
    experimentalRunAllSpecs: true, // for all specs run
    watchForFileChanges: false,  // for not automatically test running
    defaultCommandTimeout: 20000,
    chromeWebSecurity: false,
    fixturesFolder: false,
    
    
    specPattern: "**/*.feature",
    video: false,
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },
});
