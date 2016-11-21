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

var _AbstractField = require('../AbstractField.js');

var _AbstractField2 = _interopRequireDefault(_AbstractField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var F4 = function (_Component) {
  (0, _inherits3.default)(F4, _Component);

  function F4() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, F4);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = F4.__proto__ || (0, _getPrototypeOf2.default)(F4)).call.apply(_ref, [this].concat(args))), _this), _this.getValue = function () {
      return _this.input.getValue();
    }, _this.focus = function () {
      _this.input.focus();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(F4, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_AbstractField2.default, (0, _extends3.default)({}, this.props, {
        ref: function ref(input) {
          return _this2.input = input;
        },
        componentType: 'textfield',
        sizeType: 'F4'
      }));
    }
  }, {
    key: 'value',
    get: function get() {
      return this.getValue();
    }
  }]);
  return F4;
}(_react.Component);

F4.propTypes = {
  sizeType: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func
};
exports.default = F4;