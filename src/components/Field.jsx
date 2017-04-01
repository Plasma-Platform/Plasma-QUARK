import React, {Component, PropTypes} from 'react';
import notifications                 from './notifications/';

import './Field.less';

export default class Field extends Component {
  static propTypes = {
    containerClassName          : PropTypes.string,
    containerId                 : PropTypes.string,
    containerName               : PropTypes.string,
    size                        : PropTypes.oneOf(['medium', 'large']).isRequired,
    showInputIcon               : PropTypes.bool,
    icon                        : PropTypes.string,
    className                   : PropTypes.string,
    focused                     : PropTypes.bool,
    showPlaceholderOnInput      : PropTypes.bool,
    onChange                    : PropTypes.func,
    valid                       : PropTypes.bool,
    invalid                     : PropTypes.bool,
    children                    : PropTypes.object,
    showPasswordFieldTypeToggle : PropTypes.bool,
    fieldTypeToggleHint         : PropTypes.object,
    errorMessage                : PropTypes.object
  }

  static defaultProps = {
    showPlaceholderOnInput : false,
    focused                : false,
    type                   : 'text',
    errorMessage           : {}
  }

  state = {
    isEmpty   : this.props.value ? this.props.value.length === 0 : this.props.defaultValue ? this.props.defaultValue.length === 0 : true,
    isDirty   : false,
    fieldType : this.props.type
  }

  constructor (props) {
    super(props);

    this.handleInputChange          = this.handleInputChange.bind(this);
    this.setPasswordFieldTypeToText = this.setPasswordFieldTypeToText.bind(this);
    this.resetPasswordFieldType     = this.resetPasswordFieldType.bind(this);
  }

  focus () {
    this.input && this.input.focus();
  }

  blur () {
    this.input && this.input.blur();
  }

  handleInputChange (event) {
    const inputValue = event.target.value;

    this.setState({
      isEmpty : inputValue.length === 0,
      isDirty : true
    }, () => {
      this.props.onChange && this.props.onChange(inputValue);
    });
  }

  setPasswordFieldTypeToText (event) {
    event.preventDefault();

    this.setState({
      fieldType: 'text'
    });
  }

  resetPasswordFieldType (event) {
    event.preventDefault();

    this.setState({
      fieldType: 'password'
    });
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      isEmpty: nextProps.value ? false : this.props.value ? true : this.input.value.length === 0
    });
  }

  componentDidMount () {
    this.props.focused && this.focus();
  }

  render () {
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
      errorMessage,
      focused,
      ...inputProps
    } = this.props;

    const containerCustomClassName = containerClassName ? ` ${containerClassName}` : '';
    const containerSizeClassName   = ` tm-quark-field_size_${size}`;

    const inputSizeClassName       = ` tm-quark-field__input_size_${size}`;
    const inputValidClassName      = valid   ? ' tm-quark-field__input_valid'   : '';
    const inputInvalidClassName    = invalid ? ' tm-quark-field__input_invalid' : '';
    const inputStateClassName      = this.state.isEmpty ? ' tm-quark-field__input_empty' : ' tm-quark-field__input_filled';
    const inputDirtyClassName      = this.state.isDirty ? ' tm-quark-field__input_dirty' : '';
    const inputCustomClassName     = className ? ` ${className}` : '';

    const fieldIcon                = showInputIcon && icon ? icon : showInputIcon && (showInputIcon && (inputProps.type === 'password' || inputProps.type === 'search' || inputProps.type === 'email')) ? inputProps.type : null;

    const inputHasIconClassName    = fieldIcon ? ' tm-quark-field__input_with-icon' : '';

    const FieldErrorMessage        = errorMessage && errorMessage.type ? notifications[errorMessage.type] : null;

    if (errorMessage.content) {
      this.errorMessageContent = errorMessage.content;
    }

    return (
      <label
        className = {`tm-quark-field${containerSizeClassName}${containerCustomClassName}`}
        id        = {containerId   || null}
        name      = {containerName || null}
      >
        <input
          {...inputProps}
          className    = {`tm-quark-field__input${inputProps.disabled ? '' : `${inputValidClassName}${inputInvalidClassName}`}${inputSizeClassName}${showPlaceholderOnInput ? ' tm-quark-field__input_with-label' : ''}${inputStateClassName}${inputDirtyClassName}${inputHasIconClassName}${inputCustomClassName}`}
          type         = {this.state.fieldType}
          onChange     = {this.handleInputChange}
          ref          = {(ref) => { this.input = ref; }}
        />

        {showPlaceholderOnInput && inputProps.placeholder && (
          <span className="tm-quark-field__label">{inputProps.placeholder}</span>
        )}

        {fieldIcon && (
          <i className={`tm-quark-field__icon tm-quark-field__icon_type_field-type tm-quark-field__icon_${fieldIcon}`}></i>
        )}

        {inputProps.disabled !== true && (
          valid ? (
            <i className="tm-quark-field__icon tm-quark-field__icon_type_validation-status tm-quark-field__icon_check"></i>
          ) : (
            invalid ? (
              <i className="tm-quark-field__icon tm-quark-field__icon_type_validation-status tm-quark-field__icon_warning"></i>
            ) : (
              null
            )
          )
        )}

        {inputProps.disabled !== true && inputProps.type === 'password' && showPasswordFieldTypeToggle && (
          <i
            className   = "tm-quark-field__icon tm-quark-field__icon_type_field-type-toggle tm-quark-field__icon_eye"
            onMouseDown   = {this.setPasswordFieldTypeToText}
            onMouseUp     = {this.resetPasswordFieldType}
            onMouseOut    = {this.resetPasswordFieldType}
            onTouchStart  = {this.setPasswordFieldTypeToText}
            onTouchEnd    = {this.resetPasswordFieldType}
            onTouchCancel = {this.resetPasswordFieldType}
          >
            {fieldTypeToggleHint || null}
          </i>
        )}

        {inputProps.disabled !== true && FieldErrorMessage && (
          <FieldErrorMessage
            show               = {invalid}
            hideOnClickOutside = {false}
          >
            {this.errorMessageContent || null}
          </FieldErrorMessage>
        )}
      </label>
    );
  }
}
