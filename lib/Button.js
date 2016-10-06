'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Button.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var widthType = _props.widthType;
      var heightType = _props.heightType;
      var roundedType = _props.roundedType;
      var bgType = _props.bgType;
      var icon = _props.icon;
      var className = _props.className;

      var props = _objectWithoutProperties(_props, ['widthType', 'heightType', 'roundedType', 'bgType', 'icon', 'className']);

      var widthClassName = ' button_width_' + widthType;
      var heightClassName = ' button_height_' + heightType;
      var roundClassName = ' button_rounded_' + roundedType;
      var bgClassName = this.props.disabled ? ' button_bg_disabled' : ' button_bg_' + bgType;
      var iconClassName = icon ? ' icon icon-' + icon : '';
      var addClassName = className ? ' ' + className : '';
      var fullClassName = 'button' + widthClassName + heightClassName + roundClassName + bgClassName + iconClassName + addClassName;

      if (this.props.type === 'link') {
        return _react2.default.createElement(
          'a',
          _extends({}, props, {
            className: fullClassName
          }),
          this.props.children
        );
      } else {
        return _react2.default.createElement(
          'button',
          _extends({}, props, {
            className: fullClassName,
            ref: function ref(_ref) {
              _this2.button = _ref;
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
  type: _react2.default.PropTypes.oneOf(['button', 'submit', 'reset', 'link'])
};
Button.defaultProps = {
  type: 'button'
};
exports.default = Button;