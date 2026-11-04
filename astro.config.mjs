import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig(({ command }) => ({
  base: "CLOUD_MOUNT_PATH",
  output: "server",
  compressHTML: true,
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),

  integrations: [react()],
  vite: {
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: command === "build" ? {
        "react-dom/server": "react-dom/server.edge",
      } : undefined,
    },
}
}));