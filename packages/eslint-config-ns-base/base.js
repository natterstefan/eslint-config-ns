/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['./rules/base'].map(require.resolve),
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  rules: {},
}
