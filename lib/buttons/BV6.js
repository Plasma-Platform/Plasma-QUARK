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

var BV6 = function (_React$Component) {
  (0, _inherits3.default)(BV6, _React$Component);

  function BV6() {
    (0, _classCallCheck3.default)(this, BV6);
    return (0, _possibleConstructorReturn3.default)(this, (BV6.__proto__ || (0, _getPrototypeOf2.default)(BV6)).apply(this, arguments));
  }

  (0, _createClass3.default)(BV6, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Button2.default,
        (0, _extends3.default)({}, this.props, {
          widthType: 'square',
          heightType: 'large',
          roundedType: 'all',
          bgType: 'vk',
          icon: 'vk'
        }),
        this.props.children
      );
    }
  }]);
  return BV6;
}(_react2.default.Component);

exports.default = BV6;