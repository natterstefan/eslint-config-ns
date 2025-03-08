// @ts-check

import { getPresets } from './src/index.js'

/**
 * @type {Array<import('eslint').Linter.Config>}
 */
export default await getPresets(
  'javascript',
  'jest',
  // 'next', TODO: fix and enable
  'prettier',
  'react',
  'storybook',
  'typescript', // (contains javascript)
)
