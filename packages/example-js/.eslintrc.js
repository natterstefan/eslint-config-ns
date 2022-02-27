/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: 'eslint-config-ns-base',
  /**
   * Overwrite or extend the default parserOptions
   */
  parserOptions: {
    requireConfigFile: false,
  },
}
