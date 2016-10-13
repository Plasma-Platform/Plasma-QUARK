import React from 'react';

import Button from '../Button.jsx';

export default class B3K extends React.Component {
  static propTypes = {
    icon: React.PropTypes.string.isRequired
  }

  render () {
    return (
      <Button
        widthType   = "full"
        heightType  = "large"
        roundedType = "bottom"
        bgType      = "3"
        {...this.props}
      >
        {this.props.children}
      </Button>
    );
  }
}
