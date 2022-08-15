const path = require('path')

const { ESLint } = require('eslint')

// @see https://eslint.org/docs/latest/developer-guide/nodejs-api#eslint-class
async function getErrors(configFile, fileToTest) {
  const eslint = new ESLint({
    overrideConfigFile: configFile,
  })

  const results = await eslint.lintFiles([fileToTest])
  const formatter = await eslint.loadFormatter('stylish')
  return formatter.format(results)
}

describe('Validate ESLint configs', () => {
  it.each([
    // eslint-config-ns configs
    'eslint-config-ns/base.js',
    'eslint-config-ns/index.js',
    'eslint-config-ns/jest.js',
    'eslint-config-ns/react.js',
    // eslint-config-ns-base configs
    'eslint-config-ns-base/base.js',
    'eslint-config-ns-base/index.js',
    'eslint-config-ns-base/jest.js',
    // eslint-config-ns-ts configs
    'eslint-config-ns-ts/base.js',
    'eslint-config-ns-ts/index.js',
    'eslint-config-ns-ts/jest.js',
    'eslint-config-ns-ts/react.js',
    // eslint-config-ns-ts-base configs
    'eslint-config-ns-ts-base/base.js',
    'eslint-config-ns-ts-base/index.js',
    'eslint-config-ns-ts-base/jest.js',
  ])(
    `load config %s in ESLint to validate all rules are correct`,
    async configFile => {
      expect(
        await getErrors(
          path.join(__dirname, '../packages/', configFile),
          path.join(__dirname, 'index.js'),
        ),
      ).toBe('')
    },
  )
})
