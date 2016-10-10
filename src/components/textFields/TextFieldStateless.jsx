import React, {Component, PropTypes}  from 'react';
import classnames                     from 'classnames';

import '../TextField.less';

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
  }

  render() {

    const inputWrapClassname = classnames(`text-field text-field_${this.props.sizeType}`, this.props.className, {
      'text-field_filled'   : this.props.filled,
      'text-field_focused'  : this.props.focused,
      'text-field_valid'    : this.props.isValid,
      'text-field_invalid'  : (this.props.isValid !== null) && !this.props.isValid,
      'animated'            : this.props.animated
    });
    const inputClassname = 'text-field__input';
    const labelClassname = 'text-field__label';
    const iconClassname = classnames('text-field__type-icon', 'icon', {
      'icon-letter'     : this.props.type === 'email',
      'icon-magnifier'  : this.props.type === 'search',
      'icon-eye'        : this.props.type === 'password'
    });
    const iconNotificationClassname = classnames('text-field__notification-icon', 'icon', {
      'icon-alert'        : this.props.isValid !== null && !this.props.isValid,
      'icon-check_circle' : this.props.isValid
    });

    const hint = this.props.placeholder || this.props.label;

    return (
      <div
        className={inputWrapClassname}
      >
        {['F2', 'F4'].indexOf(this.props.sizeType) >= 0 &&
          <span className = { iconClassname }/>
        }

        <input
          ref         = { input => this.input = input }
          id          = {this.props.id}
          type        = {this.props.type || 'text'}
          value       = {this.props.value}
          autoFocus   = {this.props.autoFocus}
          placeholder = {['F1', 'F2'].indexOf(this.props.sizeType) >= 0 ? hint : ''}
          className   = {inputClassname}
          disabled    = {this.props.disabled}
          onChange    = {this.props.onChange}
          onFocus     = {this.props.onFocus}
          onBlur      = {this.props.onBlur}
          onKeyUp     = {this.props.onKeyUp}
        />
        <span className={ iconNotificationClassname }/>
        { ['F3', 'F4'].indexOf(this.props.sizeType) >= 0 &&
          <label
            className = {labelClassname}
            htmlFor   = {this.props.id}
          >
            {this.props.label || this.props.placeholder}
          </label>
        }
      </div>
    );
  }
}
