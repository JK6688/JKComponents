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
    lib: {
      entry: {
        index: 'src/index.tsx',
        'utils/is': 'src/utils/is.ts',
        'utils/propTypes': 'src/utils/vuePropTypes.ts',
        'utils/timeZone': 'src/utils/timeZone.ts',
        'utils/withInstall': 'src/utils/withInstall.ts',
      },
      fileName: (module) => `${module.indexOf('utils/') === 0 ? 'utils/' : ''}[name].js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', 'vue-types'],
      output: {
        globals: {
          vue: 'Vue',
          'vue-types': 'VueTypes',
        },
        chunkFileNames: (chunkInfo) => {
          if (chunkInfo.name.indexOf('utils/') === 0) {
            return 'utils/[name]-[hash].js';
          } else {
            return 'chunks/[name]-[hash].js';
          }
        },
      },
    },
  },
});
