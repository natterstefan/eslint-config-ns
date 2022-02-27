/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['./rules/base'].map(require.resolve),
  parser: '@typescript-eslint/parser',
  rules: {},
}
