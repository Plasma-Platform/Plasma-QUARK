'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button.js');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var B2D = function (_React$Component) {
  (0, _inherits3.default)(B2D, _React$Component);

  function B2D() {
    (0, _classCallCheck3.default)(this, B2D);
    return (0, _possibleConstructorReturn3.default)(this, (B2D.__proto__ || (0, _getPrototypeOf2.default)(B2D)).apply(this, arguments));
  }

  (0, _createClass3.default)(B2D, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Button2.default,
        (0, _extends3.default)({}, this.props, {
          widthType: 'full',
          heightType: 'large',
          roundedType: 'all',
          bgType: '2'
        }),
        this.props.children
      );
    }
  }]);
  return B2D;
}(_react2.default.Component);

B2D.propTypes = {
  icon: _react2.default.PropTypes.string.isRequired
};
exports.default = B2D;