import React, {Component, PropTypes}  from 'react';
import TextField            from '../InputElement.jsx';

export default class F1 extends Component {
  static propTypes = {
    sizeType : React.PropTypes.string,
    onChange : React.PropTypes.func
  }

  constructor(props, context) {
    super(props, context);
  }

  get value() {
    return this.getValue();
  }

  set value(val) {
  }

  getValue = () => {
    return this.input.getValue();
  }

  focus = () => {
    this.input.focus();
  }

  render () {
    return (
      <TextField
        {...this.props}
        ref={input => this.input = input}
        componentType='textfield'
        sizeType='F1'
      />
    );
  }
}