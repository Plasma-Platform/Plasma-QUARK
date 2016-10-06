import React from 'react'

import Button from '../Button.jsx'

export default class BT4 extends React.Component {
  render () {
    return (
      <Button
        widthType   = "full"
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
