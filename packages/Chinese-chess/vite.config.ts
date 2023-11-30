import { loadEnv } from 'vite'
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname)
  return {
    base: env.VITE_APP_PATHNAME
  }
})
