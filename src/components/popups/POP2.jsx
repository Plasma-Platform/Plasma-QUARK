import React from 'react';

import Popup from '../Popup.jsx';

export default class POP2 extends React.Component {
  render () {
    return (
      <Popup
        {...this.props}
        ref = {ref => { this.popup = ref; }}
        bg = "transparent"
      />
    );
  }
}
