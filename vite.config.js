import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Essential for GitHub Pages relative asset loading
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
