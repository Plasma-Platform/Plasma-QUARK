import React from 'react';

import Button from '../Button.jsx';

export default class BT6 extends React.Component {
  render () {
    return (
      <Button
        {...this.props}
        widthType   = "square"
        heightType  = "large"
        roundedType = "all"
        bgType      = "twitter"
        icon        = "twitter"
      >
        {this.props.children}
      </Button>
    );
  }
}
