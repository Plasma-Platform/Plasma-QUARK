import React from 'react';

import './Checkbox.less';

export default class Checkbox extends React.Component {
  static propTypes = {
    id        : React.PropTypes.string.isRequired,
    className : React.PropTypes.string,
    tabIndex  : React.PropTypes.number
  }

  static defaultProps = {
    tabIndex: 0
  }

  render () {
    const {className, id, label, checked, tabIndex, ...props} = this.props;

    const addClassName = className ? ` ${className}` : '';

    return (
      <div
        className = {`checkbox${addClassName}`}
      >
        <input
          {...props}
          className      = "checkbox__input"
          id             = {id}
          type           = "checkbox"
          defaultChecked = {checked}
          ref            = {ref => { this.input = ref; }}
        />
        <label
          className = "checkbox__label"
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
