import React from 'react'

import Button from '../Button.jsx'

export default class BT6 extends React.Component {
  render () {
    return (
      <Button
        widthType   = "square"
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
