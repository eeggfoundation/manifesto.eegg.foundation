import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        chunkSizeWarningLimit: 1024,
    },
    plugins: [
        react({
            jsxRuntime: 'classic',
        }),
    ],
})
