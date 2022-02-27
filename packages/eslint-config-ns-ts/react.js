/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['./rules/react'].map(require.resolve),
  parser: '@typescript-eslint/parser',
  rules: {},
}
