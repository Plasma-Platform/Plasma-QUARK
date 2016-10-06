import React from 'react'

import Button from '../Button.jsx'

export default class BV2 extends React.Component {
  render () {
    return (
      <Button
        widthType   = "full"
        heightType  = "medium"
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
