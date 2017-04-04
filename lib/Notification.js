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

var Notification = function (_Component) {
  (0, _inherits3.default)(Notification, _Component);

  function Notification(props) {
    (0, _classCallCheck3.default)(this, Notification);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Notification.__proto__ || (0, _getPrototypeOf2.default)(Notification)).call(this, props));

    _this.state = {
      renderContainer: _this.props.show
    };


    _this.handleAnimationEnd = _this.handleAnimationEnd.bind(_this);
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    _this.removeContainer = _this.removeContainer.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Notification, [{
    key: 'handleAnimationEnd',
    value: function handleAnimationEnd(event) {
      if (event.target === this.container && !this.props.show) {
        window.removeEventListener('click', this.handleClickOutside);

        this.removeContainer();
      } else {
        window.addEventListener('click', this.handleClickOutside);
      }
    }
  }, {
    key: 'handleClickOutside',
    value: function handleClickOutside(event) {
      if (this.props.hideOnClickOutside && this.container && event.target !== this.container && !this.container.contains(event.target) && this.props.show) {
        this.props.onRequestHide();
      }
    }
  }, {
    key: 'removeContainer',
    value: function removeContainer() {
      this.setState({
        renderContainer: false
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.show && !this.state.renderContainer) {
        this.setState({
          renderContainer: true
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          onRequestHide = _props.onRequestHide,
          position = _props.position,
          placement = _props.placement,
          height = _props.height,
          width = _props.width,
          type = _props.type,
          showArrow = _props.showArrow,
          arrowPlacement = _props.arrowPlacement,
          showCloseBtn = _props.showCloseBtn,
          className = _props.className,
          hideOnClickOutside = _props.hideOnClickOutside,
          show = _props.show,
          children = _props.children,
          notificationProps = (0, _objectWithoutProperties3.default)(_props, ['onRequestHide', 'position', 'placement', 'height', 'width', 'type', 'showArrow', 'arrowPlacement', 'showCloseBtn', 'className', 'hideOnClickOutside', 'show', 'children']);


      var notificationPositionClassName = 'tm-quark-notification_position_' + position;
      var notificationShowAtClassName = 'tm-quark-notification_placement_' + placement;
      var notificationHeightClassName = 'tm-quark-notification_height_' + height;
      var notificationWidthClassName = 'tm-quark-notification_width_' + width;
      var notificationTypeClassName = 'tm-quark-notification_type_' + type;
      var notificationArrowClassName = showArrow ? 'tm-quark-notification_arrow-placement_' + arrowPlacement : '';
      var notificationStateClassName = 'tm-quark-notification_' + (show ? 'visible' : 'hidden');

      return this.state.renderContainer ? _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, notificationProps, {
          className: 'tm-quark-notification ' + notificationPositionClassName + ' ' + notificationShowAtClassName + ' ' + notificationHeightClassName + ' ' + notificationWidthClassName + ' ' + notificationTypeClassName + ' ' + notificationArrowClassName + ' ' + notificationStateClassName + ' ' + className,
          onAnimationEnd: this.handleAnimationEnd,
          role: 'alert',
          ref: function ref(_ref) {
            _this2.container = _ref;
          }
        }),
        showCloseBtn && _react2.default.createElement('button', {
          className: 'tm-quark-notification__close-btn',
          type: 'button',
          'aria-label': 'Close',
          onClick: onRequestHide
        }),
        _react2.default.createElement(
          'div',
          { className: 'tm-quark-notification__content' },
          children
        )
      ) : null;
    }
  }]);
  return Notification;
}(_react.Component);

Notification.propTypes = {
  onRequestHide: _react.PropTypes.func,
  position: _react.PropTypes.oneOf(['absolute', 'fixed', 'relative']).isRequired,
  placement: _react.PropTypes.oneOf(['bottom', 'left', 'top', 'right', 'static', 'document-top', 'document-right']).isRequired,
  height: _react.PropTypes.oneOf(['auto', 'fixed-small', 'fixed-medium']).isRequired,
  width: _react.PropTypes.oneOf(['auto', 'full']).isRequired,
  type: _react.PropTypes.oneOf(['default', 'success', 'warning', 'error']).isRequired,
  show: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  showArrow: _react.PropTypes.bool,
  arrowPlacement: _react.PropTypes.oneOf(['bottom', 'left', 'top', 'right']).isRequired,
  showCloseBtn: _react.PropTypes.bool,
  hideOnClickOutside: _react.PropTypes.bool
};
Notification.defaultProps = {
  onRequestHide: function onRequestHide() {},
  show: false,
  showArrow: true,
  showCloseBtn: false,
  hideOnClickOutside: true,
  className: ''
};
exports.default = Notification;