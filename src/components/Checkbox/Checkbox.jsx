import React from 'react';
import PropTypes from 'prop-types';

import './Checkbox.less';

const Checkbox = ({
  className,
  children,
  ...props
}) => (
  <label
    className={`tm-quark-checkbox ${className}`}
    tabIndex="0"
  >
    <input
      {...props}
      className="tm-quark-checkbox__input"
      type="checkbox"
    />

    <i className="tm-quark-checkbox__icon" />

    <span className="tm-quark-checkbox__label">
      {children}
    </span>
  </label>
);

Checkbox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Checkbox.defaultProps = {
  className: '',
  children: null,
};

export default Checkbox;
