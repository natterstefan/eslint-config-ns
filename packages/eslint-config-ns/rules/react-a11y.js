/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['plugin:jsx-a11y/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // rules for https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
    // deprecated rule
    'jsx-a11y/no-onchange': 0,
  },
}
