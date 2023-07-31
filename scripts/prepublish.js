// eslint-disable-next-line import/no-extraneous-dependencies
const copyfiles = require('copyfiles')

const filesToCopy = ['LICENSE']

const targetPackages = [
  'packages/eslint-config-ns/',
  'packages/eslint-config-ns-base/',
  'packages/eslint-config-ns-ts/',
  'packages/eslint-config-ns-ts-base/',
]

targetPackages.forEach(targetPath => {
  copyfiles([...filesToCopy, targetPath], () => null)
})
