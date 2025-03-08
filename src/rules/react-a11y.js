/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: [
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
    'plugin:jsx-a11y/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // deprecated rule
    'jsx-a11y/no-onchange': 0,
  },
}
