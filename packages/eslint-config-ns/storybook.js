/**
 * @see https://github.com/storybookjs/eslint-plugin-storybook
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['./rules/storybook'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  rules: {},
}
