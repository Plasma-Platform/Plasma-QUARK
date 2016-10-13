import React from 'react';

import './Radio.less';

export default class Radio extends React.Component {
  static propTypes = {
    className : React.PropTypes.string,
    id        : React.PropTypes.string.isRequired,
    name      : React.PropTypes.string.isRequired
  }

  render () {
    const {className, id, name, label, checked, tabIndex, ...props} = this.props;

    const addClassName = className ? ` ${className}` : '';

    return (
      <div
        className = {`radio${addClassName}`}
      >
        <input
          {...props}
          className      = "radio__input"
          id             = {id}
          name           = {name}
          type           = "radio"
          defaultChecked = {checked}
          ref            = {ref => { this.input = ref; }}
        />
        <label
          className = "radio__label"
          htmlFor   = {id}
          tabIndex  = {tabIndex || this.props.tabIndex}
          ref       = {ref => { this.label = ref; }}
        >
          {label}
        </label>
      </div>
    );
  }
}
