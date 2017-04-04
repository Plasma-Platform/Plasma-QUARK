'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = Button;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(props) {
  var widthType = props.widthType,
      heightType = props.heightType,
      roundedType = props.roundedType,
      bgType = props.bgType,
      icon = props.icon,
      className = props.className,
      type = props.type,
      isLoading = props.isLoading,
      children = props.children,
      buttonProps = (0, _objectWithoutProperties3.default)(props, ['widthType', 'heightType', 'roundedType', 'bgType', 'icon', 'className', 'type', 'isLoading', 'children']);


  var widthClassName = ' button_width_' + widthType;
  var heightClassName = ' button_height_' + heightType;
  var roundClassName = ' button_rounded_' + roundedType;
  var bgClassName = props.disabled ? '' : ' button_bg_' + bgType;
  var loadingClassName = isLoading ? ' button_loading' : '';
  var addClassName = className ? ' ' + className : '';
  var buttonClassName = 'button' + widthClassName + heightClassName + roundClassName + bgClassName + loadingClassName + addClassName;
  var iconClassName = icon ? ' button__icon button__icon-' + icon + ' icon icon-' + icon : '';

  if (type === 'link') {
    return _react2.default.createElement(
      'a',
      (0, _extends3.default)({}, buttonProps, {
        className: buttonClassName
      }),
      isLoading !== true && iconClassName.length > 0 && _react2.default.createElement('i', { className: iconClassName }),
      children
    );
  } else if (type === 'text') {
    return _react2.default.createElement(
      'span',
      (0, _extends3.default)({}, buttonProps, {
        className: buttonClassName
      }),
      isLoading !== true && iconClassName.length > 0 && _react2.default.createElement('i', { className: iconClassName }),
      children
    );
  } else {
    return _react2.default.createElement(
      'button',
      (0, _extends3.default)({}, buttonProps, {
        type: type,
        className: buttonClassName
      }),
      isLoading !== true && iconClassName.length > 0 && _react2.default.createElement('i', { className: iconClassName }),
      children
    );
  }
}

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
  type: 'button',
  isLoading: false
};