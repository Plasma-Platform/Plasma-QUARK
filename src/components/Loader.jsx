import React from 'react';
import PropTypes from 'prop-types';

import './Loader.less';

const Loader = ({
  width,
  height,
  className,
}) => (
  <span className={`tm-quark-loader tm-quark-loader_width_${width} tm-quark-loader_height_${height} ${className}`}>
    <span className="tm-quark-loader__line" />
    <span className="tm-quark-loader__line" />
    <span className="tm-quark-loader__line" />
  </span>
);

Loader.propTypes = {
  width: PropTypes.oneOf(['fixed', 'full']).isRequired,
  height: PropTypes.oneOf(['medium', 'large']).isRequired,
  className: PropTypes.string,
};

Loader.defaultProps = {
  className: '',
};

export default Loader;
