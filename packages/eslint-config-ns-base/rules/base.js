/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: [
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
    'eslint-config-airbnb-base',
    // https://www.npmjs.com/package/eslint-plugin-import
    'plugin:import/recommended',
    /**
     * Make sure to put prettier last, so it gets the chance to override other
     * configs.
     *
     * @see https://github.com/prettier/eslint-config-prettier
     *
     * prettier alternative: https://github.com/prettier/prettier-eslint
     */
    'prettier',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    // Globals common to both Node.js and Browser.
    'shared-node-browser': true,
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
  settings: {
    // settings for https://github.com/import-js/eslint-plugin-import
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
}
