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

var _fetchJsonp = require('fetch-jsonp');

var _fetchJsonp2 = _interopRequireDefault(_fetchJsonp);

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _isRetina = require('is-retina');

var _isRetina2 = _interopRequireDefault(_isRetina);

var _jsBase = require('js-base64');

var _jsBase2 = _interopRequireDefault(_jsBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var URL = 'https://gravatar.com/';
var DEFAULT = 'https://cdn2wp-templatemonster.netdna-ssl.com/wp-content/uploads/2016/10/onepixel.png'; // default image
var COLORS = [// array colors
'#1A76D2', '#546E7A', '#E64A19', '#0B8738', '#FFA001', '#996969', '#42A5F5', '#243238', '#006023', '#FF6F00'];

var Avatar = function (_React$Component) {
  (0, _inherits3.default)(Avatar, _React$Component);

  function Avatar(props) {
    (0, _classCallCheck3.default)(this, Avatar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Avatar.__proto__ || (0, _getPrototypeOf2.default)(Avatar)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      status: null,
      color: '',
      initial: '',
      displayName: '',
      size: _this.props.size,
      avatar: ''
    };
    return _this;
  }

  /**
   * Main function
   *
   * @param {Object} atts
   * @returns {Promise.<T>}
   */


  /**
   * Generate size for retina display
   *
   * @param {number} size
   * @returns {number}
   * @private
   */


  /**
   * Generate src for gravatar with query params
   *
   * @param {String} cleanURL
   * @param {Object} atts
   * @returns {string}
   * @private
   */


  /**
   * Get initials from gravatar display name
   *
   * @param {String} name
   * @returns {string}
   * @private
   */


  /**
   * Check the color for display name
   *
   * @param {String} name
   * @returns {string}
   * @private
   */


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
      this.setGravatarInfo(newProps);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setGravatarInfo(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      var html = '';
      var srcExist = !!this.props.src;
      if (srcExist) {
        html = this.getSimpleImageBlock(this.props.src);
      } else if (this.state.status) {
        html = this.getGravatarBlock();
      } else {
        var nameExist = !!this.props.name;
        var emailExist = !!this.props.email;
        if (!nameExist && !emailExist && this.state.status === null) {
          return false;
        }
        var initials = this.prepareInitials(nameExist ? this.props.name : this.props.email);
        var color = this.getColor(initials);
        html = this.getSimpleImageBlock(this.getTextAvatar(initials, color));
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
  rating: _react2.default.PropTypes.string,
  testData: _react2.default.PropTypes.object
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

  this.getProfile = function () {
    var atts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return (0, _fetchJsonp2.default)('' + URL + (0, _md2.default)(atts.email) + '.json').then(function (response) {
      return response.json();
    }).then(function (response) {
      var data = response.entry[0];
      return {
        status: 1,
        color: _this2.getColor(data.displayName),
        initial: _this2.prepareInitials(data.displayName),
        displayName: data.displayName,
        size: _this2.getSize(atts.size),
        avatar: _this2.getGravatarSrc(data.thumbnailUrl, atts)
      };
    }).catch(function () {
      return {
        status: 0
      };
    });
  };

  this.getSize = function (size) {
    var modernBrowser = true; // server-side, we render for modern browsers
    if (typeof window !== 'undefined') {
      // this is not NodeJS
      modernBrowser = 'srcset' in document.createElement('img');
    }
    return !modernBrowser && (0, _isRetina2.default)() ? size * 2 : size;
  };

  this.getGravatarSrc = function (cleanURL, atts) {
    var query = _queryString2.default.stringify({
      s: _this2.getSize(atts.size),
      r: atts.rating,
      d: DEFAULT
    });
    return cleanURL + '?' + query;
  };

  this.prepareInitials = function (name) {
    if (name) {
      var parts = name.split(' ');
      var result = '';
      if (parts.length > 1) {
        result = (parts[0][0] + parts[1][0]).toUpperCase();
      } else if (parts[0].length > 1) {
        result = (parts[0][0] + parts[0][1]).toUpperCase();
      }
      return result;
    }
  };

  this.getColor = function () {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    var nameExist = !!name;
    if (nameExist) {
      var literal = name[0].toUpperCase();
      return COLORS[literal.charCodeAt(0).toString()[0]];
    } else {
      return COLORS[0];
    }
  };

  this.getTextAvatar = function (name) {
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

  this.getSimpleImageBlock = function () {
    var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    return _react2.default.createElement(
      'div',
      { className: 'avatar ' + _this2.props.className },
      _react2.default.createElement('img', {
        src: src,
        height: _this2.state.size,
        width: _this2.state.size,
        alt: 'image'
      })
    );
  };

  this.getGravatarBlock = function () {
    return _react2.default.createElement(
      'div',
      { className: 'avatar ' + _this2.props.className },
      _react2.default.createElement('img', {
        alt: 'initials',
        height: _this2.state.size,
        width: _this2.state.size,
        src: _this2.getTextAvatar(_this2.state.initial, _this2.state.color),
        className: 'avatar__initials'
      }),
      _react2.default.createElement('img', {
        alt: 'avatar',
        height: _this2.state.size,
        width: _this2.state.size,
        src: _this2.state.avatar,
        className: 'avatar__image'
      })
    );
  };

  this.setGravatarInfo = function (props) {
    var srcExist = !!props.src;
    var emailExist = !!props.email;
    if (!srcExist && emailExist) {
      _this2.getProfile(props).then(function (data) {
        _this2.setState(data);
      });
    }
  };
};

exports.default = Avatar;