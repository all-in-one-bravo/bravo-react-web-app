module.exports = {
  env: {
    es6: true,
    node: true,
    'jest/globals': true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    // TODO: Remove this rules after the ecubation
    'no-console': ['off'],
  },
  globals: {
    window: true,
    document: true,
    XMLHttpRequest: true,
  },
}