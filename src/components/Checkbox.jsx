import React from 'react';

import './Checkbox.less';

export default function Checkbox (props) {
  const {className, children, ...inputProps} = props;

  const customClassName = className ? ` ${className}` : '';

  return (
    <label
      className = {`tm-quark-checkbox${customClassName}`}
      tabIndex  = "0"
    >
      <input
        {...inputProps}
        className = "tm-quark-checkbox__input"
        type      = "checkbox"
      />
      <i className="tm-quark-checkbox__icon"></i>
      <span className="tm-quark-checkbox__label">
        {children}
      </span>
    </label>
  );
}

Checkbox.propTypes = {
  className: React.PropTypes.string
};
