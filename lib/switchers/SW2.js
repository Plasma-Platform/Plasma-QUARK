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

var _Switcher = require('../Switcher.js');

var _Switcher2 = _interopRequireDefault(_Switcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SW2 = function (_React$Component) {
  (0, _inherits3.default)(SW2, _React$Component);

  function SW2() {
    (0, _classCallCheck3.default)(this, SW2);
    return (0, _possibleConstructorReturn3.default)(this, (SW2.__proto__ || (0, _getPrototypeOf2.default)(SW2)).apply(this, arguments));
  }

  (0, _createClass3.default)(SW2, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_Switcher2.default, (0, _extends3.default)({}, this.props, {
        size: 'large',
        ref: function ref(_ref) {
          _this2.switcher = _ref;
        }
      }));
    }
  }]);
  return SW2;
}(_react2.default.Component);

exports.default = SW2;