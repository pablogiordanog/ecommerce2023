import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/ecommerce2023/",
  server: {
    host: true
  }
})
//base:"/ecommerce2023/",
//base:"https://pablogiordanog.github.io/ecommerce2023/",