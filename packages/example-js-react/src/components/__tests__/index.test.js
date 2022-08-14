import React from 'react'
import { act } from 'react-dom/test-utils'
import { mount, shallow } from 'enzyme'

import { App } from '../app'

jest.useFakeTimers()

describe('App', () => {
  it('renders', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })

  it('increases counter every 1 second', () => {
    const wrapper = mount(<App />)
    expect(wrapper.text()).toBe(
      'Hello eslint-config-nsHello WorldState Counter: 0',
    )

    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(wrapper.text()).toContain('State Counter: 1')

    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(wrapper.text()).toContain('State Counter: 2')
  })
})
