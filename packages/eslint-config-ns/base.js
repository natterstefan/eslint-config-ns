/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['./rules/base'].map(require.resolve),
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    // Globals common to both Node.js and Browser.
    'shared-node-browser': true,
  },
  rules: {},
}
