/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['eslint-config-ns-base/base'].map(require.resolve),
  rules: {},
}
