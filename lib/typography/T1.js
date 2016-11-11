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

var _TypographyText = require('../TypographyText.js');

var _TypographyText2 = _interopRequireDefault(_TypographyText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var T1 = function (_Component) {
    (0, _inherits3.default)(T1, _Component);

    function T1() {
        (0, _classCallCheck3.default)(this, T1);
        return (0, _possibleConstructorReturn3.default)(this, (T1.__proto__ || (0, _getPrototypeOf2.default)(T1)).apply(this, arguments));
    }

    (0, _createClass3.default)(T1, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _TypographyText2.default,
                { className: this.props.className, type: this.props.type, size: 1 },
                this.props.children
            );
        }
    }]);
    return T1;
}(_react.Component);

T1.propTypes = {
    type: _react.PropTypes.string,
    children: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
    className: _react.PropTypes.string
};
exports.default = T1;