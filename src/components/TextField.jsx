import React, {Component, PropTypes}    from 'react';
import ReactDOM                         from 'react-dom';
import TextFieldStateless               from './textFields/TextFieldStateless.jsx';
import {connectNotificationTextField}   from '../utils';

import './TextField.less';
import 'animations.less';

export default class TextField extends Component {

  static propTypes = {
    id          : React.PropTypes.string,
    sizeType    : React.PropTypes.oneOf(['F1', 'F2', 'F3', 'F4']).isRequired,
    placeholder : React.PropTypes.string,
    value       : React.PropTypes.string,
    disabled    : React.PropTypes.bool
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      value             : props.value || '',
      filled            : props.filled || !!this.props.value || false,
      focused           : !!props.focused,
      isValid           : null,
      animated          : false,
      notificationText  : this.props.notificationText || ''
    }

    this.oldValue = '';
    this.inputElement = null;
    this.inputDOMElement = null;

  }

  componentDidMount = () => {
    this.inputElement = this.comp.input.target.input;
    this.inputDOMElement = ReactDOM.findDOMNode(this.inputElement);
    if (this.props.autofocus) {
      this.focus();
    }

    this.inputDOMElement.addEventListener('animationend', (event) => {
      event.stopPropagation();
      /* @todo: найти более элегантное решение
       для отслеживания полного завершения анимации из нескольких кейфреймов */
      if (event.animationName === 'hideErrorField') {
        this.setState({
          animated: false
        });
      }
    }, false);
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value !== this.props.value) {
      this.setState({
        value   : nextProps.value,
        filled  : true
      });
    }
  }

  focus = () => {
    this.setState({
      filled  : true,
      focused : true
    });
    this.inputElement.focus();
  }

  setValidationStatus = (status, notificationText) => {
    this.handleValidation({
      status  : status,
      message : notificationText
    });
    if (status === false) {
      this._activateAnimation();
    }
  }

  componentDidUpdate = () => {
    if (this.state.isValid === false) {
      this.comp.input.showNotification();
    } else {
      this.comp.input.hideNotification();
    }
  }

  getValidationStatus = () => {
    return this.state.isValid;
  }

  getValue = () => {
    return this.state.value;
  }

  onChange = (event) => {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event);
    }
    this.setState({
      value   : event.target.value,
      filled  : !!event.target.value,
      isValid : null
    });
  }

  onFocus = (event) => {
    if (typeof this.props.onFocus === 'function') {
      this.props.onFocus(event);
    }

    this.oldValue = this.state.value;
    this.setState({
      focused : true,
      filled  : !!event.target.value
    });
  }

  onBlur = (event) => {
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(event);
    }

    let trimmed = this.state.value.trim();

    if (!this.inputElement.value) {
      this.setState({
        filled  : false,
        focused : false
      });
    } else {
      this.setState({
        focused : false,
        value   : trimmed
      });
    }
    if (
      typeof this.props.onValidate === 'function' &&
      (
        (this.state.isValid === null) ||
        (this.oldValue !== this.inputElement.value)
      )
    ) {
      this.props.onValidate();
      this._activateAnimation();
    }
  }

  handleValidation = (data) => {
    this.setState({
      isValid           : data.status,
      notificationText  : data.message
    });
  }

  _activateAnimation = () => {
    this.setState({
      animated: true
    });
  }

  component = this.component || connectNotificationTextField(TextFieldStateless);

  render() {
    const DecoratedTextField = this.component;

    return (
      <DecoratedTextField
        {...this.props}
        ref           = {comp => this.comp = comp}
        value         = {this.state.value}
        filled        = {this.state.filled}
        focused       = {this.state.focused}
        isValid       = {this.state.isValid}
        animated      = {this.state.animated}
        onFocus       = {this.onFocus}
        onBlur        = {this.onBlur}
        onChange      = {this.onChange}
        notification  = { {code: 'N2B', text: this.state.notificationText} }
      />
    );
  }
}
