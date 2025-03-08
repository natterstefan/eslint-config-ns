// @ts-check

// eslint-disable-next-line import/no-unresolved -- False positive
import tseslint from 'typescript-eslint'
// @ts-expect-error -- False positive
import importPlugin from 'eslint-plugin-import'

import javascript from './javascript.js'
import { ERROR, OFF, typescriptFiles } from './config.js'

/**
 * @type {Array<import('eslint').Linter.Config>}
 */
export default [
  ...javascript,
  ...tseslint.configs.recommended,
  importPlugin.configs.typescript,
  {
    files: typescriptFiles,
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: { 'import/resolver': 'typescript' },
    rules: {
      /**
       * Typescript Rules
       * @see https://www.npmjs.com/package/typescript-eslint
       */
      /**
       * [no-shadow] False positive on `export enum X` declaration
       *
       * @see https://github.com/typescript-eslint/typescript-eslint/issues/2471#issuecomment-696609988
       */
      'no-shadow': OFF, // replaced by ts-eslint rule below
      '@typescript-eslint/no-shadow': ERROR,

      // NOTE: disable the base rule as it can report incorrect errors
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
      'no-use-before-define': OFF,
      '@typescript-eslint/no-use-before-define': ERROR,

      // allow to use _ as prefix for unused arguments to functions, in order to implement interfaces
      '@typescript-eslint/no-unused-vars': [
        ERROR,
        { argsIgnorePattern: '^_', ignoreRestSiblings: true },
      ],

      // prefix interfaces with `I`, e.g. `IComponentProps`
      // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md#enforce-that-interface-names-do-not-begin-with-an-i
      '@typescript-eslint/naming-convention': [
        ERROR,
        {
          selector: 'interface',
          format: ['PascalCase'],
          leadingUnderscore: 'allow',
          custom: { regex: '^I[A-Z]', match: true },
        },
      ],
      // disable old rule
      '@typescript-eslint/interface-name-prefix': OFF,

      /**
       * Can be configured in the tsconfig.json instead
       * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
       */
      '@typescript-eslint/explicit-module-boundary-types': OFF,

      /**
       * e.g. allow extending DefaultRootState and other vendor interfaces
       */
      '@typescript-eslint/no-empty-interface': [
        ERROR,
        { allowSingleExtends: true },
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
      'no-extra-semi': OFF,
      '@typescript-eslint/no-extra-semi': OFF,

      // other typescript rules ideally checked by tsconfig.js
      '@typescript-eslint/no-explicit-any': OFF,
      '@typescript-eslint/explicit-function-return-type': OFF,
    },
  },
]
