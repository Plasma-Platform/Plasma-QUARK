import React from 'react';

import Button from '../Button.jsx';

export default class B1L extends React.Component {
  render () {
    return (
      <Button
        widthType    = "full"
        heightType   = "large"
        roundedType  = "bottom"
        bgType       = "1"
        {...this.props}
      >
        {this.props.children}
      </Button>
    );
  }
}
