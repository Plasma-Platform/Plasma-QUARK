import React, {Component, PropTypes}  from 'react';

import InputElement from '../AbstractField.jsx';

export default class TA3 extends Component {
  static propTypes = {
    id               : React.PropTypes.string,
    value            : React.PropTypes.string,
    disabled         : React.PropTypes.bool,
    label            : React.PropTypes.string,
    notificationText : React.PropTypes.string,
    onValidate       : React.PropTypes.func
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
        sizeType='TA3'
        value={ this.props.value }
        disabled={ this.props.disabled }
        label={ this.props.label }
        className={ this.props.className || ''}
        onValidate={ this.props.onValidate }
        notificationText={this.props.notificationText}
      />
    );
  }
}
