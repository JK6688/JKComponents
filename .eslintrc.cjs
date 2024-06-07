module.exports = {
  root: true,
  env: {
    browser: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [
    {
      files: '*.html',
      processor: 'vue/.vue'
    }
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
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
        htmlWhitespaceSensitivity: 'ignore',
        overrides: [
          {
            files: '*.html',
            options: {
              parser: 'html'
            }
          }
        ]
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    'vue/multi-word-component-names': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-console': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'new-cap': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'vue/no-v-html': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'import/prefer-default-export': 'off',
    'no-useless-escape': 'off',
    'no-new-func': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off'
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    '**/*.cjs',
    'types/**/*.d.ts',
    'vite.config.ts'
  ]
};
