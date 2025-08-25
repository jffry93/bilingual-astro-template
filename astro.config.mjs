// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bilingual-astro-site.pages.dev',
  
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr-CA',
          en: 'en-CA',
        },
      },
    }),
  ],
  
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },
    imageService: "cloudflare"
  }),

  output: 'server'
});