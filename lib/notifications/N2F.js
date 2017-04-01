'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = N2F;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Notification = require('../Notification.js');

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function N2F(props) {
  var children = props.children,
      notificationProps = (0, _objectWithoutProperties3.default)(props, ['children']);

  return _react2.default.createElement(
    _Notification2.default,
    (0, _extends3.default)({
      type: 'error',
      position: 'absolute',
      placement: 'bottom',
      height: 'auto',
      width: 'auto',
      arrowPlacement: 'top'
    }, notificationProps),
    children
  );
}