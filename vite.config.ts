import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 2000,
    host: true, // allows access via local IP
  },
  preview: {
    port: 2000
  }
})
