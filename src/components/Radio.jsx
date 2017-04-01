import React from 'react';

import './Radio.less';

export default function Radio (props) {
  const {className, children, ...inputProps} = props;

  const customClassName = className ? ` ${className}` : '';

  return (
    <label
      className = {`tm-quark-radio${customClassName}`}
      tabIndex  = "0"
    >
      <input
        {...inputProps}
        className = "tm-quark-radio__input"
        type      = "radio"
      />
      <i className="tm-quark-radio__icon"></i>
      <span className="tm-quark-radio__label">
        {children}
      </span>
    </label>
  );
}

Radio.propTypes = {
  className: React.PropTypes.string
};
