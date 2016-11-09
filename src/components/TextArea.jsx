import React, {Component, PropTypes}  from 'react';
import classnames from 'classnames';
import Textarea from 'react-textarea-autosize';

import './AbstractField.less';
import './TextArea.less';

export default class TextArea extends Component {

  static propTypes = {
    id           : PropTypes.string,
    sizeType     : PropTypes.oneOf(['TA1', 'TA2', 'TA3', 'TA4', 'TA5', 'TA6', 'TA7', 'TA8']).isRequired,
    placeholder  : PropTypes.string,
    className    : PropTypes.string,
    value        : PropTypes.string,
    disabled     : PropTypes.bool,
    filled       : PropTypes.bool,
    animated     : PropTypes.bool,
    limitCounter : PropTypes.number,
    onBlur       : PropTypes.func,
    onFocus      : PropTypes.func,
    onChange     : PropTypes.func,
    onValidate   : PropTypes.func,
    label        : PropTypes.string,
    customIcon   : PropTypes.string
  };

  render () {
    const textAreaWrapClassname = classnames(`abstract-field text-area text-area_${this.props.sizeType.toLowerCase()}`, this.props.className, {
      'text-area_filled'   : this.props.filled,
      'text-area_focused'  : this.props.focused,
      'text-area_valid'    : this.props.isValid,
      'text-area_disabled' : this.props.disabled,
      'text-area_invalid'  : (this.props.isValid !== null) && !this.props.isValid,
      'animated'           : this.props.animated
    });

    const textAreaClassname = 'text-area__input';
    const labelClassname = 'text-area__label';
    const customIcon = this.props.customIcon;
    const iconClassname = classnames('text-area__type-icon', 'icon', {
      'icon-letter'    : !customIcon && this.props.type === 'email',
      'icon-magnifier' : !customIcon && this.props.type === 'search',
      'icon-key'       : !customIcon && this.props.type === 'password',
      [customIcon]     : customIcon
    });

    const iconNotificationClassname = classnames('text-area__notification-icon', 'icon', {
      'icon-alert'        : this.props.isValid !== null && !this.props.isValid,
      'icon-check_circle' : this.props.isValid
    });

    return (
      <div
        className={textAreaWrapClassname}
        onFocus={this.props.onFocus}
        onBlur={this.props.onBlur}
      >
        {['TA2', 'TA4', 'TA6', 'TA8'].indexOf(this.props.sizeType) >= 0 &&
        <span className={ iconClassname }/>
        }

        <Textarea
          ref={ textareaInput => this.input = textareaInput }
          id={this.props.id}
          className={textAreaClassname}
          disabled={this.props.disabled}
          onChange={this.props.onChange}
          maxLength={this.props.maxLength}
          minRows={3}
          maxRows={15}
          value={this.props.value}
        />

        <label
          className={labelClassname}
          htmlFor={this.props.id}
        >
          { this.props.label || this.props.placeholder}
        </label>

        <span className={ iconNotificationClassname }/>

        {this.props.maxLength
          ? <div className={`text-area__limit
                        ${!this.props.disabled && (this.props.value || this.props.filled)
          ? 'text-area__limit--active'
          : ''}`}
        >
          {this.props.limitCounter}
        </div>
          : null
        }
      </div>
    );
  }
}
