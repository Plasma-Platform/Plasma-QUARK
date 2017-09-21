import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Textarea.less';

export default class Textarea extends Component {
  static propTypes = {
    containerClassName: PropTypes.string,
    containerId: PropTypes.string,
    containerName: PropTypes.string,
    size: PropTypes.oneOf(['medium', 'large']).isRequired,
    showTextareaIcon: PropTypes.bool,
    icon: PropTypes.string,
    className: PropTypes.string,
    focused: PropTypes.bool,
    onChange: PropTypes.func,
    valid: PropTypes.bool,
    invalid: PropTypes.bool,
    children: PropTypes.node,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    maxLength: PropTypes.number,
    showSymbolsCounter: PropTypes.bool,
    placeholder: PropTypes.node,
    disabled: PropTypes.bool,
    type: PropTypes.string,
  }

  static defaultProps = {
    focused: false,
    containerClassName: '',
    containerId: null,
    containerName: null,
    disabled: false,
    showTextareaIcon: false,
    icon: null,
    className: '',
    onChange: null,
    valid: false,
    invalid: false,
    children: null,
    value: null,
    defaultValue: null,
    maxLength: null,
    showSymbolsCounter: false,
    placeholder: null,
    type: null,
  }

  state = {
    isEmpty: !(this.props.value || this.props.defaultValue),
    isDirty: false,
    symbolsCount: this.props.maxLength
      ? (this.props.value || this.props.defaultValue || '').length
      : 0,
  }

  componentDidMount() {
    if (this.props.focused) {
      this.focus();
    }

    this.input.style.height = 'auto';
    this.input.style.height = `${this.input.scrollHeight}px`;
  }

  componentWillReceiveProps(nextProps) {
    const {
      value: nextValue,
      focused: nextFocused,
    } = nextProps;

    const {
      value: currentValue,
      focused: currentFocused,
    } = this.props;

    const isEmpty = (
      !nextValue && !!currentValue
    ) || (
        !nextValue && !currentValue && this.input.value.length === 0
      );

    const isNeedToBeFocued = nextFocused && !currentFocused;

    const currentSymbolsCount = currentValue ? 0 : this.input.value.length;
    const symbolsCount = nextValue ? nextValue.length : currentSymbolsCount;

    this.setState(() => ({
      isEmpty,
      symbolsCount,
    }), () => {
      this.input.style.height = 'auto';
      this.input.style.height = `${this.input.scrollHeight}px`;

      if (isNeedToBeFocued) {
        this.focus();
      }
    });
  }

  focus = () => {
    if (this.input) {
      this.input.focus();
    }
  }

  blur = () => {
    if (this.input) {
      this.input.blur();
    }
  }

  handleInputChange = (event) => {
    event.persist();

    const inputValue = event.target.value;

    const lineBreacks = inputValue.match(/(\r\n|\n|\r)/g);
    const lineBreacksCount = lineBreacks ? lineBreacks.length : 0;

    this.setState({
      symbolsCount: inputValue.length + lineBreacksCount,
      isEmpty: inputValue.length === 0,
      isDirty: true,
    }, () => {
      this.input.style.height = 'auto';
      this.input.style.height = `${this.input.scrollHeight}px`;
      this.props.onChange(inputValue, event);
    });
  }

  render() {
    const {
      containerClassName,
      containerId,
      containerName,
      size,
      showTextareaIcon,
      icon,
      className,
      focused,
      valid,
      invalid,
      showSymbolsCounter,
      value,
      placeholder,
      defaultValue,
      maxLength,
      disabled,
      type,
      children,
      ...inputProps
    } = this.props;

    const containerCustomClassName = containerClassName ? ` ${containerClassName}` : '';
    const containerSizeClassName = ` tm-quark-textarea_size_${size}`;

    const inputSizeClassName = ` tm-quark-textarea__input_size_${size}`;
    const inputValidClassName = valid ? ' tm-quark-textarea__input_valid' : '';
    const inputInvalidClassName = invalid ? ' tm-quark-textarea__input_invalid' : '';
    const inputStateClassName = this.state.isEmpty ? ' tm-quark-textarea__input_empty' : ' tm-quark-textarea__input_filled';
    const inputDirtyClassName = this.state.isDirty ? ' tm-quark-textarea__input_dirty' : '';
    const inputCustomClassName = className ? ` ${className}` : '';

    const fieldTypeIcon = showTextareaIcon && (type === 'password' || type === 'search' || type === 'email')
      ? type
      : null;
    const fieldIcon = showTextareaIcon && !!icon
      ? icon
      : fieldTypeIcon;

    const inputHasIconClassName = fieldIcon ? ' tm-quark-textarea__input_with-icon' : '';

    return (
      <label
        className={`tm-quark-textarea${containerSizeClassName}${containerCustomClassName}`}
        id={containerId || null}
        name={containerName || null}
      >
        <div className="tm-quark-textarea__inner">
          <textarea
            {...inputProps}
            maxLength={maxLength}
            placeholder={placeholder}
            disabled={disabled}
            value={!value && value !== '' ? undefined : value}
            defaultValue={!value && value !== '' ? defaultValue : undefined}
            className={`tm-quark-textarea__input${disabled ? '' : `${inputValidClassName}${inputInvalidClassName}`}${inputSizeClassName}${inputStateClassName}${inputDirtyClassName}${inputHasIconClassName}${inputCustomClassName}`}
            onChange={this.handleInputChange}
            ref={(ref) => { this.input = ref; }}
          />

          <span className="tm-quark-textarea__label">{placeholder}</span>

          {fieldIcon && (
            <i className={`tm-quark-textarea__icon tm-quark-textarea__icon_type_field-type tm-quark-textarea__icon_${fieldIcon}`} />
          )}

          {showSymbolsCounter && maxLength && (
            <span className="tm-quark-textarea__symbols-counter">{parseInt(maxLength, 10) - this.state.symbolsCount}</span>
          )}

          {disabled !== true && (
            valid ? (
              <i className="tm-quark-textarea__icon tm-quark-textarea__icon_type_validation-status tm-quark-textarea__icon_check" />
            ) : (
              invalid && (
                <i className="tm-quark-textarea__icon tm-quark-textarea__icon_type_validation-status tm-quark-textarea__icon_warning" />
              )
            )
          )}
        </div>

        {children}
      </label>
    );
  }
}
