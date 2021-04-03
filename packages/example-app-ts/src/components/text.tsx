import React, { FunctionComponent } from 'react'

interface IProps {
  /**
   * Text to render in the UI
   */
  text: string
}

const Text: FunctionComponent<IProps> = ({ text }) => <div>{text}</div>

export { Text }
