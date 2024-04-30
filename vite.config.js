import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  optimizeDeps: {
    include: ['emailjs/browser'],
  },
  plugins: [react()],
  server: {
    port: 5500,
  },
})
