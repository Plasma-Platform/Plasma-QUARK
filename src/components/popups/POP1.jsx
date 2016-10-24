import React from 'react';

import Popup from '../Popup.jsx';

export default class POP1 extends React.Component {
  render () {
    return (
      <Popup
        {...this.props}
        ref = {ref => this.pop1 = ref}
        bg = "fill"
      />
    );
  }
}
