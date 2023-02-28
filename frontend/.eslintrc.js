module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    // 'plugin:prettier/recommended',
    // 'standard-with-typescript',
  ],
  ignorePatterns: ['.eslintrc.js'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', ],
  rules: {
    'import/no-extraneous-dependencies': ['off'],
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'arrow-body-style': ['error', 'always'],
    'react/prop-types': ['off'],
    'import/no-relative-packages': ['off'],
    'react/require-default-props': ['off'],
    'import/prefer-default-export': ['off'],
    // "prettier/prettier": "error"
    // 'comma-dangle': 'off',
    // quotes: [2, 'single', 'avoid-escape'],
    // '@typescript-eslint/comma-dangle': 'off',
    // 'import/no-unresolved': 'off',
    // '@typescript-eslint/semi': 'off',
    // '@typescript-eslint/no-unused-vars': 'warn',
    // '@typescript-eslint/no-non-null-assertion': 'off',
    // '@typescript-eslint/consistent-type-imports': 'off',
  },
};
