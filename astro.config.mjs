// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://haimich.github.io",
  // Plain static HTML: every crawler, link preview and AI agent sees the full content.
  output: "static",
  build: { format: "directory" },
});
