import React from 'react';

import Button from '../Button.jsx';

export default class BP1 extends React.Component {
  render () {
    return (
      <Button
        {...this.props}
        widthType   = "auto"
        heightType  = "medium"
        roundedType = "all"
        bgType      = "pinterest"
        icon        = "pinterest"
      >
        {this.props.children}
      </Button>
    );
  }
}
