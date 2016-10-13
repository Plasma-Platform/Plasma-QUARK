import React from 'react';

import Button from '../Button.jsx';

export default class B2D extends React.Component {
  static propTypes = {
    icon: React.PropTypes.string.isRequired
  }

  render () {
    return (
      <Button
        {...this.props}
        widthType   = "full"
        heightType  = "large"
        roundedType = "all"
        bgType      = "2"
      >
        {this.props.children}
      </Button>
    );
  }
}
