import React from 'react';

import Button from '../Button.jsx';

export default class B1A extends React.Component {
  static propTypes = {
    icon: React.PropTypes.string.isRequired
  }

  render () {
    return (
      <Button
        widthType   = "auto"
        heightType  = "medium"
        roundedType = "all"
        bgType      = "1"
        {...this.props}
      >
        {this.props.children}
      </Button>
    );
  }
}
