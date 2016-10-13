import React from 'react';

import Button from '../Button.jsx';

export default class B1G extends React.Component {
  render () {
    return (
      <Button
        {...this.props}
        widthType   = "full"
        heightType  = "medium"
        roundedType = "all"
        bgType      = "1"
      >
        {this.props.children}
      </Button>
    );
  }
}
