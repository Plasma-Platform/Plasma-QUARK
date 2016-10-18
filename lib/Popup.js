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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popup = function (_React$Component) {
  (0, _inherits3.default)(Popup, _React$Component);

  function Popup() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Popup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Popup.__proto__ || (0, _getPrototypeOf2.default)(Popup)).call.apply(_ref, [this].concat(args))), _this), _this.renderBg = function () {
      return _react2.default.createElement('div', {
        className: 'popup__bg',
        onClick: _this.handleCloseClick
      });
    }, _this.renderCloseBtn = function () {
      return _this.props.showCloseBtn ? _react2.default.createElement(
        'button',
        {
          className: 'popup__close-btn',
          type: 'button',
          'aria-label': _this.props.closeText,
          onClick: _this.handleCloseClick
        },
        _react2.default.createElement(
          'span',
          { className: 'popup__close-text' },
          _this.props.closeText
        )
      ) : null;
    }, _this.renderContent = function () {
      return _react2.default.createElement(
        'div',
        { className: 'popup__content' },
        _this.renderCloseBtn(),
        _this.props.children
      );
    }, _this.handleCloseClick = function () {
      _this.container.classList.add('popup_closed');
      _this.container.addEventListener('animationend', _this.hide);
    }, _this.hide = function () {
      _this.container.removeEventListener('animationend', _this.hide);
      _this.props.onRequestClose();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Popup, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var bgClassName = ' popup_bg_' + this.props.bg;
      var paddingClassName = ' popup_padding_' + this.props.padding;
      var addClassName = this.props.className ? ' ' + this.props.className : '';
      var fullClassName = 'popup popup_open' + paddingClassName + bgClassName + addClassName;

      return this.props.open === true ? _react2.default.createElement(
        'div',
        {
          className: fullClassName,
          id: this.props.id ? this.props.id : null,
          role: 'dialog',
          ref: function ref(_ref2) {
            _this2.container = _ref2;
          }
        },
        this.renderBg(),
        this.renderContent()
      ) : null;
    }
  }]);
  return Popup;
}(_react2.default.Component);

Popup.propTypes = {
  open: _react2.default.PropTypes.bool.isRequired,
  bg: _react2.default.PropTypes.oneOf(['transparent', 'fill']).isRequired,
  padding: _react2.default.PropTypes.oneOf(['medium', 'large']).isRequired,
  closeText: _react2.default.PropTypes.string.isRequired,
  onRequestClose: _react2.default.PropTypes.func.isRequired,
  showCloseBtn: _react2.default.PropTypes.bool,
  className: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.string
};
exports.default = Popup;