import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://rimbapixel.my.id',
  output: 'static',
  build: {
    assets: '_astro'
  },
  vite: {
    ssr: {
      noExternal: ['@fontsource/tajawal']
    }
  }
});
