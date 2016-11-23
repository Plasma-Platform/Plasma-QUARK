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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _TextField = require('./TextField.js');

var _TextField2 = _interopRequireDefault(_TextField);

var _TextArea = require('./TextArea.js');

var _TextArea2 = _interopRequireDefault(_TextArea);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputElement = function (_Component) {
  (0, _inherits3.default)(InputElement, _Component);

  function InputElement(props, context) {
    (0, _classCallCheck3.default)(this, InputElement);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InputElement.__proto__ || (0, _getPrototypeOf2.default)(InputElement)).call(this, props, context));

    _this.state = {
      value: _this.props.value || '',
      filled: _this.props.filled || !!_this.props.value || false,
      focused: !!_this.props.focused,
      isValid: null,
      animated: false,
      notificationText: _this.props.notificationText || '',
      limitCounter: _this.props.maxLength
    };

    _this.componentDidMount = function () {
      _this.inputElement = _this.comp.input.target.input;
      _this.animationTarget = _this.props.componentType === 'textarea' ? _this.comp.input.target.textarea : _this.inputElement;
      _this.inputDOMElement = _reactDom2.default.findDOMNode(_this.animationTarget);
      if (_this.props.autofocus) {
        _this.focus();
      }

      _this.inputDOMElement.addEventListener('animationend', function (event) {
        event.stopPropagation();
        /* @todo: найти более элегантное решение
         для отслеживания полного завершения анимации из нескольких кейфреймов */
        if (event.animationName === 'hideErrorField' || event.animationName === 'hideSuccessField') {
          _this.setState({
            animated: false
          });
        }
      }, false);

      if (_this.props.limitCounter) {
        _this.refreshInputCounter();
      }
    };

    _this.componentWillReceiveProps = function (nextProps) {
      if (nextProps.value !== _this.props.value) {
        _this.setState({
          value: nextProps.value,
          filled: true
        });
      }
    };

    _this.componentDidUpdate = function () {
      if (_this.state.isValid === false) {
        _this.comp.input.showNotification();
      } else {
        _this.comp.input.hideNotification();
      }
    };

    _this.focus = function (event) {
      _this.setState({
        focused: true
      });
      _this.inputElement.focus(event);
    };

    _this.setValidationStatus = function (status, notificationText) {
      _this.handleValidation({
        status: status,
        message: notificationText
      });
      _this.activateAnimation();
    };

    _this.getValidationStatus = function () {
      return _this.state.isValid;
    };

    _this.getValue = function () {
      return _this.state.value;
    };

    _this.changeFieldType = function () {
      var newType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'text';

      _this.inputDOMElement.setAttribute('type', newType);
    };

    _this.onChange = function (event) {
      if (typeof _this.props.onChange === 'function') {
        _this.props.onChange(event);
      }
      _this.setState({
        value: event.target.value,
        filled: !!event.target.value,
        isValid: null
      });

      _this.refreshInputCounter();
    };

    _this.onFocus = function (event) {
      if (!_this.state.focused) {
        if (typeof _this.props.onFocus === 'function') {
          _this.props.onFocus(event);
        }

        _this.oldValue = _this.state.value;
        _this.setState({
          focused: true,
          filled: !!event.target.value
        });
      }
    };

    _this.onBlur = function (event) {
      if (typeof _this.props.onBlur === 'function') {
        _this.props.onBlur(event);
      }

      var trimmed = _this.state.value.trim();

      if (!_this.inputElement.value) {
        _this.setState({
          filled: false,
          focused: false
        });
      } else {
        _this.setState({
          focused: false,
          value: trimmed
        });
      }
      if (typeof _this.props.onValidate === 'function' && (_this.state.isValid === null || _this.oldValue !== _this.inputElement.value)) {
        _this.props.onValidate();
        _this.activateAnimation();
      }
    };

    _this.handleValidation = function (data) {
      _this.setState({
        isValid: data.status,
        notificationText: data.message
      });
    };

    _this.resetValidationStatus = function () {
      _this.setState({
        isValid: undefined
      });
    };

    _this.activateAnimation = function () {
      _this.setState({
        animated: true
      });
    };

    _this.refreshInputCounter = function () {
      var textareaElement = _this.comp.input.target.input;

      if (textareaElement.value === 0) {
        return;
      }

      var currentValue = _this.props.maxLength - (textareaElement ? textareaElement.value.length : 0);
      var currentMaxValue = Math.max(0, currentValue);

      _this.setState({
        limitCounter: currentMaxValue
      });
    };

    _this.oldValue = '';
    _this.inputElement = null;
    _this.inputDOMElement = null;
    _this.textComponent = props.componentType === 'textarea' ? _TextArea2.default : _TextField2.default;
    _this.component = (0, _utils.connectNotificationTextField)(_this.textComponent);
    return _this;
  }

  // приводим к нулю, возможные отрицательные значения, которые появляются в счетчике
  // при монтировании компонента с заполненным значением, превышающим установвленный лимит


  (0, _createClass3.default)(InputElement, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var DecoratedTextField = this.component;

      return _react2.default.createElement(DecoratedTextField, (0, _extends3.default)({}, this.props, {
        ref: function ref(comp) {
          return _this2.comp = comp;
        },
        value: this.state.value,
        filled: this.state.filled,
        focused: this.state.focused,
        limitCounter: this.state.limitCounter,
        isValid: this.state.isValid,
        animated: this.state.animated,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange,
        changeFieldType: this.changeFieldType,
        resetValidationStatus: this.resetValidationStatus,
        notification: { code: this.props.notificationType || 'N2B',
          text: this.state.notificationText,
          maxWidth: this.props.notificationMaxWidth
        }
      }));
    }
  }]);
  return InputElement;
}(_react.Component);

InputElement.propTypes = {
  id: _react.PropTypes.string,
  componentType: _react.PropTypes.oneOf(['textfield', 'textarea']),
  sizeType: _react.PropTypes.string.isRequired,
  placeholder: _react.PropTypes.string,
  value: _react.PropTypes.string,
  disabled: _react.PropTypes.bool,
  filled: _react.PropTypes.bool,
  focused: _react.PropTypes.bool,
  notificationText: _react.PropTypes.string,
  maxLength: _react.PropTypes.number
};
InputElement.defaultProps = {
  notificationAlt: { status: false }
};
exports.default = InputElement;