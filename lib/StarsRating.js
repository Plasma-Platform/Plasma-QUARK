'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StarsRating = function (_Component) {
  (0, _inherits3.default)(StarsRating, _Component);

  function StarsRating(props) {
    (0, _classCallCheck3.default)(this, StarsRating);

    var _this = (0, _possibleConstructorReturn3.default)(this, (StarsRating.__proto__ || (0, _getPrototypeOf2.default)(StarsRating)).call(this, props));

    _this.state = {
      stars: [],
      prevStars: []
    };

    _this.hoverStar = function (id) {
      var newStars = _this.state.stars.map(function (star, index) {
        star.fill = index <= id;
        return star;
      });
      _this.setState((0, _extends3.default)({}, _this.state, {
        stars: [].concat((0, _toConsumableArray3.default)(newStars))
      }));
    };

    _this.revertPrev = function () {
      var state = JSON.parse((0, _stringify2.default)(_this.state));
      _this.setState((0, _extends3.default)({}, _this.state, {
        stars: state.prevStars
      }));
    };

    _this.checkStars = function (id) {
      var newStars = _this.state.stars.map(function (star, index) {
        star.fill = index <= id;
        return star;
      });
      _this.setState((0, _extends3.default)({}, _this.state, {
        prevStars: [].concat((0, _toConsumableArray3.default)(newStars))
      }));
      _this.props.checkStars(id + 1);
    };

    for (var i = 0; i < 5; i++) {
      var star = {
        fill: i < props.rating
      };
      _this.state.stars.push(JSON.parse((0, _stringify2.default)(star)));
      _this.state.prevStars.push(JSON.parse((0, _stringify2.default)(star)));
    }
    return _this;
  }

  (0, _createClass3.default)(StarsRating, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      this.refsArray = [];
      return _react2.default.createElement(
        'div',
        { className: 'stars-rating' },
        this.state.stars.map(function (star, i) {
          return _react2.default.createElement('i', {
            key: i,
            'data-id': i,
            ref: function ref(e) {
              _this2.refsArray.push(e);
            },
            onMouseOver: _this2.hoverStar.bind(null, i),
            onMouseOut: _this2.revertPrev,
            onClick: _this2.checkStars.bind(null, i),
            className: 'stars-rating__icon stars-rating__icon_' + (star.fill ? 'fill' : 'empty') });
        })
      );
    }
  }]);
  return StarsRating;
}(_react.Component);

StarsRating.propTypes = {
  rating: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number.isRequired, _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4, 5])]),
  checkStars: _react2.default.PropTypes.func
};
StarsRating.defaultProps = {
  checkStars: function checkStars() {}
};
exports.default = StarsRating;