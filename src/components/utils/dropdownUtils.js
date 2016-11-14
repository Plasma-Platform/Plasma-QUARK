const ICON_WIDTH = 30;
const MENU_HEIGHT = 160;
const DEFAULT_TYPO = ' arial';

export function getMaxLengthOption (options) {
  let maxLengthIndex = -1;
  let maxLength = 0;

  options.forEach((option, index) => {
    if (maxLength < option.label.length) {
      maxLength = option.label.length;
      maxLengthIndex = index;
    }
  });

  return options[maxLengthIndex];
}

export function getMaxOptionWidth (options, fontSize) {
  const option = getMaxLengthOption(options);

  const canvas = getMaxOptionWidth.canvas ||
    (getMaxOptionWidth.canvas = document.createElement('canvas'));
  const context = canvas.getContext('2d');

  context.font = (fontSize || '14px') + DEFAULT_TYPO;

  return Math.round(context.measureText(option.label).width) + (option.icon ? ICON_WIDTH : 0);
}

export function isMouseOutOfComponent ({ container, isBottomPosition, pageX, pageY, width, align }) {
  if (container !== null) {
    return !(pageY < container.offsetHeight + container.offsetTop +
    (!isBottomPosition ? MENU_HEIGHT : 0) &&
    pageY > container.offsetTop - (isBottomPosition ? MENU_HEIGHT : 0) &&
    pageX < (align === 'left' ? width : container.offsetWidth) + container.offsetLeft &&
    pageX > container.offsetLeft - (align === 'right' ? (width - container.offsetWidth) : 0) &&
    (align !== 'right' ||
    ((pageX > container.offsetLeft && pageY > container.offsetTop) ||
      (pageX > (container.offsetLeft - (width - container.offsetWidth)) &&
      pageY > (container.offsetTop + container.offsetHeight))
    )));
  }
}
