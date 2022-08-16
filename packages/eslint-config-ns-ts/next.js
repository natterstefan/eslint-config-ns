/**
 * Enables ESLint to use dependencies of the shared config
 * @see https://github.com/eslint/eslint/issues/3458
 */
require('./patch/modern-module-resolution')

/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: [
    /**
     * @see https://nextjs.org/docs/basic-features/eslint
     *
     * Why using the plugin not the config?
     * @see https://nextjs.org/docs/basic-features/eslint#recommended-plugin-ruleset
     */
    'plugin:@next/next/core-web-vitals',
    'plugin:@next/next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  rules: {},
}
