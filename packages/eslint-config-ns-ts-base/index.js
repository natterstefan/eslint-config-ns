// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('eslint-config-ns-base/patch/modern-module-resolution')

/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['./base', './jest'].map(require.resolve),
  parser: '@typescript-eslint/parser',
  rules: {},
}
