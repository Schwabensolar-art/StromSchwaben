import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://stromschwaben.de',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  compressHTML: true,
});
