import React from 'react';

import Button from '../Button.jsx';

export default class BT2 extends React.Component {
  render () {
    return (
      <Button
        {...this.props}
        widthType   = "full"
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
