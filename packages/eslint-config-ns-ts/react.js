/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['eslint-config-ns/react', './rules/react'].map(require.resolve),
  parser: '@typescript-eslint/parser',
  rules: {},
}
