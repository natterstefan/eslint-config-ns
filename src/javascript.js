// @ts-check

// TODO: wait for https://github.com/airbnb/javascript/issues/2961
// import eslintConfigAirbnbBase from 'eslint-config-airbnb-base'
// @ts-expect-error -- False positive
import importPlugin from 'eslint-plugin-import'

import { ERROR, OFF } from './config.js'
/**
 * @type {Array<import('eslint').Linter.Config>}
 */
export default [
  // https://www.npmjs.com/package/eslint-plugin-import
  importPlugin.flatConfigs.recommended,
  {
    plugins: {
      // 'eslint-config-airbnb-base': eslintConfigAirbnbBase,
    },
    rules: {
      // general ESLint rules
      'class-methods-use-this': OFF,
      'no-case-declarations': OFF,
      'no-confusing-arrow': [ERROR, { allowParens: false }],
      'no-plusplus': OFF,
      'no-underscore-dangle': OFF, // e.g. __DEV__
      'no-unused-expressions': [
        2,
        {
          // allow short circuit evaluations in your expressions
          allowShortCircuit: true,
        },
      ],
      'sort-imports': OFF,
      'sort-keys': OFF,

      // rules for https://github.com/benmosher/eslint-plugin-import
      'import/extensions': 0,
      'import/order': [
        ERROR,
        {
          'newlines-between': 'always',
          pathGroups: [
            {
              /**
               * This assumes, that the project is using local import aliases with
               * the following structure: `@/**` which resolves to e.g. `src/**`.
               */
              pattern: '@/**',
              group: 'external',
              position: 'after',
            },
          ],
        },
      ],
      'import/prefer-default-export': OFF,
    },
  },
]
