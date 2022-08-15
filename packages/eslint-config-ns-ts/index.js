/**
 * Enables ESLint to use dependencies of the shared config
 * @see https://github.com/eslint/eslint/issues/3458
 */
require('eslint-config-ns-ts-base/patch/modern-module-resolution')

/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['./base', './jest', './react'].map(require.resolve),
  parser: '@typescript-eslint/parser',
  rules: {},
}
