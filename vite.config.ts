import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';


export default defineConfig({
  resolve:{
    alias:{
      src:'/src'
    }
  },
  
  plugins: [react(), eslint(), svgr()]
}) ;
