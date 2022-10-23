/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['eslint-config-ns-ts', 'eslint-config-ns-ts/storybook'],
  overrides: [
    {
      files: ['./src/**/__tests__/*.test.ts', './src/**/__tests__/*.test.tsx'],
      rules: {
        'global-require': 0,
        'import/no-extraneous-dependencies': 0,
        'max-classes-per-file': 0,
        'no-console': 0,
        // lets loosen the typescript rules in test files
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-explicit-any': 0,
      },
    },
    {
      files: ['./src/**/stories/*.stories.tsx'],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
}
