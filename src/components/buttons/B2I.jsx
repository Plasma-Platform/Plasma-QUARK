import React from 'react';

import Button from '../Button.jsx';

export default class B2I extends React.Component {
  static propTypes = {
    icon: React.PropTypes.string.isRequired
  }

  render () {
    return (
      <Button
        {...this.props}
        widthType   = "full"
        heightType  = "medium"
        roundedType = "bottom"
        bgType      = "2"
      >
        {this.props.children}
      </Button>
    );
  }
}
