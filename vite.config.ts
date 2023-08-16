import eslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'


// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      src:'/src'
    }
  },
  plugins: [react(), eslint(), svgr(),]
});
