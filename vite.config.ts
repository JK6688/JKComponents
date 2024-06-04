import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    typescript({
      declaration: true,
      emitDeclarationOnly: true,
      outDir: 'dist/types',
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        index: 'src/index.tsx',
        'utils/is': 'src/utils/is.ts',
        'utils/propTypes': 'src/utils/vuePropTypes.ts',
        'utils/timeZone': 'src/utils/timeZone.ts',
        'utils/withInstall': 'src/utils/withInstall.ts',
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'assets/[name]-[hash][extname]';
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: (chunkInfo) => {
          if (chunkInfo.name.indexOf('utils/') === 0) {
            return 'utils/[name]-[hash].js';
          } else {
            return 'chunks/[name]-[hash].js';
          }
        },
        entryFileNames: (chunk) => {
          const parts = chunk.name.split('/');
          if (parts.length > 1 && parts[0] === 'utils') {
            return `utils/${parts.pop()}.js`;
          }
          return `${parts.pop()}.js`;
        },
      },
    },
  },
});
