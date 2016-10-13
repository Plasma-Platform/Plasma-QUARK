import React from 'react';

import Dropdown from '../Dropdown.jsx';

export default class DD3 extends React.Component {
  constructor (props) {
    super(props);

    this.getValue = this.getValue.bind(this);
  }

  getValue = () => {
    return this.dropdown.getValue();
  }

  render () {
    return (
      <Dropdown
        {...this.props}
        ref        = {(ref) => { this.dropdown = ref; }}
        type       = {3}
        showFilter = {true}
      />
    );
  }
}
