/**
 * Enables ESLint to use dependencies of the shared config
 * @see https://github.com/eslint/eslint/issues/3458
 */
require('eslint-config-ns-base/patch/modern-module-resolution')

/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['eslint-config-ns-base/jest'].map(require.resolve),
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  rules: {},
}
