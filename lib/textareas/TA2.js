'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = TA2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Textarea = require('../Textarea.js');

var _Textarea2 = _interopRequireDefault(_Textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TA2(props) {
  return _react2.default.createElement(_Textarea2.default, (0, _extends3.default)({
    size: 'medium',
    showTextareaIcon: true
  }, props));
};