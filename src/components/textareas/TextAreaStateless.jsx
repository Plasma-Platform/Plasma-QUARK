import React, {Component, PropTypes}  from 'react';
import classnames from 'classnames';
import Textarea from 'react-textarea-autosize';

import './TextArea.less';

export default class TextAreaStateless extends Component {

  static propTypes = {
    id           : PropTypes.string.isRequired,
    fieldType    : PropTypes.oneOf(['TA1', 'TA2', 'TA3', 'TA4', 'TA5', 'TA6', 'TA7', 'TA8']).isRequired,
    placeholder  : PropTypes.string,
    className    : PropTypes.string,
    value        : PropTypes.string,
    disabled     : PropTypes.bool,
    fieldFilled  : PropTypes.bool,
    limitCounter : PropTypes.number,
    onBlur       : PropTypes.func,
    onFocus      : PropTypes.func,
    onChange     : PropTypes.func,
    onValidate   : PropTypes.func,
    label        : PropTypes.string
  };

  render () {
    const textAreaWrapClassname = classnames(`TextArea_wrapper TextArea_${this.props.fieldType}`, this.props.className, {
      'TextArea_fieldFilled' : this.props.fieldFilled,
      'TextArea_inFocus'     : this.props.inFocus,
      'TextArea_valid'       : this.props.isValid,
      'TextArea_invalid'     : (this.props.isValid !== null) && !this.props.isValid
    });

    const textAreaClassname = 'TextArea TextArea__input';
    const labelClassname = 'TextArea__label';

    const iconClassname = classnames('TextArea__type-icon', 'icon', {
      'icon-letter'    : this.props.type === 'email',
      'icon-magnifier' : this.props.type === 'search',
      'icon-eye'       : this.props.type === 'password'
    });

    const iconNotificationClassname = classnames('TextArea__notification-icon', 'icon', {
      'icon-alert'        : this.props.isValid !== null && !this.props.isValid,
      'icon-check_circle' : this.props.isValid
    });

    return (
      <div
        className={textAreaWrapClassname}
        onFocus={this.props.onFocus}
        onBlur={this.props.onBlur}
      >
        {['TA2', 'TA4', 'TA6', 'TA8'].indexOf(this.props.fieldType) >= 0 &&
        <span className={ iconClassname }/>
        }

        <Textarea
          ref={ textareaInput => this.textareaInput = textareaInput }
          id={this.props.id}
          className={textAreaClassname}
          disabled={this.props.disabled}
          onChange={this.props.onChange}
          maxLength={this.props.maxLength}
          minRows={3}
          maxRows={15}
          value={this.props.value}
        />

        <span className={ iconNotificationClassname }/>

        <label
          className={labelClassname}
          htmlFor={this.props.id}
        >
          { this.props.label }
        </label>

        {this.props.maxLength
          ? <div className={`TextArea__limit
                        ${!this.props.disabled && (this.props.value || this.props.fieldFilled)
          ? 'TextArea__limit--active'
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
