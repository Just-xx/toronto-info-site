import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    watch: {
      usePolling: true
    }
  },
  root: resolve(__dirname, 'pages'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'pages', 'index.html'),
        galery: resolve(__dirname, 'pages', 'galery.html'),
      }
    }
  }
})