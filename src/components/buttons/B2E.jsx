import React from 'react';

import Button from '../Button.jsx';

export default class B2E extends React.Component {
  render () {
    return (
      <Button
        {...this.props}
        widthType   = "auto"
        heightType  = "medium"
        roundedType = "all"
        bgType      = "2"
      >
        {this.props.children}
      </Button>
    );
  }
}
