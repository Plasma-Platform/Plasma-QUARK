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

    _this.renderContent = _this.renderContent.bind(_this);
    _this.handleCloseClick = _this.handleCloseClick.bind(_this);
    _this.hideContent = _this.hideContent.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Popup, [{
    key: 'handleCloseClick',
    value: function handleCloseClick() {
      this.content.classList.add('popup__content_animate_hide');
      this.content.addEventListener('animationend', this.hideContent);
    }
  }, {
    key: 'hideContent',
    value: function hideContent() {
      this.content.removeEventListener('animationend', this.hideContent);
      document.body.style.overflow = null;
      this.props.onRequestClose();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.open) {
        document.body.style.overflow = 'hidden';
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.open) {
        document.body.style.overflow = 'hidden';
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.style.overflow = null;
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      var _this2 = this;

      var popupClassName = 'popup' + (this.props.className ? ' ' + this.props.className : '');
      var contentBgClassName = ' popup__content_bg_' + this.props.bg;
      var contentPaddingClassName = ' popup__content_padding_' + this.props.padding;
      var contentClassName = 'popup__content popup__content_animate_show' + contentPaddingClassName + contentBgClassName;
      var closeBtnClassName = 'popup__close-btn popup__close-btn_bg_' + this.props.bg;
      var closeCrossClassName = 'popup__close-cross popup__close-cross_bg_' + this.props.bg;

      return _react2.default.createElement(
        'div',
        {
          className: popupClassName,
          id: this.props.id ? this.props.id : null,
          role: 'dialog',
          ref: function ref(_ref2) {
            _this2.container = _ref2;
          }
        },
        _react2.default.createElement('div', {
          className: 'popup__bg',
          onClick: this.handleCloseClick
        }),
        _react2.default.createElement(
          'div',
          {
            className: contentClassName,
            ref: function ref(_ref) {
              _this2.content = _ref;
            }
          },
          _react2.default.createElement(
            'button',
            {
              className: closeBtnClassName,
              type: 'button',
              'aria-label': this.props.closeText,
              onClick: this.handleCloseClick
            },
            _react2.default.createElement('span', { className: closeCrossClassName })
          ),
          _react2.default.createElement(
            'span',
            { className: 'popup__close-text' },
            this.props.closeText
          ),
          this.props.children
        )
      );
    }
  }, {
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
  padding: _react2.default.PropTypes.oneOf(['none', 'medium', 'large']).isRequired,
  closeText: _react2.default.PropTypes.string.isRequired,
  onRequestClose: _react2.default.PropTypes.func.isRequired,
  className: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.string
};
exports.default = Popup;