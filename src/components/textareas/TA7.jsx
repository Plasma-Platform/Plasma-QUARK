import React, {Component, PropTypes}  from 'react';
import InputElement from '../InputElement.jsx';

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
  }

  render () {
    return (
      <InputElement
        id={ this.props.id }
        ref={input => this.input = input}
        componentType='textarea'
        sizeType='TA7'
        value={ this.props.value }
        disabled={ this.props.disabled }
        label={ this.props.label }
        className={ this.props.className || ''}
        onValidate={ this.props.onValidate }
        maxLength={ this.props.maxLength || 2000 }
        notificationText={this.props.notificationText}
      />
    );
  }
}