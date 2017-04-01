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

var _notifications = require('./notifications/');

var _notifications2 = _interopRequireDefault(_notifications);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Textarea = function (_Component) {
  (0, _inherits3.default)(Textarea, _Component);

  function Textarea(props) {
    (0, _classCallCheck3.default)(this, Textarea);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Textarea.__proto__ || (0, _getPrototypeOf2.default)(Textarea)).call(this, props));

    _this.state = {
      isEmpty: _this.props.value ? _this.props.value.length === 0 : _this.props.defaultValue ? _this.props.defaultValue.length === 0 : true,
      isDirty: false,
      symbolsCount: _this.props.maxLength ? _this.props.value ? _this.props.maxLength - _this.props.value.length : _this.props.defaultValue ? _this.props.maxLength - _this.props.defaultValue.length : 0 : 0
    };


    _this.handleInputChange = _this.handleInputChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Textarea, [{
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

      event.persist();

      var inputValue = event.target.value;

      var lineBreacks = inputValue.match(/(\r\n|\n|\r)/g);
      var lineBreacksCount = lineBreacks ? lineBreacks.length : 0;

      this.setState({
        symbolsCount: inputValue.length + lineBreacksCount,
        isEmpty: inputValue.length === 0,
        isDirty: true
      }, function () {
        _this2.input.style.height = 'auto';
        _this2.input.style.height = _this2.input.scrollHeight + 'px';
        _this2.props.onChange && _this2.props.onChange(inputValue, event);
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.focused && this.focus();

      this.input.style.height = 'auto';
      this.input.style.height = this.input.scrollHeight + 'px';
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      this.setState({
        isEmpty: nextProps.value ? false : this.props.value ? true : this.input.value.length === 0,
        symbolsCount: nextProps.value ? nextProps.value.length : this.props.value ? 0 : this.input.value.length
      }, function () {
        _this3.input.style.height = 'auto';
        _this3.input.style.height = _this3.input.scrollHeight + 'px';
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          containerClassName = _props.containerClassName,
          containerId = _props.containerId,
          containerName = _props.containerName,
          size = _props.size,
          showTextareaIcon = _props.showTextareaIcon,
          icon = _props.icon,
          className = _props.className,
          focused = _props.focused,
          valid = _props.valid,
          invalid = _props.invalid,
          errorMessage = _props.errorMessage,
          showSymbolsCounter = _props.showSymbolsCounter,
          inputProps = (0, _objectWithoutProperties3.default)(_props, ['containerClassName', 'containerId', 'containerName', 'size', 'showTextareaIcon', 'icon', 'className', 'focused', 'valid', 'invalid', 'errorMessage', 'showSymbolsCounter']);


      var containerCustomClassName = containerClassName ? ' ' + containerClassName : '';
      var containerSizeClassName = ' tm-quark-textarea_size_' + size;

      var inputSizeClassName = ' tm-quark-textarea__input_size_' + size;
      var inputValidClassName = valid ? ' tm-quark-textarea__input_valid' : '';
      var inputInvalidClassName = invalid ? ' tm-quark-textarea__input_invalid' : '';
      var inputStateClassName = this.state.isEmpty ? ' tm-quark-textarea__input_empty' : ' tm-quark-textarea__input_filled';
      var inputDirtyClassName = this.state.isDirty ? ' tm-quark-textarea__input_dirty' : '';
      var inputCustomClassName = className ? ' ' + className : '';

      var fieldIcon = showTextareaIcon && icon ? icon : showTextareaIcon && showTextareaIcon && (inputProps.type === 'password' || inputProps.type === 'search' || inputProps.type === 'email') ? inputProps.type : null;

      var inputHasIconClassName = fieldIcon ? ' tm-quark-textarea__input_with-icon' : '';

      var FieldErrorMessage = errorMessage && errorMessage.type ? _notifications2.default[errorMessage.type] : null;

      return _react2.default.createElement(
        'label',
        {
          className: 'tm-quark-textarea' + containerSizeClassName + containerCustomClassName,
          id: containerId || null,
          name: containerName || null
        },
        _react2.default.createElement(
          'div',
          { className: 'tm-quark-textarea__inner' },
          _react2.default.createElement('textarea', (0, _extends3.default)({}, inputProps, {
            className: 'tm-quark-textarea__input' + (inputProps.disabled ? '' : '' + inputValidClassName + inputInvalidClassName) + inputSizeClassName + inputStateClassName + inputDirtyClassName + inputHasIconClassName + inputCustomClassName,
            onChange: this.handleInputChange,
            ref: function ref(_ref) {
              _this4.input = _ref;
            }
          })),
          _react2.default.createElement(
            'span',
            { className: 'tm-quark-textarea__label' },
            inputProps.placeholder || null
          ),
          fieldIcon && _react2.default.createElement('i', { className: 'tm-quark-textarea__icon tm-quark-textarea__icon_type_field-type tm-quark-textarea__icon_' + fieldIcon }),
          showSymbolsCounter && inputProps.maxLength && _react2.default.createElement(
            'span',
            { className: 'tm-quark-textarea__symbols-counter' },
            parseInt(inputProps.maxLength) - this.state.symbolsCount
          ),
          inputProps.disabled !== true && (valid ? _react2.default.createElement('i', { className: 'tm-quark-textarea__icon tm-quark-textarea__icon_type_validation-status tm-quark-textarea__icon_check' }) : invalid ? _react2.default.createElement('i', { className: 'tm-quark-textarea__icon tm-quark-textarea__icon_type_validation-status tm-quark-textarea__icon_warning' }) : null)
        ),
        inputProps.disabled !== true && FieldErrorMessage && _react2.default.createElement(
          FieldErrorMessage,
          {
            show: invalid,
            hideOnClickOutside: false
          },
          errorMessage.content || null
        )
      );
    }
  }]);
  return Textarea;
}(_react.Component);

Textarea.propTypes = {
  containerClassName: _react.PropTypes.string,
  containerId: _react.PropTypes.string,
  containerName: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['medium', 'large']).isRequired,
  showTextareaIcon: _react.PropTypes.bool,
  icon: _react.PropTypes.string,
  className: _react.PropTypes.string,
  focused: _react.PropTypes.bool,
  onChange: _react.PropTypes.func,
  valid: _react.PropTypes.bool,
  invalid: _react.PropTypes.bool,
  errorMessage: _react.PropTypes.object
};
Textarea.defaultProps = {
  focused: false
};
exports.default = Textarea;