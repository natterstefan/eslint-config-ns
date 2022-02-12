/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['./base', './jest', './react'].map(require.resolve),
  parser: '@typescript-eslint/parser',
  rules: {},
}
