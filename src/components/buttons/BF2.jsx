import React from 'react';

import Button from '../Button.jsx';

export default class BF2 extends React.Component {
  render () {
    return (
      <Button
        widthType   = "full"
        heightType  = "medium"
        roundedType = "all"
        bgType      = "facebook"
        icon        = "facebook"
        {...this.props}
      >
        {this.props.children}
      </Button>
    );
  }
}
