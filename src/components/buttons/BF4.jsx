import React from 'react';

import Button from '../Button.jsx';

export default class BF4 extends React.Component {
  render () {
    return (
      <Button
        widthType    = "full"
        heightType   = "large"
        roundedType  = "all"
        bgType       = "facebook"
        icon         = "facebook"
        {...this.props}
      >
        {this.props.children}
      </Button>
    );
  }
}
