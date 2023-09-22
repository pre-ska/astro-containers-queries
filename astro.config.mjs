import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"

export default defineConfig({
  integrations: [tailwind()],
  site: "https://pre-ska.github.io",
  base: "/astro-containers-queries",
})
