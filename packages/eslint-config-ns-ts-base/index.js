/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['./base', './jest'].map(require.resolve),
  parser: '@typescript-eslint/parser',
  rules: {},
}
