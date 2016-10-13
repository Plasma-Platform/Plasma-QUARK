import React from 'react';

import Button from '../Button.jsx';

export default class BG1 extends React.Component {
  render () {
    return (
      <Button
        {...this.props}
        widthType   = "auto"
        heightType  = "medium"
        roundedType = "all"
        bgType      = "google-plus"
        icon        = "google-plus"
      >
        {this.props.children}
      </Button>
    );
  }
}
