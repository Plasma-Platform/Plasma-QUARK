import React from 'react'

import Button from '../Button.jsx'

export default class BG2 extends React.Component {
  render () {
    return (
      <Button
        widthType   = "full"
        heightType  = "medium"
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
