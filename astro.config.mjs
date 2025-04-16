// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from '@astrojs/tailwind';


export default defineConfig({
  site: 'https://unv-ledmodules.com',
  integrations: [tailwind(),sitemap(), ]
});


