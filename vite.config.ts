import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/csgo-config/',
  resolve: {
    alias: {
      '@/test': resolve(__dirname, './test'),
      '@': resolve(__dirname, './src')
    }
  }
})
