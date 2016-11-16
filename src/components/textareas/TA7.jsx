import React, {Component, PropTypes}  from 'react';
import AbstractField from '../AbstractField.jsx';

export default class TA7 extends Component {
  static propTypes = {
    id               : React.PropTypes.string,
    value            : React.PropTypes.string,
    disabled         : React.PropTypes.bool,
    label            : React.PropTypes.string,
    notificationText : React.PropTypes.string,
    onValidate       : React.PropTypes.func,
    maxLength        : React.PropTypes.number
  };

  getValue = () => {
    return this.input.getValue();
  };

  focus = (event) => {
    this.input.focus(event);
  };

  render () {
    return (
      <AbstractField
        {...this.props}
        ref={input => this.input = input}
        componentType='textarea'
        sizeType='TA7'
        maxLength={ this.props.maxLength || 2000 }
      />
    );
  }
}
