'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = F2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Field = require('../Field.js');

var _Field2 = _interopRequireDefault(_Field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function F2(props) {
  return _react2.default.createElement(_Field2.default, (0, _extends3.default)({
    size: 'medium',
    showInputIcon: true
  }, props));
};