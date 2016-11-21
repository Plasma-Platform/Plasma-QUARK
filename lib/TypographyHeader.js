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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypographyHeader = function (_Component) {
  (0, _inherits3.default)(TypographyHeader, _Component);

  function TypographyHeader() {
    (0, _classCallCheck3.default)(this, TypographyHeader);
    return (0, _possibleConstructorReturn3.default)(this, (TypographyHeader.__proto__ || (0, _getPrototypeOf2.default)(TypographyHeader)).apply(this, arguments));
  }

  (0, _createClass3.default)(TypographyHeader, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var typoClass = (0, _classnames3.default)((_classnames = {
        'TMUI__TypographyHeader': true
      }, (0, _defineProperty3.default)(_classnames, 'TMUI__TypographyText--' + (this.props.themeType || 'light'), true), (0, _defineProperty3.default)(_classnames, 'TMUI__TypographyHeader--' + this.props.size, true), (0, _defineProperty3.default)(_classnames, this.props.className, this.props.className), _classnames));

      switch (this.props.size) {
        case 0:
          return _react2.default.createElement(
            'h0',
            { className: typoClass },
            this.props.children
          );
        case 1:
          return _react2.default.createElement(
            'h1',
            { className: typoClass },
            this.props.children
          );
        case 2:
          return _react2.default.createElement(
            'h2',
            { className: typoClass },
            this.props.children
          );
        case 3:
          return _react2.default.createElement(
            'h3',
            { className: typoClass },
            this.props.children
          );
      }
    }
  }]);
  return TypographyHeader;
}(_react.Component);

TypographyHeader.propTypes = {
  size: _react.PropTypes.oneOf([0, 1, 2, 3]).isRequired,
  themeType: _react.PropTypes.string,
  className: _react.PropTypes.string
};
exports.default = TypographyHeader;