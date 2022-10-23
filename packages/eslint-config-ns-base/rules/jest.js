/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: [
    // https://www.npmjs.com/package/eslint-plugin-jest
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  env: {
    jest: true,
    // https://www.npmjs.com/package/eslint-plugin-jest#usage
    'jest/globals': true,
  },
  rules: {
    // rules for https://www.npmjs.com/package/eslint-plugin-jest
    'jest/consistent-test-it': [
      'error',
      {
        fn: 'it',
        withinDescribe: 'it',
      },
    ],
    'jest/expect-expect': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'warn',
    'jest/no-identical-title': 'error',
    'jest/no-large-snapshots': ['warn', { maxSize: 300 }],
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/valid-expect': 'error',

    // deprecated rules
    'jest/prefer-to-be-null': 0,
    'jest/prefer-to-be-undefined': 0,
  },
  settings: {
    jest: {
      /**
       * @see https://github.com/jest-community/eslint-plugin-jest#jest-version-setting
       */
      // eslint-disable-next-line import/no-extraneous-dependencies, global-require
      version: require('jest/package.json').version,
    },
  },
  // TODO: if necessary, add https://www.npmjs.com/package/eslint-import-resolver-jest
  // support as well
}
