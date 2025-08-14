import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
    }),
  ],
  build: {
    // Enable minification
    minify: 'terser',
    // Code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunk for React ecosystem
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'
            }
            if (id.includes('framer-motion')) {
              return 'animations'
            }
            if (id.includes('lucide-react')) {
              return 'icons'
            }
            return 'vendor'
          }
          // Component chunks
          if (id.includes('src/components/sections')) {
            return 'sections'
          }
          if (id.includes('src/components/ui')) {
            return 'ui'
          }
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 500,
    // Enable source maps for debugging
    sourcemap: false,
  },
  // Optimize dev server
  server: {
    hmr: {
      overlay: false,
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
    exclude: ['@vite/client', '@vite/env'],
  },
})