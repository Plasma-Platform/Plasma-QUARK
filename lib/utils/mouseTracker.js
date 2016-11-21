"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  mouseTracker shows where is your cursor placed in current time
 */
var MouseTracker = function () {
  function MouseTracker() {
    var _this = this;

    (0, _classCallCheck3.default)(this, MouseTracker);

    this.mouseMoveHandler = function (event) {
      _this._position = {
        clientX: event.clientX,
        clientY: event.clientY,
        x: event.x,
        y: event.y,
        target: event.target
      };
    };

    this._position = {
      clientX: null,
      clientY: null,
      x: null,
      y: null,
      target: null
    };

    window.onmousemove = this.mouseMoveHandler;
  }

  (0, _createClass3.default)(MouseTracker, [{
    key: "position",
    get: function get() {
      return this._position;
    }
  }]);
  return MouseTracker;
}();

exports.default = new MouseTracker();