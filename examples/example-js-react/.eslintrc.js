/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['eslint-config-ns', 'eslint-config-ns/storybook'],
  /**
   * Overwrite or extend the default parserOptions
   */
  parserOptions: {
    requireConfigFile: false,
  },
  overrides: [
    {
      files: ['./src/**/__tests__/*.test.js', './src/**/__tests__/*.test.jsx'],
      rules: {
        'global-require': 0,
        'import/no-extraneous-dependencies': 0,
        'max-classes-per-file': 0,
        'no-console': 0,
      },
    },
    {
      files: ['./src/**/stories/*.stories.jsx'],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
}
