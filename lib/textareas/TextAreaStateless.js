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

var TextArea = function (_Component) {
  (0, _inherits3.default)(TextArea, _Component);

  function TextArea(props, context) {
    (0, _classCallCheck3.default)(this, TextArea);
    return (0, _possibleConstructorReturn3.default)(this, (TextArea.__proto__ || (0, _getPrototypeOf2.default)(TextArea)).call(this, props, context));
  }

  (0, _createClass3.default)(TextArea, [{
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
  return TextArea;
}(_react.Component);

TextArea.propTypes = {
  id: _react2.default.PropTypes.string.isRequired,
  fieldType: _react2.default.PropTypes.oneOf(['TA1', 'TA2', 'TA3', 'TA4', 'TA5', 'TA6', 'TA7', 'TA8']).isRequired,
  placeholder: _react2.default.PropTypes.string,
  className: _react2.default.PropTypes.string,
  value: _react2.default.PropTypes.string,
  disabled: _react2.default.PropTypes.bool,
  fieldFilled: _react2.default.PropTypes.bool,
  limitCounter: _react2.default.PropTypes.number,
  onBlur: _react2.default.PropTypes.func,
  onFocus: _react2.default.PropTypes.func,
  onChange: _react2.default.PropTypes.func,
  onValidate: _react2.default.PropTypes.func,
  label: _react2.default.PropTypes.string
};
exports.default = TextArea;