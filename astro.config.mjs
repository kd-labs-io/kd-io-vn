// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kd.io.vn',
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'vi',
        locales: {
          vi: 'vi',
          en: 'en',
        },
      },
      serialize(item) {
        const url = new URL(item.url);
        const path = url.pathname;

        if (path === '/' || path === '/en/' || path === '/en') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (path.startsWith('/apps/') || path.startsWith('/en/apps/')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (path.startsWith('/blog/') || path.startsWith('/en/blog/')) {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.4;
          item.changefreq = 'monthly';
        }

        item.lastmod = new Date();
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  redirects: {
    '/sitemap.xml': '/sitemap-index.xml',
    '/vi': '/',
    '/vi/press': '/press',
    '/vi/privacy': '/privacy',
    '/vi/terms': '/terms',
    '/vi/apps/[slug]': '/apps/[slug]',
    '/vi/blog': '/blog',
    '/vi/blog/[slug]': '/blog/[slug]',
  },
});