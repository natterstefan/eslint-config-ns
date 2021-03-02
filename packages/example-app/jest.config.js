module.exports = {
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/__tests__/**/*.js',
    '!src/__mocks__/**/*.js',
  ],
  setupFiles: ['./jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['<rootDir>/(dist|node_modules)/'],
}
