/**
 * Enables ESLint to use dependencies of the shared config
 * @see https://github.com/eslint/eslint/issues/3458
 */
require('./patch/modern-module-resolution')

/**
 * @see https://github.com/storybookjs/eslint-plugin-storybook
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['./rules/storybook'].map(require.resolve),
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  rules: {},
}
