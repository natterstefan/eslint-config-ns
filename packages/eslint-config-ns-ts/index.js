/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: [
    'eslint-config-ns',
    // https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',
    // https://www.npmjs.com/package/eslint-plugin-import
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    // https://www.npmjs.com/package/eslint-plugin-react
    // WHY? Because we focus on interfaces and types instead
    'react/prop-types': 0,
    'react/require-default-props': 0,

    /**
     * Typescript Rules
     * @see https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
     */
    /**
     * [no-shadow] False positive on `export enum X` declaration
     *
     * @see https://github.com/typescript-eslint/typescript-eslint/issues/2471#issuecomment-696609988
     */
    'no-shadow': 'off', // replaced by ts-eslint rule below
    '@typescript-eslint/no-shadow': 'error',

    // NOTE: disable the base rule as it can report incorrect errors
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],

    // allow to use _ as prefix for unused arguments to functions, in order to implement interfaces
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', ignoreRestSiblings: true },
    ],

    // prefix interfaces with `I`, e.g. `IComponentProps`
    // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md#enforce-that-interface-names-do-not-begin-with-an-i
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        leadingUnderscore: 'allow',
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    // disable old rule
    '@typescript-eslint/interface-name-prefix': 0,

    /**
     * Configured in tsconfig.json instead
     */
    '@typescript-eslint/explicit-module-boundary-types': 0,

    /**
     * e.g. allow extending DefaultRootState and other vendor interfaces
     */
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],

    /**
     * NOTE: disable both rules as they can report incorrect errors
     *
     * eg. assignment of let variable does not work properly with this rule
     * ```tsx
     * ;({ statusCode } = err)
     * ```
     *
     * TODO: enable again once this issue is fixed!
     */
    'no-extra-semi': 0,
    '@typescript-eslint/no-extra-semi': 0,

    // other typescript rules
    '@typescript-eslint/no-explicit-any': 0, // will be checked by tsconfig.js
    '@typescript-eslint/explicit-function-return-type': 0, // will be checked by tsconfig.js
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
      /**
       * enables using with typescript "baseUrl" and "paths" option
       * @see https://github.com/benmosher/eslint-plugin-import/issues/1485#issuecomment-535351922
       */
      typescript: {},
    },
  },
}
