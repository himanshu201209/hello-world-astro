import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const researchSrc = path.resolve(rootDir, "../research/src");
const blogTsconfig = path.resolve(rootDir, "tsconfig.json");

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
  integrations: [react()],
  vite: {
    // Force Vite/Rolldown to use blog/tsconfig.json for all transforms.
    // Blog imports ../research/src/*; without this pin, Rolldown walks into
    // research/tsconfig.json and fails in Webflow Cloud with
    // "Tsconfig not found astro/tsconfigs/strict" (research has no node_modules).
    tsconfig: blogTsconfig,
    resolve: {
      alias: {
        "react-dom/server": "react-dom/server.edge",
      },
      tsconfigPaths: false,
    },
    server: {
      fs: {
        allow: [rootDir, researchSrc, path.resolve(rootDir, "../research")],
      },
    },
    ssr: {
      // DevLink / Research chrome live outside the blog package root.
      noExternal: [],
      optimizeDeps: {
        enabled: false,
      },
    },
    optimizeDeps: {
      holdUntilCrawlEnd: true,
    },
  },
});
