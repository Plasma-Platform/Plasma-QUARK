import React from 'react';

import Loader from '../Loader.jsx';

export default class L2 extends React.Component {
  render () {
    return (
      <Loader
        {...this.props}
        width  = "fixed"
        height = "large"
      />
    );
  }
}
