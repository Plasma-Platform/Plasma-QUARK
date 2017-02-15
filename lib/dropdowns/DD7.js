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

var _Dropdown = require('../Dropdown.js');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DD7 = function (_React$Component) {
  (0, _inherits3.default)(DD7, _React$Component);

  function DD7(props) {
    (0, _classCallCheck3.default)(this, DD7);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DD7.__proto__ || (0, _getPrototypeOf2.default)(DD7)).call(this, props));

    _this.getValue = _this.getValue.bind(_this);
    _this.open = _this.open.bind(_this);
    _this.close = _this.close.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(DD7, [{
    key: 'getValue',
    value: function getValue() {
      return this.dropdown.getValue();
    }
  }, {
    key: 'open',
    value: function open() {
      this.dropdown.open();
    }
  }, {
    key: 'close',
    value: function close() {
      this.dropdown.close();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_Dropdown2.default, (0, _extends3.default)({
        type: 7,
        showButton: false,
        showLabel: false,
        optionSize: 'large',
        optionIconSize: 'large',
        ref: function ref(_ref) {
          _this2.dropdown = _ref;
        }
      }, this.props));
    }
  }]);
  return DD7;
}(_react2.default.Component);

exports.default = DD7;