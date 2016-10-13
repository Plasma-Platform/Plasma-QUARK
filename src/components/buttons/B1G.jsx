import React from 'react';

import Button from '../Button.jsx';

export default class B1G extends React.Component {
  render () {
    return (
      <Button
        widthType   = "full"
        heightType  = "medium"
        roundedType = "all"
        bgType      = "1"
        {...this.props}
      >
        {this.props.children}
      </Button>
    );
  }
}
