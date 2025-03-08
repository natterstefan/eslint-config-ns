/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['./rules/react', './rules/react-a11y', './rules/react-hooks'],
  parser: '@typescript-eslint/parser',
  rules: {},
}
