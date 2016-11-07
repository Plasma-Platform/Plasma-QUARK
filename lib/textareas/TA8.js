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

var _InputElement = require('../InputElement.js');

var _InputElement2 = _interopRequireDefault(_InputElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TA8 = function (_Component) {
  (0, _inherits3.default)(TA8, _Component);

  function TA8() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TA8);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TA8.__proto__ || (0, _getPrototypeOf2.default)(TA8)).call.apply(_ref, [this].concat(args))), _this), _this.getValue = function () {
      return _this.input.getValue();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TA8, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_InputElement2.default, {
        ref: function ref(input) {
          return _this2.input = input;
        },
        componentType: 'textarea',
        sizeType: 'TA8',
        type: this.props.type,
        id: this.props.id,
        value: this.props.value,
        disabled: this.props.disabled,
        label: this.props.label,
        className: this.props.className || '',
        onValidate: this.props.onValidate,
        maxLength: this.props.maxLength || 2000,
        notificationText: this.props.notificationText
      });
    }
  }]);
  return TA8;
}(_react.Component);

TA8.propTypes = {
  type: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.string,
  value: _react2.default.PropTypes.string,
  disabled: _react2.default.PropTypes.bool,
  label: _react2.default.PropTypes.string,
  notificationText: _react2.default.PropTypes.string,
  onValidate: _react2.default.PropTypes.func,
  maxLength: _react2.default.PropTypes.number
};
exports.default = TA8;