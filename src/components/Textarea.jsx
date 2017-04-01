import React, {Component, PropTypes} from 'react';
// import notifications                 from './notifications/';

import './Textarea.less';

export default class Textarea extends Component {
  static propTypes = {
    containerClassName : PropTypes.string,
    containerId        : PropTypes.string,
    containerName      : PropTypes.string,
    size               : PropTypes.oneOf(['medium', 'large']).isRequired,
    showTextareaIcon   : PropTypes.bool,
    icon               : PropTypes.string,
    className          : PropTypes.string,
    focused            : PropTypes.bool,
    onChange           : PropTypes.func,
    valid              : PropTypes.bool,
    invalid            : PropTypes.bool,
    errorMessage       : PropTypes.object
  }

  static defaultProps = {
    focused: false
  }

  state = {
    isEmpty      : this.props.value ? this.props.value.length === 0 : this.props.defaultValue ? this.props.defaultValue.length === 0 : true,
    isDirty      : false,
    symbolsCount : this.props.maxLength ? this.props.value ? this.props.maxLength - this.props.value.length : this.props.defaultValue ? this.props.maxLength - this.props.defaultValue.length : 0 : 0
  }

  constructor (props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  focus () {
    this.input && this.input.focus();
  }

  blur () {
    this.input && this.input.blur();
  }

  handleInputChange (event) {
    event.persist();

    const inputValue = event.target.value;

    const lineBreacks      = inputValue.match(/(\r\n|\n|\r)/g);
    const lineBreacksCount = lineBreacks ? lineBreacks.length : 0;

    this.setState({
      symbolsCount : inputValue.length + lineBreacksCount,
      isEmpty      : inputValue.length === 0,
      isDirty      : true
    }, () => {
      this.input.style.height = 'auto';
      this.input.style.height = `${this.input.scrollHeight}px`;
      this.props.onChange && this.props.onChange(inputValue, event);
    });
  }

  componentDidMount () {
    this.props.focused && this.focus();

    this.input.style.height = 'auto';
    this.input.style.height = `${this.input.scrollHeight}px`;
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      isEmpty      : nextProps.value ? false : this.props.value ? true : this.input.value.length === 0,
      symbolsCount : nextProps.value ? nextProps.value.length : this.props.value ? 0 : this.input.value.length
    }, () => {
      this.input.style.height = 'auto';
      this.input.style.height = `${this.input.scrollHeight}px`;
    });
  }

  render () {
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
      errorMessage,
      showSymbolsCounter,
      ...inputProps
    } = this.props;

    const containerCustomClassName = containerClassName ? ` ${containerClassName}` : '';
    const containerSizeClassName   = ` tm-quark-textarea_size_${size}`;

    const inputSizeClassName       = ` tm-quark-textarea__input_size_${size}`;
    const inputValidClassName      = valid   ? ' tm-quark-textarea__input_valid'   : '';
    const inputInvalidClassName    = invalid ? ' tm-quark-textarea__input_invalid' : '';
    const inputStateClassName      = this.state.isEmpty ? ' tm-quark-textarea__input_empty' : ' tm-quark-textarea__input_filled';
    const inputDirtyClassName      = this.state.isDirty ? ' tm-quark-textarea__input_dirty' : '';
    const inputCustomClassName     = className ? ` ${className}` : '';

    const fieldIcon                = showTextareaIcon && icon ? icon : showTextareaIcon && (showTextareaIcon && (inputProps.type === 'password' || inputProps.type === 'search' || inputProps.type === 'email')) ? inputProps.type : null;

    const inputHasIconClassName    = fieldIcon ? ' tm-quark-textarea__input_with-icon' : '';

    // const FieldErrorMessage        = errorMessage && errorMessage.type ? notifications[errorMessage.type] : null;

    return (
      <label
        className = {`tm-quark-textarea${containerSizeClassName}${containerCustomClassName}`}
        id        = {containerId   || null}
        name      = {containerName || null}
      >
        <div className="tm-quark-textarea__inner">
          <textarea
            {...inputProps}
            className = {`tm-quark-textarea__input${inputProps.disabled ? '' : `${inputValidClassName}${inputInvalidClassName}`}${inputSizeClassName}${inputStateClassName}${inputDirtyClassName}${inputHasIconClassName}${inputCustomClassName}`}
            onChange  = {this.handleInputChange}
            ref       = {(ref) => { this.input = ref; }}
          >
          </textarea>

          <span className="tm-quark-textarea__label">{inputProps.placeholder || null}</span>

          {fieldIcon && (
            <i className={`tm-quark-textarea__icon tm-quark-textarea__icon_type_field-type tm-quark-textarea__icon_${fieldIcon}`}></i>
          )}

          {showSymbolsCounter && inputProps.maxLength && (
            <span className="tm-quark-textarea__symbols-counter">{parseInt(inputProps.maxLength) - this.state.symbolsCount}</span>
          )}

          {inputProps.disabled !== true && (
            valid ? (
              <i className="tm-quark-textarea__icon tm-quark-textarea__icon_type_validation-status tm-quark-textarea__icon_check"></i>
            ) : (
              invalid ? (
                <i className="tm-quark-textarea__icon tm-quark-textarea__icon_type_validation-status tm-quark-textarea__icon_warning"></i>
              ) : (
                null
              )
            )
          )}
        </div>

        {/* {inputProps.disabled !== true && FieldErrorMessage && (
          <FieldErrorMessage
            show               = {invalid}
            hideOnClickOutside = {false}
          >
            {errorMessage.content || null}
          </FieldErrorMessage>
        )} */}
      </label>
    );
  }
}
