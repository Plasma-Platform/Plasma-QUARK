'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

var _fetchJsonp = require('fetch-jsonp');

var _fetchJsonp2 = _interopRequireDefault(_fetchJsonp);

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _isRetina = require('is-retina');

var _isRetina2 = _interopRequireDefault(_isRetina);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var URL = '//gravatar.com/';
var DEFAULT = 'http://cdnwptm.templatemonster.com/wp-content/uploads/2016/10/onepixel.png'; // default image
var COLORS = [// array colors
'#1A76D2', '#546E7A', '#E64A19', '#0B8738', '#FFA001', '#996969', '#42A5F5', '#243238', '#006023', '#FF6F00'];

var GravatarApi = function GravatarApi() {
  var _this = this;

  (0, _classCallCheck3.default)(this, GravatarApi);

  this.getProfile = function () {
    var atts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return (0, _fetchJsonp2.default)(URL + ((0, _md2.default)(atts.email) + '.json'), {
      timeout: 1000
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      var data = response.entry[0];
      return {
        status: 1,
        color: _this._getColor(data.displayName),
        initial: _this._prepareInitials(data.displayName),
        displayName: data.displayName,
        size: _this._getSize(atts.size),
        avatar: _this._getGravatarSrc(data.thumbnailUrl, atts)
      };
    }).catch(function (response) {
      return {
        status: 0
      };
    });
  };

  this._getSize = function (size) {
    var modernBrowser = true; // server-side, we render for modern browsers
    if (typeof window !== 'undefined') {
      // this is not NodeJS
      modernBrowser = 'srcset' in document.createElement('img');
    }
    return !modernBrowser && (0, _isRetina2.default)() ? size * 2 : size;
  };

  this._getGravatarSrc = function (cleanURL, atts) {
    var query = _queryString2.default.stringify({
      s: _this._getSize(atts.size),
      r: atts.rating,
      d: DEFAULT
    });
    return cleanURL + '?' + query;
  };

  this._prepareInitials = function (name) {
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

  this._getColor = function (name) {
    var literal = name[0].toUpperCase();
    return COLORS[Math.floor(literal.charCodeAt(0) / 10)];
  };
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
;

exports.default = new GravatarApi();