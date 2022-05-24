

# Starter created with
```sh
#!/bin/sh

mkdir vuetify-2-starter
cd vuetify-2-starter
npm init -y
pnpm i vite-plugin-vue2 vue@^2.6.14 vue-template-compiler@^2.6.14

text="
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
}"
echo "$text" > vite.config.js
```