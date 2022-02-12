/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: [
    'airbnb/hooks',
    // https://www.npmjs.com/package/eslint-plugin-react
    'plugin:react/recommended',
    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // https://www.npmjs.com/package/eslint-plugin-react
    // use "" when passing a string as a property
    'react/jsx-curly-brace-presence': [
      2,
      { props: 'never', children: 'never' },
    ],
    // jsx is also allowed in non .jsx files
    'react/jsx-filename-extension': 0,
    // Allowed but we should be aware to not overuse this.
    'react/jsx-props-no-spreading': 0,
    // Enforce component methods order
    'react/sort-comp': 2,
    // Enforce a specific function type for function components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: ['function-expression', 'arrow-function'],
      },
    ],
  },
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React
      // to use
      version: 'detect',
    },
  },
}
