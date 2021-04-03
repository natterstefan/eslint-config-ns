module.exports = {
  extends: [
    'eslint-config-ns',
    // add typescript specific linting rules and add prettier typescript support
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    // rules for https://www.npmjs.com/package/eslint-plugin-react
    'react/prop-types': 0, // focus on interfaces and types instead

    /**
     * Typescript Rules
     * @see https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
     */
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    // allow to use _ as prefix for unused arguments to functions, in order to implement interfaces
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-explicit-any': 0, // will be checked by tsconfig.js
    '@typescript-eslint/explicit-function-return-type': 0, // will be checked by tsconfig.js
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
  },
  overrides: [
    {
      files: [
        '*.test.ts',
        '*.test.tsx',
        '*.test.js',
        '*.test.jsx',
        '*.spec.ts',
        '*.spec.tsx',
        '*.spec.js',
        '*.spec.jsx',
      ],
      rules: {
        'import/no-extraneous-dependencies': 0,
        'max-classes-per-file': 0,
        'no-console': 0,
        // lets loosen the typescript rules in test files a little
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-explicit-any': 0,
      },
    },
    {
      files: ['webpack.*.js'],
      rules: {
        'import/no-extraneous-dependencies': 0,
        'no-console': 0,
        '@typescript-eslint/no-var-requires': 0,
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React
      // to use
      version: 'detect',
    },
  },
}
