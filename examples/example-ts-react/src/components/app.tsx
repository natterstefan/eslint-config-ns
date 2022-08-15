import React, { FunctionComponent, useState, useEffect } from 'react'

import { Text } from './text'

export const App: FunctionComponent = () => {
  const [counter, setCounter] = useState(0)
  const headline = 'Hello eslint-config-ns-ts'

  useEffect(() => {
    setInterval(() => setCounter(c => c + 1), 1000)
  }, [])

  return (
    <>
      <h1>{headline}</h1>
      <Text text="Hello World" />
      <p>
        State Counter: <span data-testid="counter">{counter}</span>
      </p>
    </>
  )
}