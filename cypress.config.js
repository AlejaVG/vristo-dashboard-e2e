import { defineConfig } from "cypress";
import { initPlugin } from "@frsource/cypress-plugin-visual-regression-diff/plugins";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      initPlugin(on, config);
      return config;
    },
    baseUrl: 'http://localhost:3000',
    env: {
      pluginVisualRegressionUpdateImages: true,
      pluginVisualRegressionDiffConfig: { threshold: 0.01 }
    }
  },
});
