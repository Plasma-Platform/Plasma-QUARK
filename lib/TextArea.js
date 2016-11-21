'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactTextareaAutosize = require('react-textarea-autosize');

var _reactTextareaAutosize2 = _interopRequireDefault(_reactTextareaAutosize);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextArea = function (_Component) {
  (0, _inherits3.default)(TextArea, _Component);

  function TextArea() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TextArea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TextArea.__proto__ || (0, _getPrototypeOf2.default)(TextArea)).call.apply(_ref, [this].concat(args))), _this), _this.blurHandler = function (event) {
      var target = _utils.mouseTracker.position.target;
      if (!target.classList.contains('text-area')) {
        _this.props.onBlur(event);
      } else {
        event.preventDefault();
        _this.input.focus(event);
      }
    }, _this.focus = function (event) {
      _this.props.onFocus(event);
      _this.input.focus(event);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TextArea, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var textAreaWrapClassname = (0, _classnames3.default)('text-area text-area_' + this.props.sizeType.toLowerCase(), this.props.className, {
        'abstract-field field-style': true,
        'text-area_filled': this.props.filled,
        'text-area_focused': this.props.focused,
        'text-area_valid': this.props.isValid,
        'text-area_disabled': this.props.disabled,
        'text-area_invalid': this.props.isValid !== null && !this.props.isValid,
        'animated': this.props.animated
      });

      var textAreaClassname = 'text-area__input';
      var labelClassname = 'text-area__label';
      var customIcon = this.props.customIcon;
      var iconClassname = (0, _classnames3.default)('text-area__type-icon', 'icon', (0, _defineProperty3.default)({
        'icon-letter': !customIcon && this.props.type === 'email',
        'icon-magnifier': !customIcon && this.props.type === 'search',
        'icon-key': !customIcon && this.props.type === 'password'
      }, customIcon, customIcon));

      var iconNotificationClassname = (0, _classnames3.default)('text-area__notification-icon', 'icon', {
        'icon-alert': this.props.isValid !== null && !this.props.isValid,
        'icon-check_circle': this.props.isValid
      });

      var limitClassnames = (0, _classnames3.default)('text-area__limit', {
        'text-area__limit--active': !this.props.disabled && (this.props.value || this.props.filled)
      });

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(_ref3) {
            return _this2.textarea = _ref3;
          },
          className: textAreaWrapClassname,
          onClick: this.focus
        },
        _react2.default.createElement(
          'div',
          { className: 'text-area__trim' },
          ['TA2', 'TA4', 'TA6', 'TA8'].indexOf(this.props.sizeType) >= 0 && _react2.default.createElement('span', { className: iconClassname }),
          _react2.default.createElement(_reactTextareaAutosize2.default, {
            ref: function ref(_ref2) {
              return _this2.input = _ref2;
            },
            id: this.props.id,
            className: textAreaClassname,
            disabled: this.props.disabled,
            onChange: this.props.onChange,
            onFocus: this.focus,
            onBlur: this.blurHandler,
            maxLength: this.props.maxLength,
            minRows: 3,
            maxRows: 15,
            value: this.props.value
          }),
          _react2.default.createElement(
            'label',
            {
              className: labelClassname,
              htmlFor: this.props.id
            },
            this.props.label || this.props.placeholder
          ),
          _react2.default.createElement('span', { className: iconNotificationClassname }),
          this.props.maxLength && _react2.default.createElement(
            'span',
            { className: limitClassnames },
            this.props.limitCounter
          )
        )
      );
    }
  }]);
  return TextArea;
}(_react.Component);

TextArea.propTypes = {
  id: _react.PropTypes.string,
  sizeType: _react.PropTypes.oneOf(['TA1', 'TA2', 'TA3', 'TA4', 'TA5', 'TA6', 'TA7', 'TA8']).isRequired,
  placeholder: _react.PropTypes.string,
  className: _react.PropTypes.string,
  value: _react.PropTypes.string,
  disabled: _react.PropTypes.bool,
  filled: _react.PropTypes.bool,
  animated: _react.PropTypes.bool,
  limitCounter: _react.PropTypes.number,
  onBlur: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  onChange: _react.PropTypes.func,
  onValidate: _react.PropTypes.func,
  label: _react.PropTypes.string,
  customIcon: _react.PropTypes.string
};
exports.default = TextArea;