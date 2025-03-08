/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: [
    'airbnb/hooks',
    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // rules for https://www.npmjs.com/package/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
}
