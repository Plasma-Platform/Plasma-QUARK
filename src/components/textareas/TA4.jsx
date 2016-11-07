import React, {Component, PropTypes}  from 'react';

import TextArea from '../TextArea111.jsx';
import InputElement from '../InputElement.jsx';

export default class TA4 extends Component {
  static propTypes = {
    type             : React.PropTypes.string,
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
        ref={input => this.input = input}
        componentType='textarea'
        sizeType='TA4'
        type={ this.props.type }
        id={ this.props.id }
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
