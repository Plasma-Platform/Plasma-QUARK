'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EyePasswordIndicator = undefined;

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EyePasswordIndicator = exports.EyePasswordIndicator = function (_Component) {
  (0, _inherits3.default)(EyePasswordIndicator, _Component);

  function EyePasswordIndicator() {
    (0, _classCallCheck3.default)(this, EyePasswordIndicator);
    return (0, _possibleConstructorReturn3.default)(this, (EyePasswordIndicator.__proto__ || (0, _getPrototypeOf2.default)(EyePasswordIndicator)).apply(this, arguments));
  }

  (0, _createClass3.default)(EyePasswordIndicator, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('span', (0, _extends3.default)({}, this.props, {
        className: 'text-field__notification-icon icon password-toggle icon-eye'
      }));
    }
  }]);
  return EyePasswordIndicator;
}(_react.Component);

var TextField = function (_Component2) {
  (0, _inherits3.default)(TextField, _Component2);

  function TextField() {
    (0, _classCallCheck3.default)(this, TextField);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (TextField.__proto__ || (0, _getPrototypeOf2.default)(TextField)).call(this));

    _this2.showTooltip = _this2.showTooltip.bind(_this2);
    _this2.hidePasswordAndTooltip = _this2.hidePasswordAndTooltip.bind(_this2);
    return _this2;
  }

  (0, _createClass3.default)(TextField, [{
    key: 'showTooltip',
    value: function showTooltip() {
      var _this3 = this;

      setTimeout(function () {
        _this3.icon.showNotification();
      }, 200);
    }
  }, {
    key: 'hidePasswordAndTooltip',
    value: function hidePasswordAndTooltip() {
      var _this4 = this;

      setTimeout(function () {
        _this4.icon.hideNotification();
      }, 100);
      this.props.changeFieldType('password');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var inputWrapClassname = (0, _classnames2.default)('abstract-field text-field text-field_' + this.props.sizeType, this.props.className, {
        'text-field_filled': this.props.filled,
        'text-field_focused': this.props.focused,
        'text-field_valid': this.props.isValid,
        'text-field_disabled': this.props.disabled,
        'text-field_invalid': this.props.isValid !== null && !this.props.isValid,
        'animated': this.props.animated
      });
      var inputClassname = 'text-field__input';
      var labelClassname = 'text-field__label';
      var iconClassname = (0, _classnames2.default)('text-field__type-icon', 'icon', {
        'icon-letter': this.props.type === 'email',
        'icon-magnifier': this.props.type === 'search',
        'icon-key': this.props.type === 'password'
      });
      var isPassword = this.props.type === 'password';
      var iconNotificationClassname = (0, _classnames2.default)('text-field__notification-icon', 'icon', {
        'icon-alert': this.props.isValid !== null && !this.props.isValid,
        'icon-check_circle': this.props.isValid
      });

      var hint = this.props.placeholder || this.props.label;
      var EyePasswordIndicatorWrapper = (0, _utils.connectNotificationTrigger)(EyePasswordIndicator);

      return _react2.default.createElement(
        'div',
        {
          className: inputWrapClassname
        },
        ['F2', 'F4'].indexOf(this.props.sizeType) >= 0 && _react2.default.createElement('span', { className: iconClassname }),
        _react2.default.createElement('input', {
          ref: function ref(input) {
            return _this5.input = input;
          },
          id: this.props.id,
          type: this.props.type || 'text',
          value: this.props.value,
          autoFocus: this.props.autoFocus,
          placeholder: ['F1', 'F2'].indexOf(this.props.sizeType) >= 0 ? hint : '',
          className: inputClassname,
          disabled: this.props.disabled,
          onChange: this.props.onChange,
          onFocus: this.props.onFocus,
          onBlur: this.props.onBlur,
          onKeyUp: this.props.onKeyUp,
          onKeyDown: this.props.onKeyDown
        }),
        isPassword ? _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('span', { className: iconNotificationClassname }),
          _react2.default.createElement(EyePasswordIndicatorWrapper, {
            ref: function ref(c) {
              return _this5.icon = c;
            },
            notification: { code: this.props.eyeNotificationCode || 'N1C', text: this.props.eyeNotificationText || 'Hold to show password' },
            notificationAlt: { status: false },
            onMouseOver: this.showTooltip,
            onMouseLeave: this.hidePasswordAndTooltip,
            onMouseDown: this.props.changeFieldType.bind(this, 'text'),
            onMouseUp: this.props.changeFieldType.bind(this, 'password'),
            onTouchStart: this.showTooltip,
            onTouchEnd: this.hidePasswordAndTooltip
          })
        ) : _react2.default.createElement('span', { className: iconNotificationClassname }),
        ['F3', 'F4'].indexOf(this.props.sizeType) >= 0 && _react2.default.createElement(
          'label',
          {
            className: labelClassname,
            htmlFor: this.props.id
          },
          this.props.label || this.props.placeholder
        )
      );
    }
  }]);
  return TextField;
}(_react.Component);

TextField.propTypes = {
  id: _react2.default.PropTypes.string,
  sizeType: _react2.default.PropTypes.oneOf(['F1', 'F2', 'F3', 'F4']).isRequired,
  placeholder: _react2.default.PropTypes.string,
  value: _react2.default.PropTypes.string,
  disabled: _react2.default.PropTypes.bool
};
exports.default = TextField;