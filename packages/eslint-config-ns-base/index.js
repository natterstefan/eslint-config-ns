/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['./base', './jest'].map(require.resolve),
  rules: {},
}
