import React from 'react';

import Button from '../Button.jsx';

export default class B2J extends React.Component {
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
