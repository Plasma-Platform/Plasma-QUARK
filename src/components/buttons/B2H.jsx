import React from 'react';

import Button from '../Button.jsx';

export default class B2H extends React.Component {
  render () {
    return (
      <Button
        {...this.props}
        widthType   = "full"
        heightType  = "large"
        roundedType = "all"
        bgType      = "2"
      >
        {this.props.children}
      </Button>
    );
  }
}
