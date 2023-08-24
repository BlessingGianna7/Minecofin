import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsDir: 'assets', // The output folder for assets
  },
  plugins: [react()],
})
