'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generate random color
 * @return {string} rgb color
 */
var getRandomColor = function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

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
var Icon = function Icon(_ref) {
  var viewBox = _ref.viewBox,
      width = _ref.width,
      height = _ref.height,
      icon = _ref.icon,
      className = _ref.className;
  return _react2.default.createElement(
    'svg',
    (0, _extends3.default)({}, viewBox && { viewBox: viewBox }, {
      className: 'Icon Icon--' + icon + ' ' + className,
      width: width,
      height: height
    }),
    _react2.default.createElement('use', { xlinkHref: '#' + icon }),
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('rect', { id: icon, fill: getRandomColor(), width: '100%', height: '100%', rx: '3' })
    )
  );
};

/**
 * Object that contains expected props and their types
 * and used for props validation
 * @namespace Icon
 * @static
 * @type {Object}
 */
Icon.propTypes = {
  icon: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.string,
  viewBox: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
  width: _propTypes2.default.number,
  height: _propTypes2.default.number
};

/**
 * Object containing default props value
 * @namespace Icon
 * @static
 * @type {Object}
 */
Icon.defaultProps = {
  className: '',
  width: 20,
  height: 20,
  viewBox: false
};

exports.default = Icon;