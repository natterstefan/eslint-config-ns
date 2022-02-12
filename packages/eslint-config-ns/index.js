/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['./base', './jest', './react'].map(require.resolve),
  rules: {},
}
