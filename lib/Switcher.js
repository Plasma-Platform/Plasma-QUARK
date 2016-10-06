'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Switcher.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Switcher = function (_React$Component) {
  _inherits(Switcher, _React$Component);

  function Switcher() {
    _classCallCheck(this, Switcher);

    return _possibleConstructorReturn(this, (Switcher.__proto__ || Object.getPrototypeOf(Switcher)).apply(this, arguments));
  }

  _createClass(Switcher, [{
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

      var props = _objectWithoutProperties(_props, ['size', 'className', 'id', 'name', 'label', 'checked']);

      var addClassName = className ? ' ' + className : '';

      return _react2.default.createElement(
        'div',
        {
          className: 'switcher switcher_size_' + size + addClassName,
          ref: function ref(switcher) {
            return _this2.switcher = switcher;
          }
        },
        _react2.default.createElement('input', _extends({}, props, {
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