import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    watch: {
      usePolling: true
    }
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        galery: resolve(__dirname, 'galery', 'index.html')
      }
    }
  }
})