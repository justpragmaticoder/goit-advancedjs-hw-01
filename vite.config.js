import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        gallery: resolve(__dirname, 'src/01-gallery.html'),
        video: resolve(__dirname, 'src/02-video.html'),
        feedback: resolve(__dirname, 'src/03-feedback.html')
      },
      output: {
        dir: 'dist',
      }
    }
  }
})
