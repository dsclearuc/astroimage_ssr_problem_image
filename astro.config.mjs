import { defineConfig } from 'astro/config';

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  integrations: [image()],
  base: "/somepath"
});