import React from 'react'
import { shallow } from 'enzyme'

import { App } from '../app'

jest.useFakeTimers()

describe('App', () => {
  it('renders', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.text()).toStrictEqual(
      'Hello eslint-config-ns-ts<Text />State Counter: 0',
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('increases counter every 1 second', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.text()).toStrictEqual(
      'Hello eslint-config-ns-ts<Text />State Counter: 0',
    )

    jest.advanceTimersByTime(1000)
    expect(wrapper.text()).toContain('State Counter: 1')

    jest.advanceTimersByTime(1000)
    expect(wrapper.text()).toContain('State Counter: 2')
  })
})
