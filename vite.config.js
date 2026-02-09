// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// This config only affects local dev (npm run dev). It does nothing in Netlify production.
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    // Only add allowedHosts if you really use a reverse tunnel; otherwise omit.
     allowedHosts: [
       'tolerance-nav-retro-something.trycloudflare.com',
     ],
    proxy: {
      // Any call like fetch('/api/...') in dev will be proxied to your local backend
      '/api': {
        target: 'http://localhost:4000', // <-- local backend during dev
        changeOrigin: true,
        secure: false,
        // Your backend routes live at '/', so strip the '/api' prefix
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
