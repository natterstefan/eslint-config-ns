// @ts-check

/**
 * Loads the relevant ESLint configuration files.
 *
 * This enables to avoid loading plugins that may have
 * peer dependencies that are not installed.
 *
 * inspired by https://github.com/molindo/eslint-config-molindo/blob/9c0d2ce5993487600a7401de3c0dff61b08c46f6/src/index.js#L3-L17
 *
 * @param {...('javascript'|'jest'|'next'|'prettier'|'react'|'storybook'|'typescript')} names - The names of configurations to load
 * @returns {Promise<import('eslint').Linter.Config[]>}
 */
export async function getPresets(...names) {
  const config = await Promise.all(
    names.map(name => import(`./${name}.js`).then(mod => mod.default)),
  )
  return config.flat()
}
