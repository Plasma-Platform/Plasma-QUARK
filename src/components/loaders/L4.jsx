import React from 'react';

import Loader from '../Loader.jsx';

export default class L4 extends React.Component {
  render () {
    return (
      <Loader
        {...this.props}
        width  = "fixed"
        height = "medium"
      />
    );
  }
}
