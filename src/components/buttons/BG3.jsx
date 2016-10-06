import React from 'react'

import Button from '../Button.jsx'

export default class BG3 extends React.Component {
  render () {
    return (
      <Button
        widthType   = "auto"
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
