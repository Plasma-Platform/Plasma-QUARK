import React from 'react';

import './Radio.less';

export default function Radio (props) {
  const {className, label, ...radioProps} = props;
  const addClassName = className ? ` ${className}` : '';

  return (
    <label
      className = {`tm-quark-radio${radioProps.disabled ? ' tm-quark-radio_disabled' : ''}${addClassName}`}
      tabIndex  = "0"
    >
      <input
        {...radioProps}
        className = "tm-quark-radio__input"
        type      = "radio"
      />
      <i className="tm-quark-radio__icon"></i>
      <span className = "tm-quark-radio__label">{label}</span>
    </label>
  );
}

Radio.propTypes = {
  className : React.PropTypes.string,
  id        : React.PropTypes.string.isRequired,
  name      : React.PropTypes.string.isRequired
};

Radio.defaultProps = {
  tabIndex: 0
};
