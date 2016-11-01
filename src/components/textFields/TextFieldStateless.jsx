import React, {Component}  from 'react';
import classnames                     from 'classnames';
import {connectNotificationTrigger} from '../utils/.';

import '../TextField.less';

export class EyePasswordIndicator extends Component {
  render () {
    return (
      <span
        {...this.props}
        className = 'text-field__notification-icon icon password-toggle icon-eye'
      />
    );
  }
}

export default class TextField extends Component {
  constructor () {
    super();
    this.showTooltip = this.showTooltip.bind(this);
    this.hidePasswordAndTooltip = this.hidePasswordAndTooltip.bind(this);
  }

  static propTypes = {
    id          : React.PropTypes.string,
    sizeType    : React.PropTypes.oneOf(['F1', 'F2', 'F3', 'F4']).isRequired,
    placeholder : React.PropTypes.string,
    value       : React.PropTypes.string,
    disabled    : React.PropTypes.bool
  }

  showTooltip () {
    this.icon.showNotification();
  }

  hidePasswordAndTooltip () {
    this.icon.hideNotification();
    this.props.changeFieldType('password');
  }

  render () {
    const inputWrapClassname = classnames(`text-field text-field_${this.props.sizeType}`, this.props.className, {
      'text-field_filled'   : this.props.filled,
      'text-field_focused'  : this.props.focused,
      'text-field_valid'    : this.props.isValid,
      'text-field_disabled' : this.props.disabled,
      'text-field_invalid'  : (this.props.isValid !== null) && !this.props.isValid,
      'animated'            : this.props.animated
    });
    const inputClassname = 'text-field__input';
    const labelClassname = 'text-field__label';
    const iconClassname = classnames('text-field__type-icon', 'icon', {
      'icon-letter'    : this.props.type === 'email',
      'icon-magnifier' : this.props.type === 'search',
      'icon-key'       : this.props.type === 'password'
    });
    const isPassword = this.props.type === 'password';
    const iconNotificationClassname = classnames('text-field__notification-icon', 'icon', {
      'icon-alert'        : this.props.isValid !== null && !this.props.isValid,
      'icon-check_circle' : this.props.isValid
    });

    const hint = this.props.placeholder || this.props.label;
    const EyePasswordIndicatorWrapper = connectNotificationTrigger(EyePasswordIndicator);

    return (
      <div
        className={inputWrapClassname}
      >
        {['F2', 'F4'].indexOf(this.props.sizeType) >= 0 &&
          <span className = {iconClassname} />
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
          onKeyDown   = {this.props.onKeyDown}
        />
        {isPassword
          ? <div>
              <span className     = { iconNotificationClassname }/>
              <EyePasswordIndicatorWrapper
                ref             = {c => this.icon = c}
                notification    = {{code: this.props.eyeNotificationCode || 'N1C', text: this.props.eyeNotificationText || 'Hold to show password'}}
                notificationAlt = {{ status: false }}
                onMouseOver     = {this.showTooltip}
                onMouseLeave    = {this.hidePasswordAndTooltip}
                onMouseDown     = {this.props.changeFieldType.bind(this, 'text')}
                onMouseUp       = {this.props.changeFieldType.bind(this, 'password')}
              />
            </div>
          : <span className     = { iconNotificationClassname } />

        }

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
