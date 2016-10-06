import React from 'react'

import Button from '../Button.jsx'

export default class BP5 extends React.Component {
  render () {
    return (
      <Button
        widthType   = "square"
        heightType  = "medium"
        roundedType = "all"
        bgType      = "pinterest"
        icon        = "pinterest"
        {...this.props}
      >
        {this.props.children}
      </Button>
    )
  }
}
