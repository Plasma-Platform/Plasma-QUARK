'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareNotification = prepareNotification;
exports.delay = delay;
exports.clearDelay = clearDelay;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _notifications = require('../notifications');

var _notifications2 = _interopRequireDefault(_notifications);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notificationTimeout = void 0;

function prepareNotification(notification, handleHide) {
  if (notification) {
    var NotificationComponent = _notifications2.default[notification.code];

    return _react2.default.createElement(NotificationComponent, {
      onHideNotification: handleHide,
      text: notification.text,
      maxWidth: notification.maxWidth
    });
  }

  return null;
}

function delay(func) {
  notificationTimeout = setTimeout(func, 200);
}

function clearDelay(func) {
  clearTimeout(notificationTimeout);
  func();
}