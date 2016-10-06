import React from 'react'

import Switcher from '../Switcher.jsx'

export default class SW1 extends React.Component {
  render () {
    return (
      <Switcher
        {...this.props}
        size = "medium"
      />
    )
  }
}
