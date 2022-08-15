/**
 * Enables ESLint to use dependencies of the shared config
 * @see https://github.com/eslint/eslint/issues/3458
 */
require('./packages/eslint-config-ns-base/patch/modern-module-resolution')

module.exports = {
  extends: 'eslint-config-ns-base',
}
