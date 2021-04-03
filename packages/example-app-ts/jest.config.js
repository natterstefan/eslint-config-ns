module.exports = {
  preset: 'jest-preset-ns/presets/react',
  globals: {
    // @see https://github.com/natterstefan/jest-preset-ns/issues/4#issuecomment-765416205
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
