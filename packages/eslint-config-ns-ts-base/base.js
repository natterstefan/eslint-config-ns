/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: [
    // extend from the JavaScript base config
    'eslint-config-ns-base/base',
    './rules/base',
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
  rules: {},
}
