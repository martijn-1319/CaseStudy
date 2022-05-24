import { createVuePlugin } from 'vite-plugin-vue2'

export default {
  base: './',
  plugins: [
    createVuePlugin(/*options*/)
  ],
  resolve: {
    extensions: [
      '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json',
      '.vue'
    ],
    alias: {
      '@': require('path').resolve(__dirname, '/src')
    }
  }
}
