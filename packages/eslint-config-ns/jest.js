/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['./rules/jest'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  rules: {},
}
