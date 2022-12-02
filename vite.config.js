import { defineConfig } from 'vite'

import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/tiny-canvas/',
  build: {
    outDir: 'docs/',
    emptyOutDir: true
  },
  plugins: [basicSsl()]
})