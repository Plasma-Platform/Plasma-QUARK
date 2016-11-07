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

var _InputElement = require('../InputElement.js');

var _InputElement2 = _interopRequireDefault(_InputElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var F1 = function (_Component) {
  (0, _inherits3.default)(F1, _Component);

  function F1(props, context) {
    (0, _classCallCheck3.default)(this, F1);

    var _this = (0, _possibleConstructorReturn3.default)(this, (F1.__proto__ || (0, _getPrototypeOf2.default)(F1)).call(this, props, context));

    _this.getValue = function () {
      return _this.input.getValue();
    };

    _this.focus = function () {
      _this.input.focus();
    };

    return _this;
  }

  (0, _createClass3.default)(F1, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_InputElement2.default, (0, _extends3.default)({}, this.props, {
        ref: function ref(input) {
          return _this2.input = input;
        },
        componentType: 'textfield',
        sizeType: 'F1'
      }));
    }
  }, {
    key: 'value',
    get: function get() {
      return this.getValue();
    },
    set: function set(val) {}
  }]);
  return F1;
}(_react.Component);

F1.propTypes = {
  sizeType: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func
};
exports.default = F1;