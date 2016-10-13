import React from 'react';

import Button from '../Button.jsx';

export default class B3F extends React.Component {
  render () {
    return (
      <Button
        {...this.props}
        widthType   = "auto"
        heightType  = "large"
        roundedType = "all"
        bgType      = "3"
      >
        {this.props.children}
      </Button>
    );
  }
}
