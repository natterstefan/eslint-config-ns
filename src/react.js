// @ts-check

// https://www.npmjs.com/package/eslint-plugin-jsx-a11y
import jsxA11y from 'eslint-plugin-jsx-a11y'
// https://www.npmjs.com/package/eslint-plugin-react
import reactPlugin from 'eslint-plugin-react'
// rules for https://www.npmjs.com/package/eslint-plugin-react-hooks
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import { ERROR, OFF } from './config'

/**
 * @type {Array<import('eslint').Linter.Config>}
 */
export default [
  /** @type {any} -- see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/1047 */ (
    jsxA11y.flatConfigs.recommended
  ),
  jsxA11y.flatConfigs.recommended,
  reactPlugin.configs.flat.recommended,
  {
    plugins: { react: reactPlugin, 'react-hooks': reactHooksPlugin },
    settings: { react: { version: 'detect' } },
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { __DEV__: true },
    },
    rules: {
      // https://www.npmjs.com/package/eslint-plugin-react
      // use "" when passing a string as a property
      'react/jsx-curly-brace-presence': [
        2,
        { props: 'never', children: 'never' },
      ],
      // jsx is also allowed in non .jsx files
      'react/jsx-filename-extension': OFF,
      // Allowed but we should be aware to not overuse this.
      'react/jsx-props-no-spreading': OFF,
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

      // https://www.npmjs.com/package/eslint-plugin-react
      // WHY? Because we focus on interfaces and types instead
      'react/prop-types': OFF,
      'react/require-default-props': OFF,

      // rules for https://www.npmjs.com/package/eslint-plugin-react-hooks
      'react-hooks/rules-of-hooks': ERROR,
      'react-hooks/exhaustive-deps': ERROR,
    },
  },
]
