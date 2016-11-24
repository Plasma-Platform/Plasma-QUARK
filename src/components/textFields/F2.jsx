import React, {Component, PropTypes}  from 'react';
import AbstractField from '../AbstractField.jsx';

export default class F2 extends Component {
  static propTypes = {
    sizeType : React.PropTypes.string,
    onChange : React.PropTypes.func
  }

  get value () {
    return this.getValue();
  }

  getValue = () => {
    return this.input.getValue();
  }

  focus = () => {
    this.input.focus();
  }

  render () {
    return (
      <AbstractField
        {...this.props}
        componentType='textfield'
        ref={input => this.input = input}
        sizeType='F2'
      />
    );
  }
}
