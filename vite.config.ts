import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import typescript from '@rollup/plugin-typescript';
import { resolve } from 'path';
import { readdirSync } from 'fs';

function getEntries(url: string) {
  const req = /\.(ts|tsx)$/;
  const utilsDir = resolve(__dirname, url);
  const files = readdirSync(utilsDir).filter((file) => req.test(file));

  const folders = url.replace(/^src\//, '');

  return files.reduce((acc: Record<string, string>, file) => {
    const key = `${folders ? `${folders}/` : ''}${file.replace(req, '')}`;
    acc[key] = resolve(utilsDir, file);
    return acc;
  }, {});
}

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

export default () => {
  return defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      typescript({
        declaration: true,
        emitDeclarationOnly: true
      })
    ],
    resolve: {
      alias: {
        '~': '/src'
      }
    },
    build: {
      lib: {
        name: 'JKVUEComps',
        entry: {
          index: resolve(__dirname, 'src/index'),
          ...getEntries('src/components'),
          ...getEntries('src/hooks'),
          ...getEntries('src/utils')
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
};
