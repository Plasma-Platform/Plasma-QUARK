import React from 'react';
import PropTypes from 'prop-types';

import './Switcher.less';

export default class Switcher extends React.Component {
  static propTypes = {
    size: PropTypes.oneOf(['medium', 'large']).isRequired,
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onKeyUp: PropTypes.func,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    label: PropTypes.node,
    tabIndex: PropTypes.number,
  }

  static defaultProps = {
    tabIndex: 0,
    className: '',
    onKeyUp: null,
    onChange: null,
    checked: false,
    label: null,
  }

  handleKeyUp = (event) => {
    this.props.onKeyUp();

    if (event.keyCode === 13 && this.input.checked === false) {
      this.input.checked = !this.input.checked;
      this.label.blur();
      this.props.onChange();
    }
  }

  render() {
    const {
      size,
      className,
      id,
      name,
      label,
      checked,
      tabIndex,
      onKeyUp,
      ...props
    } = this.props;

    return (
      <div
        className={`tm-quark-switcher tm-quark-switcher_size_${size} ${className}`}
      >
        <input
          {...props}
          className="tm-quark-switcher__input"
          id={id}
          name={name}
          type="radio"
          defaultChecked={checked}
          ref={(ref) => { this.input = ref; }}
        />

        <label
          className="tm-quark-switcher__label"
          htmlFor={id}
          tabIndex={tabIndex || this.props.tabIndex}
          onKeyUp={this.handleKeyUp}
          ref={(ref) => { this.label = ref; }}
          role="presentation"
        >
          {label}
        </label>
      </div>
    );
  }
}
