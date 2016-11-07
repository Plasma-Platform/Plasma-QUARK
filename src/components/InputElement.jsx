import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TextField from './TextField.jsx';
import TextArea from './TextArea.jsx';
import {connectNotificationTextField} from './utils';

export default class InputElement extends Component {

  static propTypes = {
    id            : React.PropTypes.string,
    componentType : React.PropTypes.oneOf(['textfield', 'textarea']),
    sizeType      : React.PropTypes.string.isRequired,
    placeholder   : React.PropTypes.string,
    value         : React.PropTypes.string,
    disabled      : React.PropTypes.bool
  }

  static defaultProps = {
    notificationAlt: {status: false}
  };

  constructor (props, context) {
    super(props, context);

    this.state = {
      value            : props.value || '',
      filled           : props.filled || !!this.props.value || false,
      focused          : !!props.focused,
      isValid          : null,
      animated         : false,
      notificationText : this.props.notificationText || '',
      limitCounter     : this.props.maxLength
    };

    this.oldValue = '';
    this.inputElement = null;
    this.inputDOMElement = null;
    this.textComponent = (props.componentType === 'textarea') ? TextArea : TextField;
    this.component = connectNotificationTextField(this.textComponent);
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
      if (event.animationName === 'hideErrorField' || event.animationName === 'hideSuccessField') {
        this.setState({
          animated: false
        });
      }
    }, false);
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value !== this.props.value) {
      this.setState({
        value  : nextProps.value,
        filled : true
      });
    }
  }

  componentDidUpdate = () => {
    if (this.state.isValid === false) {
      this.comp.input.showNotification();
    } else {
      this.comp.input.hideNotification();
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
    this.activateAnimation();
  }

  getValidationStatus = () => {
    return this.state.isValid;
  }

  getValue = () => {
    return this.state.value;
  }

  changeFieldType = (newType = 'text') => {
    this.inputDOMElement.setAttribute('type', newType);
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

    this.zeroingInputCounter();
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
      this.activateAnimation();
    }
  }

  handleValidation = (data) => {
    this.setState({
      isValid          : data.status,
      notificationText : data.message
    });
  }

  resetValidationStatus = () => {
    this.setState({
      isValid: undefined
    });
  }

  activateAnimation = () => {
    this.setState({
      animated: true
    });
  }

  // приводим к нулю, возможные отрицательные значения, которые появляются в счетчике
  // при монтировании компонента с заполненным значением, превышающим установвленный лимит
  zeroingInputCounter = () => {
    let textareaElement = this.comp.input.target.input;

    if (textareaElement.value === 0) {
      return;
    }

    let currentValue = this.props.maxLength - (textareaElement ? textareaElement.value.length : 0);
    let currentMaxValue = Math.max(0, currentValue);

    this.setState({
      limitCounter: currentMaxValue
    });
  }

  render () {
    const DecoratedTextField = this.component;
    console.log(window.aaa = this)

    return (
      <DecoratedTextField
        {...this.props}
        ref                   = {comp => this.comp = comp}
        value                 = {this.state.value}
        filled                = {this.state.filled}
        focused               = {this.state.focused}
        limitCounter          = {this.state.limitCounter}
        isValid               = {this.state.isValid}
        animated              = {this.state.animated}
        onFocus               = {this.onFocus}
        onBlur                = {this.onBlur}
        onChange              = {this.onChange}
        changeFieldType       = {this.changeFieldType}
        resetValidationStatus = {this.resetValidationStatus}
        notification          = {
          { code     : this.props.notificationType || 'N2B',
            text     : this.state.notificationText,
            maxWidth : this.props.notificationMaxWidth
          }
        }
      />
    );
  }
}