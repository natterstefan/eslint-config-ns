// @ts-check

import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

/** @type {Array<import('eslint').Linter.Config>} */
let config

try {
  config = [...compat.extends('next/core-web-vitals', 'next/typescript')]
} catch {
  throw new Error(
    'eslint-config-ns: The "next" preset requires the "next" package to be installed. ' +
      'Please install it: npm install --save-dev next',
  )
}

export default config
