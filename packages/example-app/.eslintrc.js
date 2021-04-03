module.exports = {
  extends: 'eslint-config-ns',
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
  ],
}
