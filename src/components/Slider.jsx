import React, {Component, PropTypes} from 'react';

import './Slider.less';

export default class Slider extends Component {
  static propTypes = {
    containerClassName : PropTypes.string,
    containerId        : PropTypes.string,
    containerName      : PropTypes.string,
    orientation        : PropTypes.oneOf(['horizontal', 'vertical']),
    onChange           : PropTypes.func,
    min                : PropTypes.number.isRequired,
    max                : PropTypes.number.isRequired,
    labeledValues      : PropTypes.array,
    labeledValuesStep  : PropTypes.number,
    labelPattern       : PropTypes.string,
    showMinValue       : PropTypes.bool,
    showMaxValue       : PropTypes.bool,
    showMiddleValue    : PropTypes.bool
  }

  static defaultProps = {
    containerClassName : '',
    className          : '',
    orientation        : 'horizontal',
    labelPattern       : '[]',
    showMinValue       : true,
    showMaxValue       : true,
    showMiddleValue    : true
  }

  state = {
    currentValuePosition : 100 * ((this.props.value || this.props.defaultValue || this.props.min) - this.props.min) / (this.props.max - this.props.min),
    isThumbHovered       : false
  }

  constructor (props) {
    super(props);

    this.setThumbHover         = this.setThumbHover.bind(this);
    this.resetThumbHover       = this.resetThumbHover.bind(this);

    this.handleRangeChange     = this.handleRangeChange.bind(this);

    this.handleRangeMouseDown  = this.handleRangeMouseDown.bind(this);
    this.handleRangeMouseUp    = this.handleRangeMouseUp.bind(this);
    this.handleRangeMouseMove  = this.handleRangeMouseMove.bind(this);

    this.handleRangeTouchStart = this.handleRangeTouchStart.bind(this);
    this.handleRangeTouchEnd   = this.handleRangeTouchEnd.bind(this);
    this.handleRangeTouchMove  = this.handleRangeTouchMove.bind(this);

    this.thumbHalfWidth        = 15;
    this.isMouseFocused        = false;
    this.isTouchFocused        = false;
  }

  setThumbHover () {
    this.setState({
      isThumbHovered: true
    });
  }

  resetThumbHover () {
    this.setState({
      isThumbHovered: false
    });
  }

  handleRangeMouseDown (event) {
    this.isMouseFocused = true;

    document.addEventListener('mousemove', this.handleRangeMouseMove);
    document.addEventListener('mouseup', this.handleRangeMouseUp);

    this.handleRangeChange(event);
  }

  handleRangeMouseMove (event) {
    this.isMouseFocused && this.handleRangeChange(event);
  }

  handleRangeMouseUp (event) {
    this.isMouseFocused = false;

    document.removeEventListener('mousemove', this.handleRangeMouseMove);
    document.removeEventListener('mouseup', this.handleRangeMouseUp);

    this.handleRangeChange(event);
  }

  handleRangeTouchStart (event) {
    this.isTouchFocused = true;

    document.addEventListener('touchmove', this.handleRangeTouchMove);
    document.addEventListener('touchend', this.handleRangeTouchEnd);

    this.handleRangeChange(event);
  }

  handleRangeTouchMove (event) {
    this.isTouchFocused && this.handleRangeChange(event);
  }

  handleRangeTouchEnd (event) {
    this.isTouchFocused = false;

    document.removeEventListener('touchmove', this.handleRangeTouchMove);
    document.removeEventListener('touchend', this.handleRangeTouchEnd);

    this.handleRangeChange(event);
  }

  handleRangeChange (event) {
    const rangeValue = event.target.value;

    this.setState({
      currentValuePosition: 100 * (rangeValue - this.props.min) / (this.props.max - this.props.min)
    }, () => {
      this.hideOverlappingValues();
      this.props.onChange && this.props.onChange(rangeValue);
    });
  }

  hideOverlappingValues () {
    if (this.container) {
      const containerWidth     = this.container.offsetWidth;
      const containerHeight    = this.container.offsetHeight;
      const currentValueWidth  = this.currentValueContainer.offsetWidth;
      const currentValueHeight = this.currentValueContainer.offsetHeight;

      const currentValuePositionInPX = (this.props.orientation === 'horizontal' ? containerWidth : containerHeight) * this.state.currentValuePosition / 100;

      this.intermediateValuesLabels.forEach((label) => {
        if (label.container) {
          const labelPositionInPX = ((this.props.orientation === 'horizontal' ? containerWidth : containerHeight) * label.position) / 100;

          const labelStartHidePosition = labelPositionInPX - (this.props.orientation === 'horizontal' ? label.container.offsetWidth : label.container.offsetHeight);
          const labelEndHidePosition   = labelPositionInPX + (this.props.orientation === 'horizontal' ? currentValueWidth : currentValueHeight);

          if (labelStartHidePosition <= currentValuePositionInPX && labelEndHidePosition >= currentValuePositionInPX) {
            label.container.classList.add('tm-quark-slider__label_hidden');
          } else {
            label.container.classList.remove('tm-quark-slider__label_hidden');
          }
        }
      });
    }
  }

  getLabeledValuesByStep (labeledValuesStep = this.props.max - this.props.min) {
    return Array.from({
      length: Math.floor((this.props.max - this.props.min) / labeledValuesStep) + 1
    }).map((value, valueIndex) => {
      return this.props.min + (valueIndex * labeledValuesStep);
    });
  }

