module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/__mocks__/**/*.{js,jsx}',
    '!src/__tests__/**/*.{js,jsx}',
  ],
  setupFiles: ['./jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: [
    '<rootDir>/(build|dist|es|esm|lib|node_modules)/',
    '<rootDir>/src/*/(build|dist|es|esm|lib|node_modules)/',
  ],
  testMatch: ['/**/__tests__/*.test.js', '/**/__tests__/*.test.jsx'],
}
