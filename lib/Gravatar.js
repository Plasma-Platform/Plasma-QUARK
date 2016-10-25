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

var _gravatarAPI = require('./utils/gravatarAPI.js');

var _gravatarAPI2 = _interopRequireDefault(_gravatarAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Gravatar = function (_React$Component) {
  (0, _inherits3.default)(Gravatar, _React$Component);

  function Gravatar(props) {
    (0, _classCallCheck3.default)(this, Gravatar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Gravatar.__proto__ || (0, _getPrototypeOf2.default)(Gravatar)).call(this, props));

    _this._getTextAvatar = function (name) {
      var bg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#ffffff';

      var SVG = document.createElement('svg');
      SVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      SVG.setAttribute('pointer-events', 'none');
      SVG.setAttribute('width', _this.state.size);
      SVG.setAttribute('height', _this.state.size);
      SVG.setAttribute('style', 'background-color: ' + bg);

      var TEXT = document.createElement('text');
      TEXT.setAttribute('text-anchor', 'middle');
      TEXT.setAttribute('y', '50%');
      TEXT.setAttribute('x', '50%');
      TEXT.setAttribute('dy', '0.35em');
      TEXT.setAttribute('style', 'font-family: "PT_Sans",sans-serif; font-size: ' + _this.props.size * 0.3 + 'px');
      TEXT.setAttribute('pointer-events', 'auto');
      TEXT.setAttribute('fill', 'white');

      TEXT.innerHTML = name;

      SVG.appendChild(TEXT);

      return 'data:image/svg+xml;base64,' + window.btoa(SVG.outerHTML);
    };

    _this.state = {
      status: 0,
      color: '',
      initial: '',
      displayName: '',
      size: _this.props.size,
      avatar: ''
    };
    return _this;
  }

  /**
   * Returns svg avatar based on name provided
   * @param {string} name
   * @param {string} bg
   * @returns {string}
   * @private
   */


  (0, _createClass3.default)(Gravatar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      _gravatarAPI2.default.getProfile(this.props).then(function (data) {
        _this2.setState(data);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      //if user not have account on gravatar nothing do
      if (!this.state.status) return false;
      return _react2.default.createElement(
        'article',
        { className: 'gravatar ' + this.props.className },
        _react2.default.createElement('img', {
          alt: 'initials',
          height: this.state.size,
          width: this.state.size,
          src: this._getTextAvatar(this.state.initial, this.state.color),
          className: 'gravatar__initials'
        }),
        _react2.default.createElement('img', {
          alt: this.state.displayName,
          height: this.state.size,
          width: this.state.size,
          src: this.state.avatar,
          className: 'gravatar__image'
        })
      );
    }
  }]);
  return Gravatar;
}(_react2.default.Component);

Gravatar.PropTypes = {
  email: _react2.default.PropTypes.string,
  size: _react2.default.PropTypes.number,
  className: _react2.default.PropTypes.string,
  rating: _react2.default.PropTypes.string
};
Gravatar.defaultProps = {
  size: 60,
  rating: 'g',
  className: ''
};
exports.default = Gravatar;