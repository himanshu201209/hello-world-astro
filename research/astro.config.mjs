import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  base: "CLOUD_MOUNT_PATH",
  output: "server",
  compressHTML: true,
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [react(), mdx()],
  vite: {
    // Pin tsconfig for Vite/Rolldown cloud builds.
    tsconfig: fileURLToPath(new URL("./tsconfig.json", import.meta.url)),
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: {
        "react-dom/server": "react-dom/server.edge",
      },
      tsconfigPaths: false,
    },
    // Cloudflare workerd + Windows often races Vite SSR dep optimization and
    // 500s pages with missing deps_ssr chunks / virtual:astro:* modules.
    ssr: {
      optimizeDeps: {
        enabled: false,
      },
    },
    optimizeDeps: {
      holdUntilCrawlEnd: true,
    },
  },
});

