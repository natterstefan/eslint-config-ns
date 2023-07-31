import React from 'react'
import { act } from 'react-dom/test-utils'
import { render, screen } from '@testing-library/react'

import { App } from '../app'

jest.useFakeTimers()

describe('App', () => {
  it('renders', () => {
    const { container } = render(<App />)
    expect(container.innerHTML).toMatchSnapshot()
  })

  it('increases counter every 1 second', () => {
    render(<App />)
    const elem = screen.getByTestId('counter')
    expect(elem.innerHTML).toBe('0')

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(elem.innerHTML).toBe('1')

    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(elem.innerHTML).toBe('2')
  })
})
