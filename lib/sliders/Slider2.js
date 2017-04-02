'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = Slider2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Slider = require('../Slider.js');

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Slider2(props) {
  return _react2.default.createElement(_Slider2.default, (0, _extends3.default)({
    orientation: 'vertical'
  }, props));
};