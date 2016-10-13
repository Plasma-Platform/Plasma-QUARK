import React from 'react';

import Button from '../Button.jsx';

export default class BT1 extends React.Component {
  render () {
    return (
      <Button
        {...this.props}
        widthType   = "auto"
        heightType  = "medium"
        roundedType = "all"
        bgType      = "twitter"
        icon        = "twitter"
      >
        {this.props.children}
      </Button>
    );
  }
}
