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

var _jsBase = require('js-base64');

var _jsBase2 = _interopRequireDefault(_jsBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_jsBase2.default);

var Avatar = function (_React$Component) {
  (0, _inherits3.default)(Avatar, _React$Component);

  function Avatar(props) {
    (0, _classCallCheck3.default)(this, Avatar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Avatar.__proto__ || (0, _getPrototypeOf2.default)(Avatar)).call(this, props));

    _initialiseProps.call(_this);

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


  (0, _createClass3.default)(Avatar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this._setGravatarInfo(newProps);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._setGravatarInfo(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      var html = '';
      var srcExist = !!this.props.src;
      if (srcExist) {
        html = this._getSimpleImageBlock(this.props.src);
      } else if (this.state.status) {
        html = this._getGravatarBlock();
      } else {
        var nameExist = !!this.props.name;
        var emailExist = !!this.props.email;
        if (!nameExist && !emailExist) {
          return false;
        }
        var initials = _gravatarAPI2.default.prepareInitials(nameExist ? this.props.name : this.props.email);
        var color = _gravatarAPI2.default.getColor(initials);
        html = this._getSimpleImageBlock(this._getTextAvatar(initials, color));
      }
      return html;
    }
  }]);
  return Avatar;
}(_react2.default.Component);

Avatar.PropTypes = {
  email: _react2.default.PropTypes.string,
  src: _react2.default.PropTypes.string,
  name: _react2.default.PropTypes.string,
  size: _react2.default.PropTypes.number,
  className: _react2.default.PropTypes.string,
  rating: _react2.default.PropTypes.string
};
Avatar.defaultProps = {
  size: 60,
  rating: 'g',
  className: '',
  src: '',
  name: ''
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this._getTextAvatar = function (name) {
    var bg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#ffffff';

    var SVG = document.createElement('svg');
    SVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    SVG.setAttribute('pointer-events', 'none');
    SVG.setAttribute('width', _this2.state.size);
    SVG.setAttribute('height', _this2.state.size);
    SVG.setAttribute('style', 'background-color: ' + bg);

    var TEXT = document.createElement('text');
    TEXT.setAttribute('text-anchor', 'middle');
    TEXT.setAttribute('y', '50%');
    TEXT.setAttribute('x', '50%');
    TEXT.setAttribute('dy', '0.35em');
    TEXT.setAttribute('style', 'font-family: "PT_Sans",sans-serif; font-size: ' + _this2.props.size * 0.3 + 'px');
    TEXT.setAttribute('pointer-events', 'auto');
    TEXT.setAttribute('fill', 'white');

    TEXT.innerHTML = name;

    SVG.appendChild(TEXT);
    var svgString = SVG.outerHTML.toString();
    return 'data:image/svg+xml;base64,' + _jsBase2.default.Base64.encodeURI(svgString);
  };

  this._getSimpleImageBlock = function () {
    var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    return _react2.default.createElement(
      'div',
      { className: 'avatar ' + _this2.props.className },
      _react2.default.createElement('img', {
        src: src,
        height: _this2.state.size,
        width: _this2.state.size
      })
    );
  };

  this._getGravatarBlock = function () {
    return _react2.default.createElement(
      'div',
      { className: 'avatar ' + _this2.props.className },
      _react2.default.createElement('img', {
        alt: 'initials',
        height: _this2.state.size,
        width: _this2.state.size,
        src: _this2._getTextAvatar(_this2.state.initial, _this2.state.color),
        className: 'avatar__initials'
      }),
      _react2.default.createElement('img', {
        alt: _this2.state.displayName,
        height: _this2.state.size,
        width: _this2.state.size,
        src: _this2.state.avatar,
        className: 'avatar__image'
      })
    );
  };

  this._setGravatarInfo = function (props) {
    var srcExist = !!props.src;
    var emailExist = !!props.email;
    if (!srcExist && emailExist) {
      _gravatarAPI2.default.getProfile(props).then(function (data) {
        _this2.setState(data);
      });
    }
  };
};

exports.default = Avatar;