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
      },
      name: 'JKComps',
      fileName: (format, entryName) => {
        const fileName = entryName.split('/').pop()?.replace('.ts', '');
        return `jk-comps.${fileName}.${format}.js`;
      },
    },
    rollupOptions: {
      output: {
        exports: 'named',
      },
    },
    emptyOutDir: true,
  },
});
