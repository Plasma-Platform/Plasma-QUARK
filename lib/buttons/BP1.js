'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = BP1;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button.js');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BP1(props) {
  return _react2.default.createElement(
    _Button2.default,
    (0, _extends3.default)({
      widthType: 'auto',
      heightType: 'medium',
      roundedType: 'all',
      bgType: 'pinterest',
      icon: 'pinterest'
    }, props),
    props.children
  );
}