'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var Switcher = function (_React$Component) {
  (0, _inherits3.default)(Switcher, _React$Component);

  function Switcher() {
    (0, _classCallCheck3.default)(this, Switcher);
    return (0, _possibleConstructorReturn3.default)(this, (Switcher.__proto__ || (0, _getPrototypeOf2.default)(Switcher)).apply(this, arguments));
  }

  (0, _createClass3.default)(Switcher, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var size = _props.size;
      var className = _props.className;
      var id = _props.id;
      var name = _props.name;
      var label = _props.label;
      var checked = _props.checked;
      var props = (0, _objectWithoutProperties3.default)(_props, ['size', 'className', 'id', 'name', 'label', 'checked']);


      var addClassName = className ? ' ' + className : '';

      return _react2.default.createElement(
        'div',
        {
          className: 'switcher switcher_size_' + size + addClassName,
          ref: function ref(switcher) {
            return _this2.switcher = switcher;
          }
        },
        _react2.default.createElement('input', (0, _extends3.default)({}, props, {
          className: 'switcher__input',
          id: id,
          name: name,
          type: 'radio',
          defaultChecked: checked,
          ref: function ref(_ref) {
            _this2.input = _ref;
          }
        })),
        _react2.default.createElement(
          'label',
          {
            className: 'switcher__label',
            htmlFor: id
          },
          label
        )
      );
    }
  }]);
  return Switcher;
}(_react2.default.Component);

Switcher.propTypes = {
  size: _react2.default.PropTypes.oneOf(['medium', 'large']).isRequired,
  className: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.string.isRequired,
  name: _react2.default.PropTypes.string.isRequired
};
exports.default = Switcher;