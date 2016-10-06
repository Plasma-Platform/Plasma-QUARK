import React from 'react'

import Button from '../Button.jsx'

export default class BG6 extends React.Component {
  render () {
    return (
      <Button
        widthType   = "square"
        heightType  = "large"
        roundedType = "all"
        bgType      = "google-plus"
        icon        = "google-plus"
        {...this.props}
      >
        {this.props.children}
      </Button>
    )
  }
}
