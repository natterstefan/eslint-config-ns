// @ts-check

import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

/**
 * @type {Array<import('eslint').Linter.Config>}
 */
export default [...compat.extends('next/core-web-vitals', 'next/typescript')]
