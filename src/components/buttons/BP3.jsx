import React from 'react';

import Button from '../Button.jsx';

export default class BP3 extends React.Component {
  render () {
    return (
      <Button
        widthType   = "auto"
        heightType  = "large"
        roundedType = "all"
        bgType      = "pinterest"
        icon        = "pinterest"
        {...this.props}
      >
        {this.props.children}
      </Button>
    );
  }
}
