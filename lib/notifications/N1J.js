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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LargeNotification = require('../LargeNotification.js');

var _LargeNotification2 = _interopRequireDefault(_LargeNotification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var N1J = function (_Component) {
  (0, _inherits3.default)(N1J, _Component);

  function N1J() {
    (0, _classCallCheck3.default)(this, N1J);
    return (0, _possibleConstructorReturn3.default)(this, (N1J.__proto__ || (0, _getPrototypeOf2.default)(N1J)).apply(this, arguments));
  }

  (0, _createClass3.default)(N1J, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_LargeNotification2.default, (0, _extends3.default)({}, this.props, {
        className: this.props.className,
        text: this.props.text,
        typographyCode: this.props.typographyCode,
        width: this.props.width
      }));
    }
  }]);
  return N1J;
}(_react.Component);

N1J.propTypes = {
  text: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array, _react.PropTypes.object]).isRequired,
  typographyCode: _react.PropTypes.oneOf(['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'H3']).isRequired,
  width: _react.PropTypes.string,
  className: _react.PropTypes.string
};
exports.default = N1J;