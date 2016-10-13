import React from 'react';

import Button from '../Button.jsx';

export default class BV5 extends React.Component {
  render () {
    return (
      <Button
        {...this.props}
        widthType   = "square"
        heightType  = "medium"
        roundedType = "all"
        bgType      = "vk"
        icon        = "vk"
      >
        {this.props.children}
      </Button>
    );
  }
}
