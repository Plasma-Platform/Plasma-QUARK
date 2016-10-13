import React from 'react';

import Button from '../Button.jsx';

export default class B1C extends React.Component {
  static propTypes = {
    icon: React.PropTypes.string.isRequired
  }

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
