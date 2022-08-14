import React from 'react'
import { render, screen } from '@testing-library/react'

import { App } from '../app'

jest.useFakeTimers()

describe('App', () => {
  it('increases counter every 1 second', () => {
    render(<App />)
    const elem = screen.getByTestId('counter')
    expect(elem.innerHTML).toBe('0')

    jest.advanceTimersByTime(1000)
    expect(elem.innerHTML).toBe('1')

    jest.advanceTimersByTime(1000)
    expect(elem.innerHTML).toBe('2')
  })
})
