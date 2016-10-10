'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _Checkbox = require('../Checkbox.js');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var C1 = function (_React$Component) {
  (0, _inherits3.default)(C1, _React$Component);

  function C1() {
    (0, _classCallCheck3.default)(this, C1);
    return (0, _possibleConstructorReturn3.default)(this, (C1.__proto__ || (0, _getPrototypeOf2.default)(C1)).apply(this, arguments));
  }

  (0, _createClass3.default)(C1, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Checkbox2.default, this.props);
    }
  }]);
  return C1;
}(_react2.default.Component);

exports.default = C1;