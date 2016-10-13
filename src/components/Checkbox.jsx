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

  constructor (props) {
    super(props);

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp = (event) => {
    this.props.onKeyUp ? this.props.onKeyUp() : null;

    if (event.keyCode === 13) {
      this.input.checked = !this.input.checked;
      this.label.blur();
      this.props.onChange ? this.props.onChange() : null;
    }
  }

  render () {
    const {className, id, label, checked, tabIndex, onKeyUp, ...props} = this.props;
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
          onKeyUp   = {this.handleKeyUp}
          ref       = {ref => { this.label = ref; }}
        >
          {label}
        </label>
      </div>
    );
  }
}
