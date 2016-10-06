import React from 'react'

import Button from '../Button.jsx'

export default class B3C extends React.Component {
  static propTypes = {
    icon: React.PropTypes.string.isRequired
  }

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
