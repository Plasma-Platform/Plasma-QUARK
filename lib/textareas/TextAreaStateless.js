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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactTextareaAutosize = require('react-textarea-autosize');

var _reactTextareaAutosize2 = _interopRequireDefault(_reactTextareaAutosize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextAreaStateless = function (_Component) {
  (0, _inherits3.default)(TextAreaStateless, _Component);

  function TextAreaStateless() {
    (0, _classCallCheck3.default)(this, TextAreaStateless);
    return (0, _possibleConstructorReturn3.default)(this, (TextAreaStateless.__proto__ || (0, _getPrototypeOf2.default)(TextAreaStateless)).apply(this, arguments));
  }

  (0, _createClass3.default)(TextAreaStateless, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var textAreaWrapClassname = (0, _classnames2.default)('TextArea_wrapper TextArea_' + this.props.fieldType, this.props.className, {
        'TextArea_fieldFilled': this.props.fieldFilled,
        'TextArea_inFocus': this.props.inFocus,
        'TextArea_valid': this.props.isValid,
        'TextArea_invalid': this.props.isValid !== null && !this.props.isValid
      });

      var textAreaClassname = 'TextArea TextArea__input';
      var labelClassname = 'TextArea__label';

      var iconClassname = (0, _classnames2.default)('TextArea__type-icon', 'icon', {
        'icon-letter': this.props.type === 'email',
        'icon-magnifier': this.props.type === 'search',
        'icon-eye': this.props.type === 'password'
      });

      var iconNotificationClassname = (0, _classnames2.default)('TextArea__notification-icon', 'icon', {
        'icon-alert': this.props.isValid !== null && !this.props.isValid,
        'icon-check_circle': this.props.isValid
      });

      return _react2.default.createElement(
        'div',
        {
          className: textAreaWrapClassname,
          onFocus: this.props.onFocus,
          onBlur: this.props.onBlur
        },
        ['TA2', 'TA4', 'TA6', 'TA8'].indexOf(this.props.fieldType) >= 0 && _react2.default.createElement('span', { className: iconClassname }),
        _react2.default.createElement(_reactTextareaAutosize2.default, {
          ref: function ref(textareaInput) {
            return _this2.textareaInput = textareaInput;
          },
          id: this.props.id,
          className: textAreaClassname,
          disabled: this.props.disabled,
          onChange: this.props.onChange,
          maxLength: this.props.maxLength,
          minRows: 3,
          maxRows: 15,
          value: this.props.value
        }),
        _react2.default.createElement('span', { className: iconNotificationClassname }),
        _react2.default.createElement(
          'label',
          {
            className: labelClassname,
            htmlFor: this.props.id
          },
          this.props.label
        ),
        this.props.maxLength ? _react2.default.createElement(
          'div',
          { className: 'TextArea__limit\n                        ' + (!this.props.disabled && (this.props.value || this.props.fieldFilled) ? 'TextArea__limit--active' : '')
          },
          this.props.limitCounter
        ) : null
      );
    }
  }]);
  return TextAreaStateless;
}(_react.Component);

TextAreaStateless.propTypes = {
  id: _react.PropTypes.string.isRequired,
  fieldType: _react.PropTypes.oneOf(['TA1', 'TA2', 'TA3', 'TA4', 'TA5', 'TA6', 'TA7', 'TA8']).isRequired,
  placeholder: _react.PropTypes.string,
  className: _react.PropTypes.string,
  value: _react.PropTypes.string,
  disabled: _react.PropTypes.bool,
  fieldFilled: _react.PropTypes.bool,
  limitCounter: _react.PropTypes.number,
  onBlur: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  onChange: _react.PropTypes.func,
  onValidate: _react.PropTypes.func,
  label: _react.PropTypes.string
};
exports.default = TextAreaStateless;