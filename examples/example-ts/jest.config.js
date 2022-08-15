/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  preset: 'jest-preset-ns/presets/default',
  globals: {
    /**
     * @see https://github.com/natterstefan/jest-preset-ns/issues/4#issuecomment-765416205
     * @type {import('ts-jest').GlobalConfigTsJest["ts-jest"]}
     */
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
}
