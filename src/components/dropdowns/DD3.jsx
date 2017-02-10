import React  from 'react';

import Dropdown from '../Dropdown.jsx';

export default class DD3 extends React.Component {
  constructor (props) {
    super(props);

    this.getValue = this.getValue.bind(this);
    this.open     = this.open.bind(this);
    this.close    = this.close.bind(this);
  }

  getValue () {
    return this.dropdown.getValue();
  }

  open () {
    this.dropdown.open();
  }

  close () {
    this.dropdown.close();
  }

  render () {
    return (
      <Dropdown
        type              = {3}
        labelSize         = "small"
        showLabelInButton = {true}
        buttonSize        = "large"
        showFilterBox     = {true}
        showSelectedOption = {false}
        {...this.props}
        ref               = {ref => { this.dropdown = ref; }}
      />
    );
  }
}
