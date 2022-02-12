/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: 'eslint-config-ns-ts-base',
  /**
   * Overwrite or extend the default parserOptions
   */
  parserOptions: {
    requireConfigFile: false,
  },
}
