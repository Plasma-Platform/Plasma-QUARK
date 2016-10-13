import React from 'react';

import './Switcher.less';

export default class Switcher extends React.Component {
  static propTypes = {
    size      : React.PropTypes.oneOf(['medium', 'large']).isRequired,
    className : React.PropTypes.string,
    id        : React.PropTypes.string.isRequired,
    name      : React.PropTypes.string.isRequired
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

    if (event.keyCode === 13 && this.input.checked === false) {
      this.input.checked = !this.input.checked;
      this.label.blur();
      this.props.onChange ? this.props.onChange() : null;
    }
  }

  render () {
    const {size, className, id, name, label, checked, tabIndex, onKeyUp, ...props} = this.props;
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
          onKeyUp   = {this.handleKeyUp}
          ref       = {ref => { this.label = ref; }}
        >
          {label}
        </label>
      </div>
    );
  }
}
