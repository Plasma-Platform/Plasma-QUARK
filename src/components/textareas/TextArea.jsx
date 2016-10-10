import React, {Component, PropTypes}  from 'react';
import N2B                            from 'ui-toolkit/lib/notifications/N2B';
import TextareaStateless              from './TextAreaStateless.jsx';
import {connectNotificationTextField} from '../utils';

import './TextArea.less';

export default class TextArea extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      value: props.value || '',
      limitCounter: 0,
      fieldFilled: !!props.value,
      inFocus: false,
      isValid: null,
      notificationtext: this.props.notificationText || ''
    }
  }

  getValue = () => {
    return this.state.value;
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value !== this.props.value) {
      this.setState({
        value: nextProps.value,
        fieldFilled: true
      });
    }
  }

  setValidationStatus = (status, notificationText) => {
    this.handleValidation({status, notificationText});
  }

  onChange = (e) => {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(e);
    }

    this.setState({
      value: this.comp.input.target.textareaInput.value
    });

    this.zeroingInputCounter();
  }

  onFocus = (e) => {
    this.setState({
      isValid: null,
      notificationText: '',
      fieldFilled: true,
      inFocus: true
    });
  }

  onBlur = (callback, e) => {
    // обрезаем пробелы по краям введенного значения
    if (this.state.value) {
      this.setState({
        value: this.state.value.trim()
      });
    }

    if (!this.state.value) {
      this.setState({
        fieldFilled: false
      });
    }

    // сбрасываем статус, что курсор юзера находится в поле
    this.setState({
      inFocus: false
    });

    if (typeof this.props.onValidate === 'function') {
      this.props.onValidate().then((data) => {
        this.handleValidation(data);
        callback();
      });
    }
  }

  handleValidation = (data) => {
    this.setState({
      isValid: data.status,
      notificationText: data.message
    });
  }

  // приводим к нулю, возможные отрицательные значения, которые появляются в счетчике
  // при монтировании компонента с заполненным значением, превышающим установвленный лимит
  zeroingInputCounter = () => {
    let textareaElement = this.comp.input.target.textareaInput;

    if (textareaElement.value === 0) {
      return;
    }

    let currentValue = this.props.maxLength - (textareaElement ? textareaElement.value.length : 0),
      currentMaxValue = Math.max(0, currentValue);

    this.setState({
      limitCounter: currentMaxValue
    });
  }

  component = this.component || connectNotificationTextField(TextareaStateless);

  render() {
    const DecoratedTextAreaField = this.component;

    return (
      <DecoratedTextAreaField
        ref={ comp => this.comp = comp }
        id={this.props.id}
        fieldType={this.props.fieldType}
        type={this.props.type}
        label={this.props.label}
        className={this.props.className}
        disabled={this.props.disabled}
        onChange={this.onChange}
        maxLength={this.props.maxLength}
        limitCounter={this.state.limitCounter}
        value={this.state.value}
        isValid={this.state.isValid}
        fieldFilled={this.state.fieldFilled}
        onFocus={this.onFocus}
        inFocus={this.state.inFocus}
        onBlur={this.onBlur}
        notification={ {code: 'N2B', text: this.state.notificationText} }
      />
    );
  }
}
