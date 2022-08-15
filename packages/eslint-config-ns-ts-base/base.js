/**
 * Enables ESLint to use dependencies of the shared config
 * @see https://github.com/eslint/eslint/issues/3458
 */
require('eslint-config-ns-base/patch/modern-module-resolution')

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
