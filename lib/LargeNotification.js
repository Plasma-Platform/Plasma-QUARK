'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _typography = require('ui-toolkit/lib/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LargeNotification = function (_Component) {
  (0, _inherits3.default)(LargeNotification, _Component);

  function LargeNotification() {
    (0, _classCallCheck3.default)(this, LargeNotification);
    return (0, _possibleConstructorReturn3.default)(this, (LargeNotification.__proto__ || (0, _getPrototypeOf2.default)(LargeNotification)).apply(this, arguments));
  }

  (0, _createClass3.default)(LargeNotification, [{
    key: 'render',
    value: function render() {
      var classes = (0, _classnames3.default)((0, _defineProperty3.default)({
        'notification_large': true
      }, this.props.className, this.props.className));

      var Text = _typography2.default[this.props.typographyCode];

      return _react2.default.createElement(
        'div',
        { className: classes, style: { width: this.props.width } },
        _react2.default.createElement('div', { className: 'notification_large__icon' }),
        _react2.default.createElement(
          'div',
          { className: 'notification_large__text' },
          _react2.default.createElement(
            Text,
            { type: 'default' },
            this.props.text
          )
        )
      );
    }
  }]);
  return LargeNotification;
}(_react.Component);

LargeNotification.propTypes = {
  className: _react.PropTypes.string,
  text: _react.PropTypes.string.isRequired,
  typographyCode: _react.PropTypes.oneOf(['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'H3']).isRequired,
  width: _react.PropTypes.string
};
exports.default = LargeNotification;