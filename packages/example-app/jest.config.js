/* global module */
module.exports = {
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/prop-types.js',
    '!src/__tests__/**/*.js',
    '!src/__mocks__/**/*.js',
  ],
  setupFiles: ['./jest.setup.js'],
  setupFilesAfterEnv: ['./node_modules/jest-enzyme/lib/index.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['<rootDir>/(dist|node_modules)/'],
}
