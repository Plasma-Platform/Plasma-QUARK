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

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

var _isRetina = require('is-retina');

var _isRetina2 = _interopRequireDefault(_isRetina);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Avatar = function (_React$Component) {
  (0, _inherits3.default)(Avatar, _React$Component);

  function Avatar(props) {
    (0, _classCallCheck3.default)(this, Avatar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Avatar.__proto__ || (0, _getPrototypeOf2.default)(Avatar)).call(this, props));

    _this.state = {
      avatarSrc: _this.props.src || _this.getGravatarUrl(),
      isAvatarLoadError: false
    };


    _this.handleAvatarLoadError = _this.handleAvatarLoadError.bind(_this);

    _this.bgColors = ['#1a76d2', '#546e7a', '#e64a19', '#0b8738', '#ffa001', '#996969', '#42a5f5', '#243238', '#006023', '#ff6f00'];

    _this.avatarClassName = _this.props.className ? 'avatar ' + _this.props.className : 'avatar';
    return _this;
  }

  (0, _createClass3.default)(Avatar, [{
    key: 'getGravatarUrl',
    value: function getGravatarUrl() {
      return '//www.gravatar.com/avatar/' + (0, _md2.default)(this.props.email) + '?s=' + ((0, _isRetina2.default)() ? this.props.size * 2 : this.props.size) + '&d=404';
    }
  }, {
    key: 'handleAvatarLoadError',
    value: function handleAvatarLoadError() {
      if (this.state.avatarSrc === this.props.src && this.props.email.length > 0) {
        this.setState({
          avatarSrc: this.getGravatarUrl(),
          isAvatarLoadError: false
        });
      } else if (this.state.avatarSrc === this.getGravatarUrl()) {
        this.setState({
          avatarSrc: '',
          isAvatarLoadError: true
        });
      }
    }
  }, {
    key: 'renderAvatarImgByInitials',
    value: function renderAvatarImgByInitials() {
      var nameParts = this.props.name.split(' ');
      var emailParts = this.props.email.split('');

      var bgColor = this.bgColors[Math.floor(Math.random() * 10 + 1)];

      var initials = void 0;

      if (nameParts.length > 1 && nameParts[0].length === 1 && nameParts[1].length === 1) {
        initials = '' + nameParts[0] + nameParts[1];
      } else if (emailParts.length > 1 && emailParts[0].length === 1 && emailParts[1].length === 1) {
        initials = '' + emailParts[0] + emailParts[1];
      } else {
        initials = 'N/A';
      }

      return _react2.default.createElement(
        'svg',
        {
          className: this.avatarClassName,
          height: this.props.size,
          width: this.props.size,
          viewBox: '0 0 ' + this.props.size + ' ' + this.props.size
        },
        _react2.default.createElement('rect', {
          width: this.props.size,
          height: this.props.size,
          stroke: bgColor,
          'stroke-width': '0',
          fill: bgColor
        }),
        _react2.default.createElement(
          'text',
          {
            x: this.props.size / 2,
            y: this.props.size / 2,
            fill: '#fff',
            fontSize: this.props.size / 3,
            fontFamily: 'PT Sans, sans-serif',
            textAnchor: 'middle',
            dominantBaseline: 'central'
          },
          initials.toUpperCase()
        )
      );
    }
  }, {
    key: 'renderAvatarImgBySrc',
    value: function renderAvatarImgBySrc() {
      return _react2.default.createElement('img', {
        className: this.avatarClassName,
        src: this.state.avatarSrc,
        alt: this.props.name.length > 0 ? this.props.name : this.props.email,
        onError: this.handleAvatarLoadError
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return this.state.isAvatarLoadError ? this.renderAvatarImgByInitials() : this.renderAvatarImgBySrc();
    }
  }]);
  return Avatar;
}(_react2.default.Component);

Avatar.propTypes = {
  src: _react2.default.PropTypes.string,
  email: _react2.default.PropTypes.string,
  name: _react2.default.PropTypes.string,
  size: _react2.default.PropTypes.number,
  className: _react2.default.PropTypes.string
};
Avatar.defaultProps = {
  size: 60,
  name: '',
  email: ''
};
exports.default = Avatar;