/**
 * @rushstack/eslint-patch is used to include plugins dependencies instead of
 * imposing them as peer dependencies
 *
 * Docs:
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 *
 * Inspired by:
 * @see https://github.com/vercel/next.js/blob/8f027c2d7a4d8789834b75d5ba3e029519b88949/packages/eslint-config-next/index.js#L1-L6
 */
require('@rushstack/eslint-patch/modern-module-resolution')
