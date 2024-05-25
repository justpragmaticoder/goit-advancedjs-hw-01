import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/dist/',
  build: {
    rollupOptions: {
      input: {
        mainPage: resolve(__dirname, 'index.html'),
        galleryPage: resolve(__dirname, 'src/01-gallery.html'),
        videoPage: resolve(__dirname, 'src/02-video.html'),
        feedbackPage: resolve(__dirname, 'src/03-feedback.html')
      },
      output: {
        dir: 'dist',
        assetFileNames: (assetInfo) => {
          return `assets/[name].[ext]`;
        }
      }
    }
  }
})
