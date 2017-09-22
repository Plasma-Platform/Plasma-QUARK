import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './Field.less';

export default class Field extends Component {
  static propTypes = {
    containerClassName: PropTypes.string,
    containerId: PropTypes.string,
    containerName: PropTypes.string,
    size: PropTypes.oneOf(['medium', 'large']).isRequired,
    showInputIcon: PropTypes.bool,
    icon: PropTypes.string,
    className: PropTypes.string,
    focused: PropTypes.bool,
    showPlaceholderOnInput: PropTypes.bool,
    onChange: PropTypes.func,
    valid: PropTypes.bool,
    invalid: PropTypes.bool,
    children: PropTypes.node,
    showPasswordFieldTypeToggle: PropTypes.bool,
    fieldTypeToggleHint: PropTypes.node,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    placeholder: PropTypes.node,
  }

  static defaultProps = {
    containerClassName: '',
    containerId: null,
    containerName: null,
    showInputIcon: false,
    icon: null,
    className: '',
    focused: false,
    showPlaceholderOnInput: false,
    onChange: () => {},
    valid: false,
    invalid: false,
    children: null,
    type: 'text',
    showPasswordFieldTypeToggle: false,
    fieldTypeToggleHint: null,
    value: null,
    defaultValue: '',
    placeholder: null,
    disabled: false,
  }

  state = {
    isEmpty: !(this.props.value || this.props.defaultValue),
    isDirty: false,
    fieldType: this.props.type,
  }

  componentDidMount() {
    const { focused } = this.props;

    if (focused) {
      this.focus();
    }
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

    this.setState(() => ({
      isEmpty,
    }), isNeedToBeFocued ? this.focus : null);
  }

  setPasswordFieldTypeToText = (event) => {
    event.preventDefault();

    this.setState(() => ({
      fieldType: 'text',
    }));
  }

  resetPasswordFieldType = (event) => {
    event.preventDefault();

    this.setState(() => ({
      fieldType: 'password',
    }));
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

    const { onChange } = this.props;
    const inputValue = event.target.value;

    this.setState(() => ({
      isEmpty: inputValue.length === 0,
      isDirty: true,
    }), () => {
      onChange(inputValue, event);
    });
  }

  render() {
    const {
      containerClassName,
      containerId,
      containerName,
      size,
      showInputIcon,
      icon,
      className,
      showPlaceholderOnInput,
      valid,
      invalid,
      showPasswordFieldTypeToggle,
      fieldTypeToggleHint,
      children,
      focused,
      value,
      defaultValue,
      type,
      disabled,
      placeholder,
      ...inputProps
    } = this.props;

    const containerCustomClassName = containerClassName ? ` ${containerClassName}` : '';
    const containerSizeClassName = ` tm-quark-field_size_${size}`;

    const inputSizeClassName = ` tm-quark-field__input_size_${size}`;
    const inputValidClassName = valid ? ' tm-quark-field__input_valid' : '';
    const inputInvalidClassName = invalid ? ' tm-quark-field__input_invalid' : '';
    const inputStateClassName = this.state.isEmpty ? ' tm-quark-field__input_empty' : ' tm-quark-field__input_filled';
    const inputDirtyClassName = this.state.isDirty ? ' tm-quark-field__input_dirty' : '';
    const inputCustomClassName = className ? ` ${className}` : '';

    const fieldTypeIcon = showInputIcon && (type === 'password' || type === 'search' || type === 'email')
      ? type
      : null;
    const fieldIcon = showInputIcon && !!icon
      ? icon
      : fieldTypeIcon;

    const inputHasIconClassName = fieldIcon ? ' tm-quark-field__input_with-icon' : '';

    return (
      <label
        className={`tm-quark-field${containerSizeClassName}${containerCustomClassName}`}
        id={containerId}
        name={containerName}
      >
        <input
          {...inputProps}
          className={`tm-quark-field__input${disabled ? '' : `${inputValidClassName}${inputInvalidClassName}`}${inputSizeClassName}${showPlaceholderOnInput ? ' tm-quark-field__input_with-label' : ''}${inputStateClassName}${inputDirtyClassName}${inputHasIconClassName}${inputCustomClassName}`}
          type={this.state.fieldType}
          placeholder={placeholder}
          value={!value && value !== '' ? undefined : value}
          defaultValue={!value && value !== '' ? defaultValue : undefined}
          onChange={this.handleInputChange}
          disabled={disabled}
          ref={(ref) => { this.input = ref; }}
        />

        {showPlaceholderOnInput && placeholder && (
          <span className="tm-quark-field__label">{placeholder}</span>
        )}

        {fieldIcon && (
          <i className={`tm-quark-field__icon tm-quark-field__icon_type_field-type tm-quark-field__icon_${fieldIcon}`} />
        )}

        {!disabled && (
          valid && (
            <i className="tm-quark-field__icon tm-quark-field__icon_type_validation-status tm-quark-field__icon_check" />
          ) && invalid && (
            <i className="tm-quark-field__icon tm-quark-field__icon_type_validation-status tm-quark-field__icon_warning" />
          )
        )}

        {!disabled && type === 'password' && showPasswordFieldTypeToggle && (
          <i
            className="tm-quark-field__icon tm-quark-field__icon_type_field-type-toggle tm-quark-field__icon_eye"
            onMouseDown={this.setPasswordFieldTypeToText}
            onMouseUp={this.resetPasswordFieldType}
            onMouseOut={this.resetPasswordFieldType}
            onTouchStart={this.setPasswordFieldTypeToText}
            onTouchEnd={this.resetPasswordFieldType}
            onTouchCancel={this.resetPasswordFieldType}
            role="presentation"
          >
            {fieldTypeToggleHint || null}
          </i>
        )}

        {children}
      </label>
    );
  }
}
