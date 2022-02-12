/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['./rules/react', './rules/react-a11y'].map(require.resolve),
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  globals: {
    __DEV__: true,
  },
  rules: {},
}
