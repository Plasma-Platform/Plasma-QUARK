import React from 'react'

import Button from '../Button.jsx'

export default class B3G extends React.Component {
  render () {
    return (
      <Button
        widthType   = "full"
        heightType  = "medium"
        roundedType = "all"
        bgType      = "3"
        {...this.props}
      >
        {this.props.children}
      </Button>
    )
  }
}
