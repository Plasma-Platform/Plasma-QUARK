import React, {PropTypes} from 'react';

import {connectNotificationTrigger} from './';

export default function connectNotificationTextField (Component) {
  return class TextFieldNotification extends React.Component {
    static propTypes = {
      notification : PropTypes.object.isRequired,
      onBlur       : PropTypes.func,
      onChange     : PropTypes.func
    }

    handleChange = (event) => {
      if (this.props.onChange) {
        this.props.onChange(event);
      }
      this.input.hideNotification(event);
    }

    handleBlur = (event) => {
      if (typeof this.props.onBlur === 'function') {
        this.props.onBlur(() => {
          if (!this.props.isValid) this.input.showNotification();
        }, event);
      }
    }

    getValue = () => {
      return this.input.target.getValue();
    }

    hasError = () => {
      return this.input.target.hasError();
    }

    component = this.component || connectNotificationTrigger(Component);

    render () {
      const TextFieldComponent = this.component;

      return (
        <TextFieldComponent
          {...this.props}
          ref           = {input => this.input = input}
          notification  = {this.props.notification}
          onBlur        = {this.handleBlur}
          onChange      = {this.handleChange}
        />
      );
    }
  };
}
