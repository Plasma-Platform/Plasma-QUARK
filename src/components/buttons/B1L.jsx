import React from 'react';

import Button from '../Button.jsx';

export default class B1L extends React.Component {
  render () {
    return (
      <Button
        {...this.props}
        widthType    = "full"
        heightType   = "large"
        roundedType  = "bottom"
        bgType       = "1"
      >
        {this.props.children}
      </Button>
    );
  }
}
