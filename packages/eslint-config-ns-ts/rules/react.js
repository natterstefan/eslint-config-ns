/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['eslint-config-ns/rules/react'],
  rules: {
    // https://www.npmjs.com/package/eslint-plugin-react
    // WHY? Because we focus on interfaces and types instead
    'react/prop-types': 0,
    'react/require-default-props': 0,
  },
}
