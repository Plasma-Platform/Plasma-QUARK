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

exports.default = connectNotificationTextField;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function connectNotificationTextField(Component) {
  var _class, _temp2;

  return _temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(TextFieldNotification, _React$Component);

    function TextFieldNotification() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, TextFieldNotification);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TextFieldNotification.__proto__ || (0, _getPrototypeOf2.default)(TextFieldNotification)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
        if (_this.props.onChange) {
          _this.props.onChange(event);
        }
        _this.input.hideNotification(event);
      }, _this.handleBlur = function (event) {
        if (typeof _this.props.onBlur === 'function') {
          _this.props.onBlur(function () {
            if (!_this.props.isValid) _this.input.showNotification();
          }, event);
        }
      }, _this.getValue = function () {
        return _this.input.target.getValue();
      }, _this.hasError = function () {
        return _this.input.target.hasError();
      }, _this.component = _this.component || (0, _.connectNotificationTrigger)(Component), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(TextFieldNotification, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var TextFieldComponent = this.component;

        return _react2.default.createElement(TextFieldComponent, (0, _extends3.default)({}, this.props, {
          ref: function ref(input) {
            return _this2.input = input;
          },
          notification: this.props.notification,
          onBlur: this.handleBlur,
          onChange: this.handleChange
        }));
      }
    }]);
    return TextFieldNotification;
  }(_react2.default.Component), _class.propTypes = {
    notification: _react.PropTypes.object.isRequired,
    onBlur: _react.PropTypes.func,
    onChange: _react.PropTypes.func
  }, _temp2;
}