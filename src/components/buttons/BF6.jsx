import React from 'react';

import Button from '../Button.jsx';

export default class BF6 extends React.Component {
  render () {
    return (
      <Button
        {...this.props}
        widthType   = "square"
        heightType  = "large"
        roundedType = "all"
        bgType      = "facebook"
        icon        = "facebook"
      >
        {this.props.children}
      </Button>
    );
  }
}
