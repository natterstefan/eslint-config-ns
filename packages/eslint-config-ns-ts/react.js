/**
 * Enables ESLint to use dependencies of the shared config
 * @see https://github.com/eslint/eslint/issues/3458
 */
require('./patch/modern-module-resolution')

/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['eslint-config-ns/react', './rules/react'].map(require.resolve),
  parser: '@typescript-eslint/parser',
  rules: {},
}
