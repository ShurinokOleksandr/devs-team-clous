import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import mdx from '@mdx-js/rollup';


// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      src:'/src'
    }
  },
  
  plugins: [react(),  mdx(), eslint(), svgr()]
}) ;
