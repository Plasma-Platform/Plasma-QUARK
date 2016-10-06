import React from 'react'

import './Checkbox.less'

export default class Checkbox extends React.Component {
  static propTypes = {
    className : React.PropTypes.string,
    id        : React.PropTypes.string.isRequired
  }

  render () {
    const {className, id, label, checked, ...props} = this.props

    const addClassName = className ? ` ${className}` : ''

    return (
      <div
        className = {`checkbox${addClassName}`}
        ref       = {ref => { this.checkbox = ref }}
      >
        <input
          {...props}
          className      = "checkbox__input"
          id             = {id}
          type           = "checkbox"
          defaultChecked = {checked}
          ref            = {ref => { this.input = ref }}
        />
        <label
          className = "checkbox__label"
          htmlFor   = {id}
        >
          {label}
        </label>
      </div>
    )
  }
}
