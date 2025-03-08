/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: 'eslint-config-ns-base/base',
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  rules: {},
}
