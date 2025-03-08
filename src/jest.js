// @ts-check

import jest from 'eslint-plugin-jest'

/**
 * @type {Array<import('eslint').Linter.Config>}
 */
export default [
  {
    plugins: { jest: jest },
    languageOptions: { globals: jest.environments.globals.globals },
    settings: { jest: { version: 'detect' } },
    rules: {
      // rules for https://www.npmjs.com/package/eslint-plugin-jest
      'jest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
      'jest/expect-expect': 'error',
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'warn',
      'jest/no-identical-title': 'error',
      'jest/no-large-snapshots': ['warn', { maxSize: 300 }],
      'jest/prefer-strict-equal': 'error',
      'jest/prefer-to-have-length': 'error',
      'jest/valid-expect': 'error',

      // deprecated rules
      'jest/prefer-to-be-null': 0,
      'jest/prefer-to-be-undefined': 0,
    },
    ...jest.configs['flat/style'],
  },
]
