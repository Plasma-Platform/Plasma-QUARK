import React from 'react'

import Button from '../Button.jsx'

export default class BG4 extends React.Component {
  render () {
    return (
      <Button
        widthType   = "full"
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
