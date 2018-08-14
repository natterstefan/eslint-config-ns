module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['jest', 'prettier'], // alternative: https://github.com/prettier/prettier-eslint
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    'shared-node-browser': true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      defaultParams: true,
      spread: true,
    },
  },
  rules: {
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/prefer-default-export': 0,
    'no-case-declarations': 0,
    'no-plusplus': 0,
    'prettier/prettier': [
      'error',
      {
        // keep this in sync with .prettier.config.js (or .prettierrc)
        bracketSpacing: true,
        printWidth: 80,
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'react/jsx-curly-brace-presence': 'never', // use '' when passing a strint as a property
    'react/jsx-filename-extension': 0, // we assume we do not use *.jsx files
    'react/sort-comp': 2,
    'sort-imports': 'off',
    'sort-keys': ['error', 'asc', { caseSensitive: true, natural: true }],
  },
  overrides: [
    {
      files: ['./**/*.test.js', './**/*.spec.js'],
      rules: {
        'no-console': 0,
        'global-require': 0,
      },
    },
  ],
}
