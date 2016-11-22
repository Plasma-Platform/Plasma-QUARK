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

var _TypographyHeader = require('../TypographyHeader.js');

var _TypographyHeader2 = _interopRequireDefault(_TypographyHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var H2 = function (_Component) {
  (0, _inherits3.default)(H2, _Component);

  function H2() {
    (0, _classCallCheck3.default)(this, H2);
    return (0, _possibleConstructorReturn3.default)(this, (H2.__proto__ || (0, _getPrototypeOf2.default)(H2)).apply(this, arguments));
  }

  (0, _createClass3.default)(H2, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _TypographyHeader2.default,
        {
          className: this.props.className,
          size: 2,
          themeType: this.props.themeType
        },
        this.props.children
      );
    }
  }]);
  return H2;
}(_react.Component);

H2.propTypes = {
  themeType: _react.PropTypes.string,
  className: _react.PropTypes.string
};
exports.default = H2;