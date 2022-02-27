/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['eslint-config-ns-ts-base/base'].map(require.resolve),
  parser: '@typescript-eslint/parser',
  rules: {},
}
