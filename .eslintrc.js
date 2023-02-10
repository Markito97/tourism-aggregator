module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recomended', 'standart-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./client/tsconfig.json'],
  },
  plugins: ['react', 'html'],
  rules: {
    semi: ['error', 'always'],
    'comma-dangle': 'off',
    quotes: ['error', 'single'],
    'no-unused-vars': 'error',
  },
}
