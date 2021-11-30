// This setup is based on typescript eslint document:
// https://typescript-eslint.io/docs/linting/linting/

module.exports = {
  // Setup applying to Javascript linting JS/JSX
  root: true,
  extends: [
    'eslint-config-prettier', // Enables eslint-config-prettier. This will display prettier errors as ESLint errors.
    'eslint:recommended',
    'plugin:jest/recommended', // Uses the recommended rules Jest testing from @eslint-plugin-jest
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
  ],
  parser: '@typescript-eslint/parser',
  // Setup applying to TypeScript linting to TS/TSX
  overrides: [
    {
      files: ['src/**/*.{ts,tsx}'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      plugins: ['@typescript-eslint'],
      rules: {},
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
    },
  ],
  plugins: ['react-hooks', 'jest', 'eslint-plugin-prettier'],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    jest: {
      version: 27,
    },
  },
  // Fine tune rules
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/jsx-uses-react': 'off', // Suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
};
