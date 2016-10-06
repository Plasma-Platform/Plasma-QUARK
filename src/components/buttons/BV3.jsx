import React from 'react'

import Button from '../Button.jsx'

export default class BV3 extends React.Component {
  render () {
    return (
      <Button
        widthType   = "auto"
        heightType  = "large"
        roundedType = "all"
        bgType      = "vk"
        icon        = "vk"
        {...this.props}
      >
        {this.props.children}
      </Button>
    )
  }
}
