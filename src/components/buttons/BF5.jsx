import React from 'react';

import Button from '../Button.jsx';

export default class BF5 extends React.Component {
  render () {
    return (
      <Button
        widthType    = "square"
        heightType   = "medium"
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
