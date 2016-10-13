import React from 'react';

import Switcher from '../Switcher.jsx';

export default class SW2 extends React.Component {
  render () {
    return (
      <Switcher
        {...this.props}
        size = "large"
      />
    );
  }
}
