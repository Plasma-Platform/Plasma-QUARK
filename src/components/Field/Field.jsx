import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from '../Icon';

import './Field.pcss';
import ucfirst from '../../utils';

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
  };

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
  };

  state = {
    isEmpty: !(this.props.value || this.props.defaultValue),
    isDirty: false,
    fieldType: this.props.type,
  };

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
  };

  resetPasswordFieldType = (event) => {
    event.preventDefault();

    this.setState(() => ({
      fieldType: 'password',
    }));
  };

  focus = () => {
    if (this.input) {
      this.input.focus();
    }
  };

  blur = () => {
    if (this.input) {
      this.input.blur();
    }
  };

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
  };

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
    const containerSizeClassName = ` TMField--size${ucfirst(size)}`;

    const inputSizeClassName = ` TMField__input--size${ucfirst(size)}`;
    const inputValidClassName = valid ? ' TMField__input--valid' : '';
    const inputInvalidClassName = invalid ? ' TMField__input--invalid' : '';
    const inputStateClassName = this.state.isEmpty ? ' TMField__input--empty' : ' TMField__input--filled';
    const inputDirtyClassName = this.state.isDirty ? ' TMField__input--dirty' : '';
    const inputCustomClassName = className ? ` ${className}` : '';

    const fieldTypeIcon = showInputIcon && (type === 'password' || type === 'search' || type === 'email')
      ? type
      : null;
    const fieldIcon = showInputIcon && !!icon
      ? icon
      : fieldTypeIcon;

    const inputHasIconClassName = fieldIcon ? ' TMField__input--withIcon' : '';

    return (
      <label
        className={`TMField${containerSizeClassName}${containerCustomClassName}`}
        id={containerId}
        name={containerName}
      >
        <input
          {...inputProps}
          className={`TMField__input${disabled ? '' : `${inputValidClassName}${inputInvalidClassName}`}${inputSizeClassName}${showPlaceholderOnInput ? ' TMField__input--withLabel' : ''}${inputStateClassName}${inputDirtyClassName}${inputHasIconClassName}${inputCustomClassName}`}
          type={this.state.fieldType}
          placeholder={placeholder}
          value={!value && value !== '' ? undefined : value}
          defaultValue={!value && value !== '' ? defaultValue : undefined}
          onChange={this.handleInputChange}
          disabled={disabled}
          ref={(ref) => { this.input = ref; }}
        />

        {showPlaceholderOnInput && placeholder && (
          <span className="TMField__label">{placeholder}</span>
        )}

        {fieldIcon && (
          <Icon
            className="TMField__icon TMField__icon--typeFieldType"
            icon={fieldIcon}
            width={20}
            height={20}
          />
        )}

        {!disabled && (
          valid && (
            <i className="TMField__icon TMField__icon--typeValidationStatus TMField__icon--check" />
          ) && invalid && (
            <i className="TMField__icon TMField__icon--typeValidationStatus TMField__icon--warning" />
          )
        )}

        {!disabled && type === 'password' && showPasswordFieldTypeToggle && (
          <i
            className="TMField__icon TMField__icon--typeFieldTypeToggle TMField__iconEye"
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
