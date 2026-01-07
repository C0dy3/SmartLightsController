import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteBasicSslPlugin from "@vitejs/plugin-basic-ssl";
import { tanstackRouter } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      tanstackRouter({
        target: 'react',
        autoCodeSplitting: true
      }),
      
      react(),
      viteBasicSslPlugin()

  ],
    server: {
      https: false
    }
})
