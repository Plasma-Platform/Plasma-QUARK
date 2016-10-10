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

var _N2B = require('ui-toolkit/lib/notifications/N2B');

var _N2B2 = _interopRequireDefault(_N2B);

var _TextAreaStateless = require('./TextAreaStateless.js');

var _TextAreaStateless2 = _interopRequireDefault(_TextAreaStateless);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextArea = function (_Component) {
  (0, _inherits3.default)(TextArea, _Component);

  function TextArea(props, context) {
    (0, _classCallCheck3.default)(this, TextArea);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TextArea.__proto__ || (0, _getPrototypeOf2.default)(TextArea)).call(this, props, context));

    _this.getValue = function () {
      return _this.state.value;
    };

    _this.componentWillReceiveProps = function (nextProps) {
      if (nextProps.value !== _this.props.value) {
        _this.setState({
          value: nextProps.value,
          fieldFilled: true
        });
      }
    };

    _this.setValidationStatus = function (status, notificationText) {
      _this.handleValidation({ status: status, notificationText: notificationText });
    };

    _this.onChange = function (e) {
      if (typeof _this.props.onChange === 'function') {
        _this.props.onChange(e);
      }

      _this.setState({
        value: _this.comp.input.target.textareaInput.value
      });

      _this.zeroingInputCounter();
    };

    _this.onFocus = function (e) {
      _this.setState({
        isValid: null,
        notificationText: '',
        fieldFilled: true,
        inFocus: true
      });
    };

    _this.onBlur = function (callback, e) {
      // обрезаем пробелы по краям введенного значения
      if (_this.state.value) {
        _this.setState({
          value: _this.state.value.trim()
        });
      }

      if (!_this.state.value) {
        _this.setState({
          fieldFilled: false
        });
      }

      // сбрасываем статус, что курсор юзера находится в поле
      _this.setState({
        inFocus: false
      });

      if (typeof _this.props.onValidate === 'function') {
        _this.props.onValidate().then(function (data) {
          _this.handleValidation(data);
          callback();
        });
      }
    };

    _this.handleValidation = function (data) {
      _this.setState({
        isValid: data.status,
        notificationText: data.message
      });
    };

    _this.zeroingInputCounter = function () {
      var textareaElement = _this.comp.input.target.textareaInput;

      if (textareaElement.value === 0) {
        return;
      }

      var currentValue = _this.props.maxLength - (textareaElement ? textareaElement.value.length : 0),
          currentMaxValue = Math.max(0, currentValue);

      _this.setState({
        limitCounter: currentMaxValue
      });
    };

    _this.component = _this.component || (0, _utils.connectNotificationTextField)(_TextAreaStateless2.default);


    _this.state = {
      value: props.value || '',
      limitCounter: 0,
      fieldFilled: !!props.value,
      inFocus: false,
      isValid: null,
      notificationtext: _this.props.notificationText || ''
    };
    return _this;
  }

  // приводим к нулю, возможные отрицательные значения, которые появляются в счетчике
  // при монтировании компонента с заполненным значением, превышающим установвленный лимит


  (0, _createClass3.default)(TextArea, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var DecoratedTextAreaField = this.component;

      return _react2.default.createElement(DecoratedTextAreaField, {
        ref: function ref(comp) {
          return _this2.comp = comp;
        },
        id: this.props.id,
        fieldType: this.props.fieldType,
        type: this.props.type,
        label: this.props.label,
        className: this.props.className,
        disabled: this.props.disabled,
        onChange: this.onChange,
        maxLength: this.props.maxLength,
        limitCounter: this.state.limitCounter,
        value: this.state.value,
        isValid: this.state.isValid,
        fieldFilled: this.state.fieldFilled,
        onFocus: this.onFocus,
        inFocus: this.state.inFocus,
        onBlur: this.onBlur,
        notification: { code: 'N2B', text: this.state.notificationText }
      });
    }
  }]);
  return TextArea;
}(_react.Component);

exports.default = TextArea;