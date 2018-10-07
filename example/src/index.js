import React, { Component } from 'react'

import { Text } from './components/text'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      headline: 'Some headline',
    }
  }

  render() {
    const { headline } = this.state

    return (
      <React.Fragment>
        <h1>{headline}</h1>
        <Text />
      </React.Fragment>
    )
  }
}

export { App }
