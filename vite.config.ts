import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// In development the API is reached same-origin through this proxy, so no
// CORS setup is needed locally. Point VITE_API_PROXY_TARGET elsewhere when
// the backend is not at the dev default.
const proxyTarget = process.env.VITE_API_PROXY_TARGET ?? 'http://localhost:5080'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': { target: proxyTarget, changeOrigin: true },
      '/health': { target: proxyTarget, changeOrigin: true },
    },
  },
})
