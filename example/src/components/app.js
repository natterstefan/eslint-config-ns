import React, { useState } from 'react'

import { Text } from './text'

export const App = () => {
  const [counter, setCounter] = useState(0)
  const headline = 'Hello eslint-config-ns'

  setInterval(() => setCounter(counter + 1), 1000)

  return (
    <React.Fragment>
      <h1>{headline}</h1>
      <Text />
      <p>State Counter: {counter}</p>
    </React.Fragment>
  )
}
