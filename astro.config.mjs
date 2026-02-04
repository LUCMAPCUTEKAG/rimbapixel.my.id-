import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://rimbapixel.my.id',
  base: '/',
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: '_astro'
  },
  vite: {
    ssr: {
      noExternal: ['three']
    }
  }
});
