import React from 'react';

import Button from '../Button.jsx';

export default class BP6 extends React.Component {
  render () {
    return (
      <Button
        {...this.props}
        widthType   = "square"
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
