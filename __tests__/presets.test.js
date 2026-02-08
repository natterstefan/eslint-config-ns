import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { getPresets } from '../src/index.js'

describe('getPresets', () => {
  it('loads the javascript preset', async () => {
    const configs = await getPresets('javascript')
    assert.ok(Array.isArray(configs))
    assert.ok(configs.length > 0)
  })

  it('loads the typescript preset (includes javascript)', async () => {
    const configs = await getPresets('typescript')
    assert.ok(Array.isArray(configs))
    assert.ok(configs.length > 0)
  })

  it('loads the react preset', async () => {
    const configs = await getPresets('react')
    assert.ok(Array.isArray(configs))
    assert.ok(configs.length > 0)
  })

  it('loads the jest preset', async () => {
    const configs = await getPresets('jest')
    assert.ok(Array.isArray(configs))
    assert.ok(configs.length > 0)
  })

  it('loads the storybook preset', async () => {
    const configs = await getPresets('storybook')
    assert.ok(Array.isArray(configs))
    assert.ok(configs.length > 0)
  })

  it('loads the prettier preset', async () => {
    const configs = await getPresets('prettier')
    assert.ok(Array.isArray(configs))
    assert.ok(configs.length > 0)
  })

  it('loads multiple presets at once', async () => {
    const configs = await getPresets('javascript', 'react', 'jest', 'prettier')
    assert.ok(Array.isArray(configs))
    assert.ok(configs.length > 0)
    // each config entry should be a plain object
    for (const config of configs) {
      assert.equal(typeof config, 'object')
      assert.ok(config !== null)
    }
  })

  it('returns flat array of configs (not nested)', async () => {
    const configs = await getPresets('typescript', 'react')
    for (const config of configs) {
      assert.ok(!Array.isArray(config), 'config entries should not be arrays')
    }
  })

  it('throws for an unknown preset', async () => {
    await assert.rejects(() => getPresets('nonexistent'), {
      name: 'Error',
    })
  })
})
