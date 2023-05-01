module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es2021: true,
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'jest'],
  extends: ['standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['./tsconfig.test.json'],
  },
  ignorePatterns: ['build/**'],
  rules: {
    semi: [2, 'always'],
    '@typescript-eslint/semi': [2, 'always'],
    '@typescript-eslint/comma-dangle': [2, 'always-multiline'],
    'comma-dangle': [2, 'always-multiline'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/prefer-optional-chain': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    'jest/prefer-expect-assertions': 'error',
  },
};
