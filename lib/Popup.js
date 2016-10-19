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

  function Popup(props) {
    (0, _classCallCheck3.default)(this, Popup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Popup.__proto__ || (0, _getPrototypeOf2.default)(Popup)).call(this, props));

    _this.handleCloseClick = function () {
      _this.container.classList.add('popup_closed');
      _this.container.addEventListener('animationend', _this.hide);
    };

    _this.hide = function () {
      _this.container.removeEventListener('animationend', _this.hide);
      _this.props.onRequestClose();
    };

    _this.renderContent = function () {
      var bgClassName = ' popup_bg_' + _this.props.bg;
      var paddingClassName = ' popup_padding_' + _this.props.padding;
      var addClassName = _this.props.className ? ' ' + _this.props.className : '';
      var fullClassName = 'popup popup_open' + paddingClassName + bgClassName + addClassName;

      return _react2.default.createElement(
        'div',
        {
          className: fullClassName,
          id: _this.props.id ? _this.props.id : null,
          role: 'dialog',
          ref: function ref(_ref) {
            _this.container = _ref;
          }
        },
        _react2.default.createElement('div', {
          className: 'popup__bg',
          onClick: _this.handleCloseClick
        }),
        _react2.default.createElement(
          'div',
          { className: 'popup__content' },
          _react2.default.createElement(
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
          ),
          _this.props.children
        )
      );
    };

    _this.renderContent = _this.renderContent.bind(_this);
    _this.handleCloseClick = _this.handleCloseClick.bind(_this);
    _this.hide = _this.hide.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Popup, [{
    key: 'render',
    value: function render() {
      return this.props.open === true ? this.renderContent() : null;
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
  className: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.string
};
exports.default = Popup;