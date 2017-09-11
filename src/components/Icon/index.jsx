import React from 'react';
import PropTypes from 'prop-types';
import './Icon.less';

/**
 * Abstract Icon class
 * @namespace Icon
 * @param {string} icon icon name id in the sprite
 * @param {string} viewBox viewbox size
 * @param {number} width icon width
 * @param {number} height icon height
 * @param {string} className modifier class when needed
 * @return {ReactComponent} return rendered component
 */
const Icon = ({ viewBox, width, height, icon, className }) => (
  <svg
    {...(viewBox && { viewBox })}
    className={`Icon Icon--${icon} ${className}`}
    width={width}
    height={height}
  >
    <use xlinkHref={`#${icon}`} />
  </svg>
);

/**
 * Object that contains expected props and their types
 * and used for props validation
 * @namespace Icon
 * @static
 * @type {Object}
 */
Icon.propTypes = {
  icon      : PropTypes.string.isRequired,
  className : PropTypes.string,
  viewBox   : PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  width     : PropTypes.number,
  height    : PropTypes.number
};

/**
 * Object containing default props value
 * @namespace Icon
 * @static
 * @type {Object}
 */
Icon.defaultProps = {
  className : '',
  width     : 20,
  height    : 20,
  viewBox   : false
};

export default Icon;
