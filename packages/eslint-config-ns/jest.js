/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['eslint-config-ns-base/jest'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  rules: {},
}
