import { defineConfig } from 'vite'
import {resolve} from 'node:path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {find: '@', replacement: resolve(__dirname, './src')},
      {find: '@assets', replacement:resolve(__dirname, './src/assets')}
    ]
  }
})
