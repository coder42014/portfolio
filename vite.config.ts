import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Eliminate unused code
    __DEV__: JSON.stringify(false),
  },
  build: {
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          spline: ['@splinetool/react-spline'],
          icons: ['lucide-react'],
          animation: ['@studio-freight/lenis', 'framer-motion'],
          utils: ['react-intersection-observer']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@studio-freight/lenis', 'lodash-es'],
    exclude: ['@splinetool/react-spline']
  },
  server: {
    hmr: {
      overlay: false
    },
    host: true
  }
});
