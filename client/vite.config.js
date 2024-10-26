import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    // port: 3000,
    // origin: 'http://localhost:8080',
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8080',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      public: `${path.resolve(__dirname, './public/')}`,
      pages: path.resolve(__dirname, './src/pages/'),
      assets: path.resolve(__dirname, './src/assets/'),
      store: path.resolve(__dirname, './src/store/'),
    },
  },
});