  getDisplayedValues () {
    const {
      min,
      max,
      showMiddleValue,
      showMinValue,
      showMaxValue,
      labeledValues,
      labeledValuesStep
    } = this.props;

    const middleValue = (this.props.max + this.props.min) / 2;

    return [
      ...new Set([
        ...(labeledValues || this.getLabeledValuesByStep(labeledValuesStep)),
        min,
        max,
        middleValue
      ])
    ].filter((value) => {
      const isMinValue    = value === min;
      const isMaxValue    = value === max;
      const isMiddleValue = value === middleValue / 2;

      const isHidden = isMaxValue && !showMaxValue || isMinValue && !showMinValue || isMiddleValue && !showMiddleValue;

      return !isHidden;
    });
  }

  componentDidMount () {
    this.hideOverlappingValues();
    window.addEventListener('resize', this.hideOverlappingValues);
  }

  componentWillReceiveProps (nextProps) {
    const nextRangeValue = nextProps.value || (this.input ? this.input.value : this.props.defaultValue) || nextProps.min;

    this.setState({
      currentValuePosition: 100 * (nextRangeValue - nextProps.min) / (nextProps.max - nextProps.min)
    }, this.hideOverlappingValues);
  }

  componentWillUnmount () {
    document.removeEventListener('mousemove', this.handleRangeMouseMove);
    document.removeEventListener('mouseup', this.handleRangeMouseUp);
    document.removeEventListener('touchmove', this.handleRangeTouchMove);
    document.removeEventListener('touchend', this.handleRangeTouchEnd);

    window.removeEventListener('resize', this.hideOverlappingValues);
  }

  render () {
    const {
      containerClassName,
      containerId,
      containerName,
      className,
      orientation,
      showMinValue,
      showMiddleValue,
      showMaxValue,
      labeledValues,
      labeledValuesStep,
      labelPattern,
      ...sliderProps
    } = this.props;

    this.currentValue             = this.props.value || (this.input ? this.input.value : this.props.defaultValue || this.props.min);
    this.currentValuePosition     = 100 * (this.currentValue - this.props.min) / (this.props.max - this.props.min);
    this.intermediateValuesLabels = [];

    const currentValueText = labelPattern.replace(/\[\]/g, this.currentValue);

    const displayedValues  = this.getDisplayedValues();

    return (
      <div
        className = {`tm-quark-slider tm-quark-slider_orientation_${orientation} ${containerClassName}`}
        id        = {containerId   || null}
        name      = {containerName || null}
        ref       = {(ref) => { this.container = ref; }}
      >
        <span className={`tm-quark-slider__labels tm-quark-slider__labels_orientation_${orientation}`}>
          {displayedValues.map((value, valueIndex) => {
            const valuePosition  = ((value - this.props.min) / (this.props.max - this.props.min)) * 100;
            const valueLabelText = labelPattern.replace(/\[\]/g, value);

            return (
              <span
                className = {`tm-quark-slider__label tm-quark-slider__label_value_intermediate tm-quark-slider__label_orientation_${orientation}`}
                style     = {{
                  left   : orientation === 'horizontal' ? `${valuePosition}%` : null,
                  bottom : orientation === 'vertical'   ? `${valuePosition}%` : null
                }}
                ref       = {(ref) => {
                  this.intermediateValuesLabels.push({
                    container : ref,
                    position  : valuePosition,
                    hidden    : false
                  });
                }}
                key       = {value}
              >
                {valueLabelText}
              </span>
            );
          })}

          <span
            className = {`tm-quark-slider__label tm-quark-slider__label_value_current tm-quark-slider__label_orientation_${orientation}`}
            style     = {{
              left   : orientation === 'horizontal' ? `${this.currentValuePosition}%` : null,
              bottom : orientation === 'vertical'   ? `${this.currentValuePosition}%` : null
            }}
            ref       = {(ref) => { this.currentValueContainer = ref; }}
          >
            {currentValueText}
          </span>
        </span>

        <span className={`tm-quark-slider__range tm-quark-slider__range_orientation_${orientation}`}>
          <input
            {...sliderProps}
            className    = {`tm-quark-slider__input tm-quark-slider__input_orientation_${orientation} ${className}`}
            type         = "range"
            onMouseDown  = {this.handleRangeMouseDown}
            onMouseLeave = {this.resetThumbHover}
            onTouchStart = {this.handleRangeTouchStart}
            onChange     = {this.handleRangeChange}
            onInput      = {this.handleRangeChange}
            orient       = {orientation}
            ref          = {(ref) => { this.input = ref; }}
          />

          <span
            className = {`tm-quark-slider__thumb tm-quark-slider__thumb_orientation_${orientation} ${this.state.isThumbHovered ? 'tm-quark-slider__thumb_hovered' : ''}`}
            style     = {{
              bottom : orientation === 'vertical'   ? `${this.currentValuePosition}%` : null,
              left   : orientation === 'horizontal' ? `${this.currentValuePosition}%` : null
            }}
            onMouseOver  = {this.setThumbHover}
            ref          = {(ref) => { this.thumb = ref; }}
          ></span>
        </span>

        <span className={`tm-quark-slider__track tm-quark-slider__track_orientation_${orientation}`}></span>
      </div>
    );
  }
};
