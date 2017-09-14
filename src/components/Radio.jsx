import React from 'react';
import PropTypes from 'prop-types';

import './Radio.less';

const Radio = ({
  className,
  children,
  ...inputProps
}) => (
  <label
    className={`tm-quark-radio ${className}`}
    tabIndex="0"
  >
    <input
      {...inputProps}
      className="tm-quark-radio__input"
      type="radio"
    />

    <i className="tm-quark-radio__icon" />

    <span className="tm-quark-radio__label">
      {children}
    </span>
  </label>
);

Radio.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Radio.defaultProps = {
  className: '',
  children: null,
};

export default Radio;
