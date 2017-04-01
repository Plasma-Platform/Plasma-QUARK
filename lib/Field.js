'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Field = function (_Component) {
  (0, _inherits3.default)(Field, _Component);

  function Field(props) {
    (0, _classCallCheck3.default)(this, Field);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Field.__proto__ || (0, _getPrototypeOf2.default)(Field)).call(this, props));

    _this.state = {
      isEmpty: _this.props.value ? _this.props.value.length === 0 : _this.props.defaultValue ? _this.props.defaultValue.length === 0 : true,
      isDirty: false,
      fieldType: _this.props.type
    };


    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.setPasswordFieldTypeToText = _this.setPasswordFieldTypeToText.bind(_this);
    _this.resetPasswordFieldType = _this.resetPasswordFieldType.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Field, [{
    key: 'focus',
    value: function focus() {
      this.input && this.input.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.input && this.input.blur();
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      var _this2 = this;

      var inputValue = event.target.value;

      this.setState({
        isEmpty: inputValue.length === 0,
        isDirty: true
      }, function () {
        _this2.props.onChange && _this2.props.onChange(inputValue);
      });
    }
  }, {
    key: 'setPasswordFieldTypeToText',
    value: function setPasswordFieldTypeToText(event) {
      event.preventDefault();

      this.setState({
        fieldType: 'text'
      });
    }
  }, {
    key: 'resetPasswordFieldType',
    value: function resetPasswordFieldType(event) {
      event.preventDefault();

      this.setState({
        fieldType: 'password'
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        isEmpty: nextProps.value ? false : this.props.value ? true : this.input.value.length === 0
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.focused && this.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          containerClassName = _props.containerClassName,
          containerId = _props.containerId,
          containerName = _props.containerName,
          size = _props.size,
          showInputIcon = _props.showInputIcon,
          icon = _props.icon,
          className = _props.className,
          showPlaceholderOnInput = _props.showPlaceholderOnInput,
          valid = _props.valid,
          invalid = _props.invalid,
          showPasswordFieldTypeToggle = _props.showPasswordFieldTypeToggle,
          fieldTypeToggleHint = _props.fieldTypeToggleHint,
          errorMessage = _props.errorMessage,
          focused = _props.focused,
          inputProps = (0, _objectWithoutProperties3.default)(_props, ['containerClassName', 'containerId', 'containerName', 'size', 'showInputIcon', 'icon', 'className', 'showPlaceholderOnInput', 'valid', 'invalid', 'showPasswordFieldTypeToggle', 'fieldTypeToggleHint', 'errorMessage', 'focused']);


      var containerCustomClassName = containerClassName ? ' ' + containerClassName : '';
      var containerSizeClassName = ' tm-quark-field_size_' + size;

      var inputSizeClassName = ' tm-quark-field__input_size_' + size;
      var inputValidClassName = valid ? ' tm-quark-field__input_valid' : '';
      var inputInvalidClassName = invalid ? ' tm-quark-field__input_invalid' : '';
      var inputStateClassName = this.state.isEmpty ? ' tm-quark-field__input_empty' : ' tm-quark-field__input_filled';
      var inputDirtyClassName = this.state.isDirty ? ' tm-quark-field__input_dirty' : '';
      var inputCustomClassName = className ? ' ' + className : '';

      var fieldIcon = showInputIcon && icon ? icon : showInputIcon && showInputIcon && (inputProps.type === 'password' || inputProps.type === 'search' || inputProps.type === 'email') ? inputProps.type : null;

      var inputHasIconClassName = fieldIcon ? ' tm-quark-field__input_with-icon' : '';

      // const FieldErrorMessage        = errorMessage && errorMessage.type ? notifications[errorMessage.type] : null;

      if (errorMessage.content) {
        this.errorMessageContent = errorMessage.content;
      }

      return _react2.default.createElement(
        'label',
        {
          className: 'tm-quark-field' + containerSizeClassName + containerCustomClassName,
          id: containerId || null,
          name: containerName || null
        },
        _react2.default.createElement('input', (0, _extends3.default)({}, inputProps, {
          className: 'tm-quark-field__input' + (inputProps.disabled ? '' : '' + inputValidClassName + inputInvalidClassName) + inputSizeClassName + (showPlaceholderOnInput ? ' tm-quark-field__input_with-label' : '') + inputStateClassName + inputDirtyClassName + inputHasIconClassName + inputCustomClassName,
          type: this.state.fieldType,
          onChange: this.handleInputChange,
          ref: function ref(_ref) {
            _this3.input = _ref;
          }
        })),
        showPlaceholderOnInput && inputProps.placeholder && _react2.default.createElement(
          'span',
          { className: 'tm-quark-field__label' },
          inputProps.placeholder
        ),
        fieldIcon && _react2.default.createElement('i', { className: 'tm-quark-field__icon tm-quark-field__icon_type_field-type tm-quark-field__icon_' + fieldIcon }),
        inputProps.disabled !== true && (valid ? _react2.default.createElement('i', { className: 'tm-quark-field__icon tm-quark-field__icon_type_validation-status tm-quark-field__icon_check' }) : invalid ? _react2.default.createElement('i', { className: 'tm-quark-field__icon tm-quark-field__icon_type_validation-status tm-quark-field__icon_warning' }) : null),
        inputProps.disabled !== true && inputProps.type === 'password' && showPasswordFieldTypeToggle && _react2.default.createElement(
          'i',
          {
            className: 'tm-quark-field__icon tm-quark-field__icon_type_field-type-toggle tm-quark-field__icon_eye',
            onMouseDown: this.setPasswordFieldTypeToText,
            onMouseUp: this.resetPasswordFieldType,
            onMouseOut: this.resetPasswordFieldType,
            onTouchStart: this.setPasswordFieldTypeToText,
            onTouchEnd: this.resetPasswordFieldType,
            onTouchCancel: this.resetPasswordFieldType
          },
          fieldTypeToggleHint || null
        )
      );
    }
  }]);
  return Field;
}(_react.Component);
// import notifications                 from './notifications/';

Field.propTypes = {
  containerClassName: _react.PropTypes.string,
  containerId: _react.PropTypes.string,
  containerName: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['medium', 'large']).isRequired,
  showInputIcon: _react.PropTypes.bool,
  icon: _react.PropTypes.string,
  className: _react.PropTypes.string,
  focused: _react.PropTypes.bool,
  showPlaceholderOnInput: _react.PropTypes.bool,
  onChange: _react.PropTypes.func,
  valid: _react.PropTypes.bool,
  invalid: _react.PropTypes.bool,
  children: _react.PropTypes.object,
  showPasswordFieldTypeToggle: _react.PropTypes.bool,
  fieldTypeToggleHint: _react.PropTypes.object,
  errorMessage: _react.PropTypes.object
};
Field.defaultProps = {
  showPlaceholderOnInput: false,
  focused: false,
  type: 'text',
  errorMessage: {}
};
exports.default = Field;