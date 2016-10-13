import React from 'react';

import Button from '../Button.jsx';

export default class BF3 extends React.Component {
  render () {
    return (
      <Button
        widthType   = "auto"
        heightType  = "large"
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
