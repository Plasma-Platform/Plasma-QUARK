'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

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

var StarsRating = function (_Component) {
  (0, _inherits3.default)(StarsRating, _Component);

  function StarsRating(props) {
    (0, _classCallCheck3.default)(this, StarsRating);

    var _this = (0, _possibleConstructorReturn3.default)(this, (StarsRating.__proto__ || (0, _getPrototypeOf2.default)(StarsRating)).call(this, props));

    _this.state = {
      value: _this.props.defaultRating
    };
    return _this;
  }

  (0, _createClass3.default)(StarsRating, [{
    key: 'select',
    value: function select(val) {
      if (!this.props.disabled) {
        this.setState({
          value: val
        }, this.props.onChange.bind(this, val));
      }
    }
  }, {
    key: 'printStarClass',
    value: function printStarClass(value, i) {
      var floor = Math.floor(value);
      var free = value - floor;
      if (floor < i && i - floor === 1) {
        switch (true) {
          case free <= 0.2:
            return 'stars-rating__icon_empty';
          case free <= 0.7:
            return 'stars-rating__icon_half';
          case free <= 0.999:
            return '';
        }
      }
      if (floor < i && i - floor > 1) {
        return 'stars-rating__icon_empty';
      }
      return '';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var starsLength = 5;
      return _react2.default.createElement(
        'div',
        { className: 'stars-rating ' + (this.props.disabled ? '' : 'stars-rating_hovered') },
        (0, _from2.default)({ length: starsLength }).map(function (value, i) {
          i++;
          return _react2.default.createElement('i', {
            key: i,
            className: 'stars-rating__icon ' + _this2.printStarClass(_this2.state.value, i),
            onClick: _this2.select.bind(_this2, i)
          });
        })
      );
    }
  }]);
  return StarsRating;
}(_react.Component);

StarsRating.propTypes = {
  defaultRating: _react2.default.PropTypes.number.isRequired,
  onChange: _react2.default.PropTypes.func,
  value: _react2.default.PropTypes.number,
  disabled: _react2.default.PropTypes.bool
};
StarsRating.defaultProps = {
  onChange: function onChange() {},
  disabled: false
};
exports.default = StarsRating;