import React from 'react'

import Button from '../Button.jsx'

export default class BT3 extends React.Component {
  render () {
    return (
      <Button
        widthType   = "auto"
        heightType  = "large"
        roundedType = "all"
        bgType      = "twitter"
        icon        = "twitter"
        {...this.props}
      >
        {this.props.children}
      </Button>
    )
  }
}
