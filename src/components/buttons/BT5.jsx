import React from 'react';

import Button from '../Button.jsx';

export default class BT5 extends React.Component {
  render () {
    return (
      <Button
        widthType   = "square"
        heightType  = "medium"
        roundedType = "all"
        bgType      = "twitter"
        icon        = "twitter"
        {...this.props}
      >
        {this.props.children}
      </Button>
    );
  }
}
