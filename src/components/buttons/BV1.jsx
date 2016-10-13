import React from 'react';

import Button from '../Button.jsx';

export default class BV1 extends React.Component {
  render () {
    return (
      <Button
        widthType   = "auto"
        heightType  = "medium"
        roundedType = "all"
        bgType      = "vk"
        icon        = "vk"
        {...this.props}
      >
        {this.props.children}
      </Button>
    );
  }
}
