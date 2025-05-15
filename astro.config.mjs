// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://unv-ledmodules.com',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => page.indexOf('/admin') === -1,
    }),
  ],
});
