// @ts-check

import storybook from 'eslint-plugin-storybook'

/**
 * @type {Array<import('eslint').Linter.Config>}
 */
export default [
  /**
   * @see https://github.com/storybookjs/eslint-plugin-storybook
   */
  ...storybook.configs['flat/recommended'],
]
