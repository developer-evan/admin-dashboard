import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // bind to all local IP addresses
    port: 3010, // specify your desired port here
  },
})