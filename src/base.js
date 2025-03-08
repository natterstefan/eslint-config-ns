/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['./rules/base'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  rules: {},
}
