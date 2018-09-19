module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['jest', 'prettier'], // alternative: https://github.com/prettier/prettier-eslint
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    'jest/globals': true, // https://www.npmjs.com/package/eslint-plugin-jest#usage
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
    // general ESLint rules
    'no-case-declarations': 0,
    'no-plusplus': 0,
    'sort-imports': 'off',
    'sort-keys': ['error', 'asc', { caseSensitive: true, natural: true }],

    // rules for https://github.com/benmosher/eslint-plugin-import
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/prefer-default-export': 0,

    // rules for https://www.npmjs.com/package/eslint-plugin-jest
    'jest/consistent-test-it': [
      'error',
      {
        fn: 'test',
        withinDescribe: 'test',
      },
    ],
    'jest/expect-expect': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'warn',
    'jest/no-identical-title': 'error',
    'jest/no-jest-import': 'error',
    'jest/no-large-snapshots': ['warn', { maxSize: 300 }],
    'jest/prefer-strict-equal': 'warn',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/valid-expect': 'error',

    // rules for https://github.com/prettier/eslint-plugin-prettier
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

    // rules for https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
    'react/jsx-curly-brace-presence': 'never', // use '' when passing a strint as a property
    'react/jsx-filename-extension': 0, // we assume we do not use *.jsx files
    'react/sort-comp': 2,
  },
  overrides: [
    {
      files: ['./src/**/*.test.js', './src/**/*.spec.js'],
      globals: {
        React: true,
      },
      rules: {
        'no-console': 0,
        'global-require': 0,
      },
    },
  ],
}
