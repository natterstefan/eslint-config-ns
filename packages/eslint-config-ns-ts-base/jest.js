/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['eslint-config-ns-base/jest'].map(require.resolve),
  parser: '@typescript-eslint/parser',
  rules: {},
}
