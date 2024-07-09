import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  base: '/learning-typescript/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
      }
    }
  },
  server: {
    open: '/', // Automatically open the main page
    fs: {
      strict: false // Allow serving files outside the root
    }
  }
});
