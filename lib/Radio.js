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

var Radio = function (_React$Component) {
  (0, _inherits3.default)(Radio, _React$Component);

  function Radio(props) {
    (0, _classCallCheck3.default)(this, Radio);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Radio.__proto__ || (0, _getPrototypeOf2.default)(Radio)).call(this, props));

    _this.handleKeyUp = function (event) {
      _this.props.onKeyUp ? _this.props.onKeyUp() : null;

      if (event.keyCode === 13 && _this.input.checked === false) {
        _this.input.checked = !_this.input.checked;
        _this.label.blur();
        _this.props.onChange ? _this.props.onChange() : null;
      }
    };

    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Radio, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          id = _props.id,
          name = _props.name,
          label = _props.label,
          checked = _props.checked,
          tabIndex = _props.tabIndex,
          onKeyUp = _props.onKeyUp,
          props = (0, _objectWithoutProperties3.default)(_props, ['className', 'id', 'name', 'label', 'checked', 'tabIndex', 'onKeyUp']);

      var addClassName = className ? ' ' + className : '';

      return _react2.default.createElement(
        'div',
        {
          className: 'radio' + addClassName
        },
        _react2.default.createElement('input', (0, _extends3.default)({}, props, {
          className: 'radio__input',
          id: id,
          name: name,
          type: 'radio',
          defaultChecked: checked,
          ref: function ref(_ref) {
            _this2.input = _ref;
          }
        })),
        _react2.default.createElement(
          'label',
          {
            className: 'radio__label',
            htmlFor: id,
            tabIndex: tabIndex || this.props.tabIndex,
            onKeyUp: this.handleKeyUp,
            ref: function ref(_ref2) {
              _this2.label = _ref2;
            }
          },
          label
        )
      );
    }
  }]);
  return Radio;
}(_react2.default.Component);

Radio.propTypes = {
  className: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.string.isRequired,
  name: _react2.default.PropTypes.string.isRequired
};
Radio.defaultProps = {
  tabIndex: 0
};
exports.default = Radio;