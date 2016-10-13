import React from 'react';

import Button from '../Button.jsx';

export default class B2F extends React.Component {
  render () {
    return (
      <Button
        widthType   = "auto"
        heightType  = "large"
        roundedType = "all"
        bgType      = "2"
        {...this.props}
      >
        {this.props.children}
      </Button>
    );
  }
}
