'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMaxLengthOption = getMaxLengthOption;
exports.getMaxOptionWidth = getMaxOptionWidth;
exports.isMouseOutOfComponent = isMouseOutOfComponent;
var ICON_WIDTH = 30;
var MENU_HEIGHT = 160;
var DEFAULT_TYPO = ' arial';

function getMaxLengthOption(options) {
  var maxLengthIndex = -1;
  var maxLength = 0;

  options.forEach(function (option, index) {
    if (maxLength < option.label.length) {
      maxLength = option.label.length;
      maxLengthIndex = index;
    }
  });

  return options[maxLengthIndex];
}

function getMaxOptionWidth(options, fontSize) {
  var option = getMaxLengthOption(options);

  var canvas = getMaxOptionWidth.canvas || (getMaxOptionWidth.canvas = document.createElement('canvas'));
  var context = canvas.getContext('2d');

  context.font = (fontSize || '14px') + DEFAULT_TYPO;

  return Math.round(context.measureText(option.label).width) + (option.icon ? ICON_WIDTH : 0);
}

function isMouseOutOfComponent(_ref) {
    var container = _ref.container;
    var isBottomPosition = _ref.isBottomPosition;
    var pageX = _ref.pageX;
    var pageY = _ref.pageY;
    var width = _ref.width;
    var align = _ref.align;

  if (container !== null) {
    return !(pageY < container.offsetHeight + container.offsetTop + (!isBottomPosition ? MENU_HEIGHT : 0) && pageY > container.offsetTop - (isBottomPosition ? MENU_HEIGHT : 0) && pageX < (align === 'left' ? width : container.offsetWidth) + container.offsetLeft && pageX > container.offsetLeft - (align === 'right' ? width - container.offsetWidth : 0) && (align !== 'right' || pageX > container.offsetLeft && pageY > container.offsetTop || pageX > container.offsetLeft - (width - container.offsetWidth) && pageY > container.offsetTop + container.offsetHeight));
  }
}