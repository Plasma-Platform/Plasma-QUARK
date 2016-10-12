'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popup = function (_React$Component) {
  (0, _inherits3.default)(Popup, _React$Component);

  function Popup() {
    (0, _classCallCheck3.default)(this, Popup);
    return (0, _possibleConstructorReturn3.default)(this, (Popup.__proto__ || (0, _getPrototypeOf2.default)(Popup)).apply(this, arguments));
  }

  (0, _createClass3.default)(Popup, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var addClassName = this.props.className ? ' ' + this.props.className : '';
      var bgClassName = ' popup_bg_' + this.props.bg;
      var paddingClassName = ' popup_padding_' + this.props.padding;
      var fullClassName = 'popup' + paddingClassName + bgClassName + addClassName;

      var bg = _react2.default.createElement('div', {
        className: 'popup__bg',
        onClick: this.props.onRequestClose
      });

      var closeBtn = _react2.default.createElement(
        'button',
        {
          className: 'popup__close-btn',
          type: 'button',
          'aria-label': this.props.closeText,
          onClick: this.props.onRequestClose
        },
        _react2.default.createElement(
          'span',
          { className: 'popup__close-text' },
          this.props.closeText
        )
      );

      var content = _react2.default.createElement(
        'div',
        { className: 'popup__content' },
        this.props.showCloseBtn ? closeBtn : null,
        this.props.children
      );

      var inner = _react2.default.createElement(
        'div',
        { className: 'popup__inner', role: 'dialog' },
        bg,
        content
      );

      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        {
          component: 'div',
          className: fullClassName,
          id: this.props.id ? this.props.id : null,
          ref: function ref(_ref) {
            _this2.container = _ref;
          },
          transitionAppear: false,
          transitionLeave: true,
          transitionLeaveTimeout: 0,
          transitionEnter: true,
          transitionEnterTimeout: 0,
          transitionName: 'popup-transition'
        },
        this.props.open === true ? inner : null
      );
    }
  }]);
  return Popup;
}(_react2.default.Component);

Popup.propTypes = {
  open: _react2.default.PropTypes.bool.isRequired,
  bg: _react2.default.PropTypes.oneOf(['transparent', 'fill']).isRequired,
  padding: _react2.default.PropTypes.oneOf(['medium', 'large']).isRequired,
  showCloseBtn: _react2.default.PropTypes.bool,
  closeText: _react2.default.PropTypes.string.isRequired,
  className: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.string
};
exports.default = Popup;