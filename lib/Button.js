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

var Button = function (_React$Component) {
  (0, _inherits3.default)(Button, _React$Component);

  function Button() {
    (0, _classCallCheck3.default)(this, Button);
    return (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).apply(this, arguments));
  }

  (0, _createClass3.default)(Button, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          widthType = _props.widthType,
          heightType = _props.heightType,
          roundedType = _props.roundedType,
          bgType = _props.bgType,
          icon = _props.icon,
          className = _props.className,
          type = _props.type,
          isLoading = _props.isLoading,
          props = (0, _objectWithoutProperties3.default)(_props, ['widthType', 'heightType', 'roundedType', 'bgType', 'icon', 'className', 'type', 'isLoading']);


      var widthClassName = ' button_width_' + widthType;
      var heightClassName = ' button_height_' + heightType;
      var roundClassName = ' button_rounded_' + roundedType;
      var bgClassName = this.props.disabled ? '' : ' button_bg_' + bgType;
      var iconClassName = icon ? ' icon icon-' + icon : '';
      var loadingClassName = isLoading ? ' button_loading' : '';
      var addClassName = className ? ' ' + className : '';
      var fullClassName = 'button' + widthClassName + heightClassName + roundClassName + bgClassName + iconClassName + loadingClassName + addClassName;

      if (type === 'link') {
        return _react2.default.createElement(
          'a',
          (0, _extends3.default)({}, props, {
            className: fullClassName,
            ref: function ref(_ref) {
              _this2.button = _ref;
            }
          }),
          this.props.children
        );
      } else if (type === 'text') {
        return _react2.default.createElement(
          'span',
          (0, _extends3.default)({}, props, {
            className: fullClassName,
            ref: function ref(_ref2) {
              _this2.button = _ref2;
            }
          }),
          this.props.children
        );
      } else {
        return _react2.default.createElement(
          'button',
          (0, _extends3.default)({}, props, {
            type: type,
            className: fullClassName,
            ref: function ref(_ref3) {
              _this2.button = _ref3;
            }
          }),
          this.props.children
        );
      }
    }
  }]);
  return Button;
}(_react2.default.Component);

Button.propTypes = {
  widthType: _react2.default.PropTypes.oneOf(['square', 'auto', 'full']).isRequired,
  heightType: _react2.default.PropTypes.oneOf(['medium', 'large']).isRequired,
  roundedType: _react2.default.PropTypes.oneOf(['all', 'bottom']).isRequired,
  bgType: _react2.default.PropTypes.oneOf(['facebook', 'twitter', 'google-plus', 'pinterest', 'vk', '1', '2', '3']).isRequired,
  icon: _react2.default.PropTypes.string,
  className: _react2.default.PropTypes.string,
  type: _react2.default.PropTypes.oneOf(['button', 'submit', 'reset', 'link', 'text']),
  isLoading: _react2.default.PropTypes.bool
};
Button.defaultProps = {
  type: 'button'
};
exports.default = Button;