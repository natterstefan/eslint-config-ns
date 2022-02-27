/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  rules: {
    // https://www.npmjs.com/package/eslint-plugin-react
    // WHY? Because we focus on interfaces and types instead
    'react/prop-types': 0,
    'react/require-default-props': 0,
  },
}
