'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dropdown = require('../Dropdown.jsx');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DD3 = function (_React$Component) {
  _inherits(DD3, _React$Component);

  function DD3(props) {
    _classCallCheck(this, DD3);

    var _this = _possibleConstructorReturn(this, (DD3.__proto__ || Object.getPrototypeOf(DD3)).call(this, props));

    _this.getValue = function () {
      return _this.dropdown.getValue();
    };

    _this.getValue = _this.getValue.bind(_this);
    return _this;
  }

  _createClass(DD3, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_Dropdown2.default, _extends({}, this.props, {
        ref: function ref(_ref) {
          _this2.dropdown = _ref;
        },
        type: 3,
        showFilter: true
      }));
    }
  }]);

  return DD3;
}(_react2.default.Component);

exports.default = DD3;