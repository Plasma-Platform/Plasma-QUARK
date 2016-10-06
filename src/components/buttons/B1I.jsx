import React from 'react'

import Button from '../Button.jsx'

export default class B1I extends React.Component {
  static propTypes = {
    icon: React.PropTypes.string.isRequired
  }

  render () {
    return (
      <Button
        widthType   = "full"
        heightType  = "medium"
        roundedType = "bottom"
        bgType      = "1"
        {...this.props}
      >
        {this.props.children}
      </Button>
    )
  }
}
