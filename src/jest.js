// @ts-check

import jest from 'eslint-plugin-jest'

import { ERROR, OFF, WARN } from './config.js'

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
      'jest/consistent-test-it': [ERROR, { fn: 'it', withinDescribe: 'it' }],
      'jest/expect-expect': ERROR,
      'jest/no-disabled-tests': WARN,
      'jest/no-focused-tests': WARN,
      'jest/no-identical-title': ERROR,
      'jest/no-large-snapshots': [WARN, { maxSize: 300 }],
      'jest/prefer-strict-equal': ERROR,
      'jest/prefer-to-have-length': ERROR,
      'jest/valid-expect': ERROR,

      // deprecated rules
      'jest/prefer-to-be-null': OFF,
      'jest/prefer-to-be-undefined': OFF,
    },
    ...jest.configs['flat/style'],
  },
]
