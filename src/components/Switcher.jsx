import React from 'react';

import './Switcher.less';

export default class Switcher extends React.Component {
  static propTypes = {
    size      : React.PropTypes.oneOf(['medium', 'large']).isRequired,
    className : React.PropTypes.string,
    id        : React.PropTypes.string.isRequired,
    name      : React.PropTypes.string.isRequired
  }

  render () {
    const {size, className, id, name, label, checked, tabIndex, ...props} = this.props;

    const addClassName = className ? ` ${className}` : '';

    return (
      <div
        className = {`switcher switcher_size_${size}${addClassName}`}
      >
        <input
          {...props}
          className      = "switcher__input"
          id             = {id}
          name           = {name}
          type           = "radio"
          defaultChecked = {checked}
          ref            = {ref => { this.input = ref; }}
        />
        <label
          className = "switcher__label"
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
