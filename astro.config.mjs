// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://thesource.com', // Update with your actual domain
  output: 'static',
  integrations: [tailwind()],
});