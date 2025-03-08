// @ts-check

// TODO: wait for https://github.com/airbnb/javascript/issues/2961
// import eslintConfigAirbnbBase from 'eslint-config-airbnb-base'
// @ts-expect-error -- False positive
import importPlugin from 'eslint-plugin-import'

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
      'class-methods-use-this': 0,
      'no-case-declarations': 0,
      'no-confusing-arrow': ['error', { allowParens: false }],
      'no-plusplus': 0,
      'no-underscore-dangle': 0, // e.g. __DEV__
      'no-unused-expressions': [
        2,
        {
          // allow short circuit evaluations in your expressions
          allowShortCircuit: true,
        },
      ],
      'sort-imports': 'off',
      'sort-keys': 0,

      // rules for https://github.com/benmosher/eslint-plugin-import
      'import/extensions': 0,
      'import/order': [
        'error',
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
      'import/prefer-default-export': 0,
    },
  },
]
