import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Vendor
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react'
          }
          if (id.includes('node_modules/react-router')) {
            return 'vendor-router'
          }
          if (id.includes('node_modules/@radix-ui')) {
            return 'vendor-ui'
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons'
          }
          // Data files
          if (id.includes('/data/blogs')) {
            return 'data-blogs'
          }
          if (id.includes('/data/districts')) {
            return 'data-districts'
          }
          if (id.includes('/data/hiddenPlaces')) {
            return 'data-hidden'
          }
          if (id.includes('/data/bestPlaces')) {
            return 'data-best'
          }
          if (id.includes('/data/index')) {
            return 'data-index'
          }
        }
      }
    }
  }
})
