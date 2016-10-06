import React from 'react'

import Button from '../Button.jsx'

export default class BV4 extends React.Component {
  render () {
    return (
      <Button
        widthType   = "full"
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
