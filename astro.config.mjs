import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const site = process.env.PUBLIC_SITE || "https://example.com";

export default defineConfig({
  site,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});

