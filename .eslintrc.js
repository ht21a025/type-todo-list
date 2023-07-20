module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'airbnb',
      'airbnb-typescript',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 13,
      sourceType: 'module',
      project: ['./tsconfig.json', '.eslintrc.js'],
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
      'no-console': 'off',
      'no-var': '0',
    },
  }
  