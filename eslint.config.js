// @ts-check

import { getPresets } from './src/index.js'

/**
 * @type {Array<import('eslint').Linter.Config>}
 */
export default await getPresets(
  'javascript',
  'jest',
  // 'next', // requires the 'next' package to be installed
  'prettier',
  'react',
  'storybook',
  'typescript', // (contains javascript)
)
