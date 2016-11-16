import React, {Component, PropTypes} from 'react';
import AbstractField from '../AbstractField.jsx';

export default class F1 extends Component {
  static propTypes = {
    sizeType : PropTypes.string,
    onChange : PropTypes.func
  };

  get value () {
    return this.getValue();
  };

  getValue = () => {
    return this.input.getValue();
  };

  focus = () => {
    this.input.focus();
  };

  render () {
    return (
      <AbstractField
        {...this.props}
        ref={input => this.input = input}
        componentType='textfield'
        sizeType='F1'
      />
    );
  }
}