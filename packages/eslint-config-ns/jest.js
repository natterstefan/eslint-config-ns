/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['./rules/jest'].map(require.resolve),
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  env: {
    jest: true,
    // https://www.npmjs.com/package/eslint-plugin-jest#usage
    'jest/globals': true,
  },
  rules: {},
}
