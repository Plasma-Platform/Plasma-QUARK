import React from 'react';

import Button from '../Button.jsx';

export default class B3M extends React.Component {
  static propTypes = {
    icon: React.PropTypes.string.isRequired
  }

  render () {
    return (
      <Button
        widthType   = "square"
        heightType  = "medium"
        roundedType = "all"
        bgType      = "3"
        {...this.props}
      >
        {this.props.children}
      </Button>
    );
  }
}
