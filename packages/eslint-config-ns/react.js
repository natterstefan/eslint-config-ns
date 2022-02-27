/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['./rules/react', './rules/react-a11y', './rules/react-hooks'].map(
    require.resolve,
  ),
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    requireConfigFile: false,
  },
  rules: {},
}
