/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['./rules/jest'].map(require.resolve),
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  rules: {},
}
