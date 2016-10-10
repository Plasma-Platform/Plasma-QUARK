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

var _TextFieldStateless = require('./textFields/TextFieldStateless.js');

var _TextFieldStateless2 = _interopRequireDefault(_TextFieldStateless);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextField = function (_Component) {
  (0, _inherits3.default)(TextField, _Component);

  function TextField(props, context) {
    (0, _classCallCheck3.default)(this, TextField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TextField.__proto__ || (0, _getPrototypeOf2.default)(TextField)).call(this, props, context));

    _this.componentDidMount = function () {
      _this.inputElement = _this.comp.input.target.input;
      _this.inputDOMElement = _reactDom2.default.findDOMNode(_this.inputElement);
      if (_this.props.autofocus) {
        _this.focus();
      }

      _this.inputDOMElement.addEventListener('animationend', function (event) {
        event.stopPropagation();
        /* @todo: найти более элегантное решение
         для отслеживания полного завершения анимации из нескольких кейфреймов */
        if (event.animationName === 'hideErrorField') {
          _this.setState({
            animated: false
          });
        }
      }, false);
    };

    _this.componentWillReceiveProps = function (nextProps) {
      if (nextProps.value !== _this.props.value) {
        _this.setState({
          value: nextProps.value,
          filled: true
        });
      }
    };

    _this.focus = function () {
      _this.setState({
        filled: true,
        focused: true
      });
      _this.inputElement.focus();
    };

    _this.setValidationStatus = function (status, notificationText) {
      _this.handleValidation({
        status: status,
        message: notificationText
      });
      if (status === false) {
        _this._activateAnimation();
      }
    };

    _this.componentDidUpdate = function () {
      if (_this.state.isValid === false) {
        _this.comp.input.showNotification();
      } else {
        _this.comp.input.hideNotification();
      }
    };

    _this.getValidationStatus = function () {
      return _this.state.isValid;
    };

    _this.getValue = function () {
      return _this.state.value;
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
    };

    _this.onFocus = function (event) {
      if (typeof _this.props.onFocus === 'function') {
        _this.props.onFocus(event);
      }

      _this.oldValue = _this.state.value;
      _this.setState({
        focused: true,
        filled: !!event.target.value
      });
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
        _this._activateAnimation();
      }
    };

    _this.handleValidation = function (data) {
      _this.setState({
        isValid: data.status,
        notificationText: data.message
      });
    };

    _this._activateAnimation = function () {
      _this.setState({
        animated: true
      });
    };

    _this.component = _this.component || (0, _utils.connectNotificationTextField)(_TextFieldStateless2.default);


    _this.state = {
      value: props.value || '',
      filled: props.filled || !!_this.props.value || false,
      focused: !!props.focused,
      isValid: null,
      animated: false,
      notificationText: _this.props.notificationText || ''
    };

    _this.oldValue = '';
    _this.inputElement = null;
    _this.inputDOMElement = null;

    return _this;
  }

  (0, _createClass3.default)(TextField, [{
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
        isValid: this.state.isValid,
        animated: this.state.animated,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange,
        notification: { code: 'N2B', text: this.state.notificationText }
      }));
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