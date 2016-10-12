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

var Loader = function (_React$Component) {
  (0, _inherits3.default)(Loader, _React$Component);

  function Loader() {
    (0, _classCallCheck3.default)(this, Loader);
    return (0, _possibleConstructorReturn3.default)(this, (Loader.__proto__ || (0, _getPrototypeOf2.default)(Loader)).apply(this, arguments));
  }

  (0, _createClass3.default)(Loader, [{
    key: 'render',
    value: function render() {
      var addClassName = this.props.className ? ' ' + this.props.className : '';
      var widthClassName = ' loader_width_' + this.props.width;
      var heightClassName = ' loader_height_' + this.props.height;
      var fullClassName = 'loader' + widthClassName + heightClassName + addClassName;

      return _react2.default.createElement(
        'span',
        { className: fullClassName },
        _react2.default.createElement('span', { className: 'loader__line' }),
        _react2.default.createElement('span', { className: 'loader__line' }),
        _react2.default.createElement('span', { className: 'loader__line' })
      );
    }
  }]);
  return Loader;
}(_react2.default.Component);

Loader.propTypes = {
  width: _react2.default.PropTypes.oneOf(['fixed', 'full']).isRequired,
  height: _react2.default.PropTypes.oneOf(['medium', 'large']).isRequired,
  className: _react2.default.PropTypes.string
};
exports.default = Loader;