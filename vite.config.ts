import { ssr } from 'vite-plugin-ssr/plugin'
import eslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), svgr(),ssr({ prerender: true })],
  resolve:{
    alias:{
      src:'/src'
    }
  }
});
