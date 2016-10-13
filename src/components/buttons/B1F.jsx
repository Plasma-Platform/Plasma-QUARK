import React from 'react';

import Button from '../Button.jsx';

export default class B1F extends React.Component {
  render () {
    return (
      <Button
        widthType   = "auto"
        heightType  = "large"
        roundedType = "all"
        bgType      = "1"
        {...this.props}
      >
        {this.props.children}
      </Button>
    );
  }
}
