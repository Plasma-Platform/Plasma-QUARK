'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

exports.default = connectNotificationTrigger;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function connectNotificationTrigger(Component, props) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    (0, _inherits3.default)(NotificationTrigger, _React$Component);

    function NotificationTrigger(props, context) {
      (0, _classCallCheck3.default)(this, NotificationTrigger);

      var _this = (0, _possibleConstructorReturn3.default)(this, (NotificationTrigger.__proto__ || (0, _getPrototypeOf2.default)(NotificationTrigger)).call(this, props, context));

      _this.state = {
        notification: null
      };

      _this.getTargetCoords = function () {
        var target = _reactDom2.default.findDOMNode(_this.target);

        var data = {
          top: target.offsetTop,
          left: target.offsetLeft,
          width: target.offsetWidth,
          height: target.offsetHeight
        };

        return data;
      };

      _this.showNotification = function () {
        if (!_this.popup) {
          _this.targetNode = _reactDom2.default.findDOMNode(_this.target);

          var preparedNotification = (0, _.prepareNotification)(_this.props.notification, _this.hideNotification);

          _this.notification = _react2.default.cloneElement(preparedNotification, {
            ref: function ref(c) {
              return _this.notification = c;
            }
          });
          _this.popup = document.createElement('div');
          _this.targetNode.appendChild(_this.popup);
          _reactDom2.default.render(_this.notification, _this.popup);
          setTimeout(function () {
            _this.setState({ notification: _this.notification });
            if (_this.props.notificationAlt.status) {
              _this.calcSidePosition();
            }
            _this.handleResize();
          }, 100);
        }
      };

      _this.removeNotification = function () {
        if (_this.popup) {
          _reactDom2.default.unmountComponentAtNode(_this.popup);
          if (_this.targetNode) {
            _this.targetNode.removeChild(_this.popup);
          }
          _this.popup = null;
          _this.setState({ notification: null });
          _this.props.afterClose();
        }
      };

      _this.hideNotification = function (e) {
        var forceClose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (_this.popup) {
          var closeClassname = 'animated-tooltip_close_' + _this.notification.props.position;
          var popupNode = _this.popup.childNodes[0];
          var relativityCheck = void 0;
          var changeEvent = void 0;
          var detectEnterAction = void 0;

          if (e !== undefined) {
            relativityCheck = popupNode.contains(e.target);
            changeEvent = e.type === 'change';
            /** need this stuff for not closing uncloseable tooltips if something was typed in another input and Enter pressed **/
            detectEnterAction = !!(e.clientX === 0 && e.clientY === 0);
          }

          if (forceClose || relativityCheck || changeEvent || _this.props.closeOnCLickOutside && detectEnterAction === false) {
            popupNode.classList.add(closeClassname);
            popupNode.addEventListener('animationend', _this.removeNotification);
          }
        }
      };

      _this.handleClosePopover = function (e) {
        var clickedTargetClasses = e.target.classList;
        var isAnyNotification = document.getElementsByClassName('notification').length;

        /** elements which cause no close effect when they are clicked **/
        var matchedClasses = ['abstract-field', 'text-area__input', 'text-field__input', 'notification', 'notification__container', 'notification__text', 'password-toggle'];

        if (clickedTargetClasses !== null) {
          /** checks if any match of classes in targeted element and template classes **/
          for (var i = 0; i < clickedTargetClasses.length; i++) {
            if (matchedClasses.indexOf(clickedTargetClasses[i]) >= 0) {
              return;
            }
          }
        }

        /** if no notification on page - do nothing **/
        if (isAnyNotification === 0) {
          return;
        }

        if (clickedTargetClasses.contains('notification__closeBlock__closeArea') && _this.props.closeOnCLickOutside === false || _this.props.closeOnCLickOutside === true) {
          e.stopPropagation();

          if ((0, _.isMouseOutOfComponent)({
            container: _this.state.notification,
            pageX: e.pageX,
            pageY: e.pageY
          })) {
            _this.hideNotification(e);
            _this.props.resetValidationStatus();
            if (typeof _this.props.onHide === 'function') {
              _this.props.onHide();
            }
          }
        }
      };

      _this.handleResize = function () {
        if (_this.notification) {
          var targetCoords = _this.getTargetCoords();
          var notificationCoords = _this.calcNotificationCoords(targetCoords);

          _this.notification.setPosition(notificationCoords);

          if (_this.props.notificationAlt.status) {
            setTimeout(function () {
              _this.calcSidePosition();
            }, 150);
          }
        }
      };

      _this.rerenderNotice = function (newCode) {
        var _this$props$notificat = _this.props.notification,
            text = _this$props$notificat.text,
            maxWidth = _this$props$notificat.maxWidth,
            button = _this$props$notificat.button,
            closeIconId = _this$props$notificat.closeIconId;

        var newTooltip = (0, _.prepareNotification)({
          code: newCode || _this.originalCode,
          button: button,
          text: text,
          closeIconId: closeIconId,
          maxWidth: maxWidth
        }, _this.hideNotification);
        _this.notification = _react2.default.cloneElement(newTooltip, {
          ref: function ref(c) {
            return _this.notification = c;
          }
        });
        _reactDom2.default.render(_this.notification, _this.popup);
      };

      _this.lastWidth = 0;
      _this._originalCode = null;
      if (typeof props.notification.button !== 'undefined') {
        if (typeof props.notification.button.onClick === 'string') {
          switch (props.notification.button.onClick) {
            case 'close':
              props.notification.button.onClick = _this.hideNotification;
              break;
            default:
              break;
          }
        }
      }
      return _this;
    }

    (0, _createClass3.default)(NotificationTrigger, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('click', this.handleClosePopover);
        window.addEventListener('touchstart', this.handleClosePopover);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.hideNotification();

        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('click', this.handleClosePopover);
        window.removeEventListener('touchstart', this.handleClosePopover);
      }
    }, {
      key: 'calcSidePosition',
      value: function calcSidePosition() {
        if (!this.notification) {
          return false;
        }
        var notification = _reactDom2.default.findDOMNode(this.notification);
        var windowWidth = window.innerWidth;
        var rect = notification.getBoundingClientRect();
        var rightOffSet = windowWidth - rect.right;
        switch (this.notification.props.position) {
          case 'left':
            if (rect.left <= 0 && this.lastWidth === 0) {
              this.lastWidth = windowWidth + rect.left * -1 * 2;
              this.originalCode = this.props.notification.code;
            }

            if (windowWidth > this.lastWidth) {
              this.lastWidth = 0;
            } else if (this.lastWidth !== 0) {
              this.rerenderNotice(this.props.notificationAlt.type);
            }
            break;
          case 'right':
            if (rightOffSet <= 0 && this.lastWidth === 0) {
              this.lastWidth = windowWidth + rightOffSet * -1 * 2;
              this.originalCode = this.props.notification.code;
            } else if (windowWidth > this.lastWidth) {
              this.lastWidth = 0;
            }

            if (this.lastWidth !== 0) {
              this.rerenderNotice(this.props.notificationAlt.type);
            }
            break;
          case 'top':
            if (windowWidth > this.lastWidth && this.lastWidth !== 0) {
              this.lastWidth = 0;
              this.rerenderNotice(this.originalCode);
            }
            break;
          case 'bottom':
            if (windowWidth > this.lastWidth && this.lastWidth !== 0) {
              this.lastWidth = 0;
              this.rerenderNotice(this.originalCode);
            }
        }
        if (this.lastWidth !== 0) {
          var targetCoords = this.getTargetCoords();
          var notificationCoords = this.calcNotificationCoords(targetCoords);
          this.notification.setPosition(notificationCoords);
        }
      }
    }, {
      key: 'calcNotificationCoords',
      value: function calcNotificationCoords(targetCoords) {
        var coords = {};
        var width = targetCoords.width,
            height = targetCoords.height;

        var notification = _reactDom2.default.findDOMNode(this.notification);
        switch (this.notification.props.position) {
          case 'left':
            coords.top = height / 2 - notification.offsetHeight / 2;
            coords.left = -(notification.offsetWidth + 20);
            break;
          case 'right':
            coords.top = height / 2 - notification.offsetHeight / 2;
            coords.left = width + 20;
            break;
          case 'top':
            coords.top = -(notification.offsetHeight + 20);
            coords.left = width / 2 - notification.offsetWidth / 2;
            break;
          default:
            coords.top = height + 20;
            coords.left = width / 2 - notification.offsetWidth / 2;
        }

        return coords;
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(Component, (0, _extends3.default)({}, this.props, {
          ref: function ref(c) {
            return _this2.target = c;
          },
          handleHideNotification: this.hideNotification
        }));
      }
    }, {
      key: 'originalCode',
      set: function set(value) {
        if (this._originalCode === null) {
          this._originalCode = value;
        }
      },
      get: function get() {
        return this._originalCode;
      }
    }]);
    return NotificationTrigger;
  }(_react2.default.Component), _class.propTypes = {
    notification: _react.PropTypes.object,
    popover: _react.PropTypes.object,
    afterClose: _react.PropTypes.func
  }, _class.defaultProps = {
    afterClose: function afterClose() {}
  }, _temp;
}