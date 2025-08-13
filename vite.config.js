import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

    // Add these server options for reliable HMR
  server: {
    host: '0.0.0.0', // Listen on all interfaces
    port: 5173,
    strictPort: true, // Fail if the port is already in use
    watch: {
      usePolling: true,    // Required for WSL/Docker/NFS
      interval: 1000,      // Polling interval (ms)
    },
    hmr: {
      overlay: false       // Disable error overlay if it interferes
    },
    fs: {
      strict: false        // Allow serving files from outside the root
    }
  },
  
  // Optional optimization
  optimizeDeps: {
    exclude: [],           // Ensure no dependencies are excluded
    include: ['react', 'react-dom']
  }
})
