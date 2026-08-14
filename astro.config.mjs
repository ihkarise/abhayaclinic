// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// The production canonical domain. See docs/DEPLOYMENT.md.
// Do NOT change this to the old domain (drvarunvasudev.com) or the
// GitHub Pages domain (ihkarise.github.io) — canonical URLs depend on it.
const SITE = 'https://abhayaallergycenter.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // No `base` path: the production site runs on the root custom domain.
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      // Keep private/utility routes out of the sitemap.
      filter: (page) =>
        !page.includes('/admin') && !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
