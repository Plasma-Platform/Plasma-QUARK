'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var Slider = function (_Component) {
  (0, _inherits3.default)(Slider, _Component);

  function Slider(props) {
    (0, _classCallCheck3.default)(this, Slider);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Slider.__proto__ || (0, _getPrototypeOf2.default)(Slider)).call(this, props));

    _this.state = {
      currentValuePosition: 100 * ((_this.props.value || _this.props.defaultValue || _this.props.min) - _this.props.min) / (_this.props.max - _this.props.min),
      isThumbHovered: false
    };


    _this.setThumbHover = _this.setThumbHover.bind(_this);
    _this.resetThumbHover = _this.resetThumbHover.bind(_this);

    _this.handleRangeChange = _this.handleRangeChange.bind(_this);

    _this.handleRangeMouseDown = _this.handleRangeMouseDown.bind(_this);
    _this.handleRangeMouseUp = _this.handleRangeMouseUp.bind(_this);
    _this.handleRangeMouseMove = _this.handleRangeMouseMove.bind(_this);

    _this.handleRangeTouchStart = _this.handleRangeTouchStart.bind(_this);
    _this.handleRangeTouchEnd = _this.handleRangeTouchEnd.bind(_this);
    _this.handleRangeTouchMove = _this.handleRangeTouchMove.bind(_this);

    _this.thumbHalfWidth = 15;
    _this.isMouseFocused = false;
    _this.isTouchFocused = false;
    return _this;
  }

  (0, _createClass3.default)(Slider, [{
    key: 'setThumbHover',
    value: function setThumbHover() {
      this.setState({
        isThumbHovered: true
      });
    }
  }, {
    key: 'resetThumbHover',
    value: function resetThumbHover() {
      this.setState({
        isThumbHovered: false
      });
    }
  }, {
    key: 'handleRangeMouseDown',
    value: function handleRangeMouseDown(event) {
      this.isMouseFocused = true;

      document.addEventListener('mousemove', this.handleRangeMouseMove);
      document.addEventListener('mouseup', this.handleRangeMouseUp);

      this.handleRangeChange(event);
    }
  }, {
    key: 'handleRangeMouseMove',
    value: function handleRangeMouseMove(event) {
      this.isMouseFocused && this.handleRangeChange(event);
    }
  }, {
    key: 'handleRangeMouseUp',
    value: function handleRangeMouseUp(event) {
      this.isMouseFocused = false;

      document.removeEventListener('mousemove', this.handleRangeMouseMove);
      document.removeEventListener('mouseup', this.handleRangeMouseUp);

      this.handleRangeChange(event);
    }
  }, {
    key: 'handleRangeTouchStart',
    value: function handleRangeTouchStart(event) {
      this.isTouchFocused = true;

      document.addEventListener('touchmove', this.handleRangeTouchMove);
      document.addEventListener('touchend', this.handleRangeTouchEnd);

      this.handleRangeChange(event);
    }
  }, {
    key: 'handleRangeTouchMove',
    value: function handleRangeTouchMove(event) {
      this.isTouchFocused && this.handleRangeChange(event);
    }
  }, {
    key: 'handleRangeTouchEnd',
    value: function handleRangeTouchEnd(event) {
      this.isTouchFocused = false;

      document.removeEventListener('touchmove', this.handleRangeTouchMove);
      document.removeEventListener('touchend', this.handleRangeTouchEnd);

      this.handleRangeChange(event);
    }
  }, {
    key: 'handleRangeChange',
    value: function handleRangeChange(event) {
      var _this2 = this;

      var rangeValue = event.target.value;

      this.setState({
        currentValuePosition: 100 * (rangeValue - this.props.min) / (this.props.max - this.props.min)
      }, function () {
        _this2.hideOverlappingValues();
        _this2.props.onChange && _this2.props.onChange(rangeValue);
      });
    }
  }, {
    key: 'hideOverlappingValues',
    value: function hideOverlappingValues() {
      var _this3 = this;

      if (this.container) {
        var containerWidth = this.container.offsetWidth;
        var containerHeight = this.container.offsetHeight;
        var currentValueWidth = this.currentValueContainer.offsetWidth;
        var currentValueHeight = this.currentValueContainer.offsetHeight;

        var currentValuePositionInPX = (this.props.orientation === 'horizontal' ? containerWidth : containerHeight) * this.state.currentValuePosition / 100;

        this.intermediateValuesLabels.forEach(function (label) {
          if (label.container) {
            var labelPositionInPX = (_this3.props.orientation === 'horizontal' ? containerWidth : containerHeight) * label.position / 100;

            var labelStartHidePosition = labelPositionInPX - (_this3.props.orientation === 'horizontal' ? label.container.offsetWidth : label.container.offsetHeight);
            var labelEndHidePosition = labelPositionInPX + (_this3.props.orientation === 'horizontal' ? currentValueWidth : currentValueHeight);

            if (labelStartHidePosition <= currentValuePositionInPX && labelEndHidePosition >= currentValuePositionInPX) {
              label.container.classList.add('tm-quark-slider__label_hidden');
            } else {
              label.container.classList.remove('tm-quark-slider__label_hidden');
            }
          }
        });
      }
    }
  }, {
    key: 'getLabeledValuesByStep',
    value: function getLabeledValuesByStep() {
      var _this4 = this;

      var labeledValuesStep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.max - this.props.min;

      return (0, _from2.default)({
        length: Math.floor((this.props.max - this.props.min) / labeledValuesStep) + 1
      }).map(function (value, valueIndex) {
        return _this4.props.min + valueIndex * labeledValuesStep;
      });
    }
  }, {
    key: 'getDisplayedValues',
    value: function getDisplayedValues() {
      var _props = this.props,
          min = _props.min,
          max = _props.max,
          showMiddleValue = _props.showMiddleValue,
          showMinValue = _props.showMinValue,
          showMaxValue = _props.showMaxValue,
          labeledValues = _props.labeledValues,
          labeledValuesStep = _props.labeledValuesStep;


      var middleValue = (this.props.max + this.props.min) / 2;

      return [].concat((0, _toConsumableArray3.default)(new _set2.default([].concat((0, _toConsumableArray3.default)(labeledValues || this.getLabeledValuesByStep(labeledValuesStep)), [min, max, middleValue])))).filter(function (value) {
        var isMinValue = value === min;
        var isMaxValue = value === max;
        var isMiddleValue = value === middleValue / 2;

        var isHidden = isMaxValue && !showMaxValue || isMinValue && !showMinValue || isMiddleValue && !showMiddleValue;

        return !isHidden;
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.hideOverlappingValues();
      window.addEventListener('resize', this.hideOverlappingValues);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var nextRangeValue = nextProps.value || (this.input ? this.input.value : this.props.defaultValue) || nextProps.min;

      this.setState({
        currentValuePosition: 100 * (nextRangeValue - nextProps.min) / (nextProps.max - nextProps.min)
      }, this.hideOverlappingValues);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mousemove', this.handleRangeMouseMove);
      document.removeEventListener('mouseup', this.handleRangeMouseUp);
      document.removeEventListener('touchmove', this.handleRangeTouchMove);
      document.removeEventListener('touchend', this.handleRangeTouchEnd);

      window.removeEventListener('resize', this.hideOverlappingValues);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var _props2 = this.props,
          containerClassName = _props2.containerClassName,
          containerId = _props2.containerId,
          containerName = _props2.containerName,
          className = _props2.className,
          orientation = _props2.orientation,
          showMinValue = _props2.showMinValue,
          showMiddleValue = _props2.showMiddleValue,
          showMaxValue = _props2.showMaxValue,
          labeledValues = _props2.labeledValues,
          labeledValuesStep = _props2.labeledValuesStep,
          labelPattern = _props2.labelPattern,
          sliderProps = (0, _objectWithoutProperties3.default)(_props2, ['containerClassName', 'containerId', 'containerName', 'className', 'orientation', 'showMinValue', 'showMiddleValue', 'showMaxValue', 'labeledValues', 'labeledValuesStep', 'labelPattern']);


      this.currentValue = this.props.value || (this.input ? this.input.value : this.props.defaultValue || this.props.min);
      this.currentValuePosition = 100 * (this.currentValue - this.props.min) / (this.props.max - this.props.min);
      this.intermediateValuesLabels = [];

      var currentValueText = labelPattern.replace(/\[\]/g, this.currentValue);

      var displayedValues = this.getDisplayedValues();

      return _react2.default.createElement(
        'div',
        {
          className: 'tm-quark-slider tm-quark-slider_orientation_' + orientation + ' ' + containerClassName,
          id: containerId || null,
          name: containerName || null,
          ref: function ref(_ref5) {
            _this5.container = _ref5;
          }
        },
        _react2.default.createElement(
          'span',
          { className: 'tm-quark-slider__labels tm-quark-slider__labels_orientation_' + orientation },
          displayedValues.map(function (value, valueIndex) {
            var valuePosition = (value - _this5.props.min) / (_this5.props.max - _this5.props.min) * 100;
            var valueLabelText = labelPattern.replace(/\[\]/g, value);

            return _react2.default.createElement(
              'span',
              {
                className: 'tm-quark-slider__label tm-quark-slider__label_value_intermediate tm-quark-slider__label_orientation_' + orientation,
                style: {
                  left: orientation === 'horizontal' ? valuePosition + '%' : null,
                  bottom: orientation === 'vertical' ? valuePosition + '%' : null
                },
                ref: function ref(_ref) {
                  _this5.intermediateValuesLabels.push({
                    container: _ref,
                    position: valuePosition,
                    hidden: false
                  });
                },
                key: value
              },
              valueLabelText
            );
          }),
          _react2.default.createElement(
            'span',
            {
              className: 'tm-quark-slider__label tm-quark-slider__label_value_current tm-quark-slider__label_orientation_' + orientation,
              style: {
                left: orientation === 'horizontal' ? this.currentValuePosition + '%' : null,
                bottom: orientation === 'vertical' ? this.currentValuePosition + '%' : null
              },
              ref: function ref(_ref2) {
                _this5.currentValueContainer = _ref2;
              }
            },
            currentValueText
          )
        ),
        _react2.default.createElement(
          'span',
          { className: 'tm-quark-slider__range tm-quark-slider__range_orientation_' + orientation },
          _react2.default.createElement('input', (0, _extends3.default)({}, sliderProps, {
            className: 'tm-quark-slider__input tm-quark-slider__input_orientation_' + orientation + ' ' + className,
            type: 'range',
            onMouseDown: this.handleRangeMouseDown,
            onMouseLeave: this.resetThumbHover,
            onTouchStart: this.handleRangeTouchStart,
            onChange: this.handleRangeChange,
            onInput: this.handleRangeChange,
            orient: orientation,
            ref: function ref(_ref3) {
              _this5.input = _ref3;
            }
          })),
          _react2.default.createElement('span', {
            className: 'tm-quark-slider__thumb tm-quark-slider__thumb_orientation_' + orientation + ' ' + (this.state.isThumbHovered ? 'tm-quark-slider__thumb_hovered' : ''),
            style: {
              bottom: orientation === 'vertical' ? this.currentValuePosition + '%' : null,
              left: orientation === 'horizontal' ? this.currentValuePosition + '%' : null
            },
            onMouseOver: this.setThumbHover,
            ref: function ref(_ref4) {
              _this5.thumb = _ref4;
            }
          })
        ),
        _react2.default.createElement('span', { className: 'tm-quark-slider__track tm-quark-slider__track_orientation_' + orientation })
      );
    }
  }]);
  return Slider;
}(_react.Component);

Slider.propTypes = {
  containerClassName: _react.PropTypes.string,
  containerId: _react.PropTypes.string,
  containerName: _react.PropTypes.string,
  orientation: _react.PropTypes.oneOf(['horizontal', 'vertical']),
  onChange: _react.PropTypes.func,
  min: _react.PropTypes.number.isRequired,
  max: _react.PropTypes.number.isRequired,
  labeledValues: _react.PropTypes.array,
  labeledValuesStep: _react.PropTypes.number,
  labelPattern: _react.PropTypes.string,
  showMinValue: _react.PropTypes.bool,
  showMaxValue: _react.PropTypes.bool,
  showMiddleValue: _react.PropTypes.bool
};
Slider.defaultProps = {
  containerClassName: '',
  className: '',
  orientation: 'horizontal',
  labelPattern: '[]',
  showMinValue: true,
  showMaxValue: true,
  showMiddleValue: true
};
exports.default = Slider;
;