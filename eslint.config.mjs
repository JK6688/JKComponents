import globals from 'globals';
import eslintjs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import vuePlugin from 'eslint-plugin-vue';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    ignores: [
      'node_modules/',
      'dist/',
      '**/*.mjs',
      '**/*.cjs',
      'vite.config.ts'
    ]
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser
      }
    }
  },
  eslintjs.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    plugins: { '@typescript-eslint': tseslint },
    languageOptions: {
      parser: tsParser,
      parserOptions: { project: './tsconfig.json' }
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-types': 'off'
    }
  },
  ...vuePlugin.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tsParser
      }
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off'
    }
  },
  {
    files: ['**/*.js', '**/*.ts', '**/*.vue'],
    plugins: { import: importPlugin },
    settings: {
      'import/resolver': {
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
      }
    },
    rules: {
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
      'import/prefer-default-export': 'off'
    }
  },
  {
    rules: {
      'no-undef': 'off',
      'no-console': 'off',
      'consistent-return': 'off',
      'no-param-reassign': 'off',
      'new-cap': 'off',
      'no-shadow': 'off',
      'no-underscore-dangle': 'off',
      'no-restricted-syntax': 'off',
      'guard-for-in': 'off',
      'no-useless-escape': 'off',
      'no-new-func': 'off'
    }
  },
  prettierConfig,
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: true,
          endOfLine: 'auto',
          singleQuote: true,
          trailingComma: 'none',
          bracketSpacing: true,
          vueIndentScriptAndStyle: false,
          htmlWhitespaceSensitivity: 'ignore'
        }
      ]
    }
  }
];
