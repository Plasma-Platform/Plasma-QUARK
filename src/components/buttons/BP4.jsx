import React from 'react';

import Button from '../Button.jsx';

export default class BP4 extends React.Component {
  render () {
    return (
      <Button
        {...this.props}
        widthType   = "full"
        heightType  = "large"
        roundedType = "all"
        bgType      = "pinterest"
        icon        = "pinterest"
      >
        {this.props.children}
      </Button>
    );
  }
}
