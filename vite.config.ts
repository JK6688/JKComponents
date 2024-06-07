import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import typescript from '@rollup/plugin-typescript';

function fileName(name: string, type: 'hash' | 'name' = 'name') {
  let prefix = '';
  if (name.indexOf('utils/') === 0) {
    prefix = 'utils/';
  } else if (name.indexOf('components/') === 0) {
    prefix = 'components/';
  } else if (type === 'hash') {
    prefix = 'chunks/';
  }
  return `${prefix}[name]${type === 'hash' ? '-[hash]' : ''}.js`;
}

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    typescript({
      declaration: true,
      emitDeclarationOnly: true,
      outDir: 'dist/types'
    })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    lib: {
      name: 'JKVUEComps',
      entry: {
        index: 'src/index.tsx',
        'utils/index': 'src/utils/index.ts',
        'utils/is': 'src/utils/is.ts',
        'utils/vuePropTypes': 'src/utils/vuePropTypes.ts',
        'utils/timeZone': 'src/utils/timeZone.ts',
        'utils/withInstall': 'src/utils/withInstall.ts',
        'components/index': 'src/components/index.ts',
        'components/GoogleAuth': 'src/components/GoogleAuth.tsx',
        'components/TelegramAuth': 'src/components/TelegramAuth.tsx'
      },
      fileName: (module) => fileName(module, 'name'),
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue', 'vue-types'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          'vue-types': 'VueTypes'
        },
        chunkFileNames: (chunkInfo) => fileName(chunkInfo.name, 'hash')
      }
    }
  }
});
