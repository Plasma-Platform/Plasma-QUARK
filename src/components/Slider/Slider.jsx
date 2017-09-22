import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Slider.less';

export default class Slider extends Component {
  static propTypes = {
    containerClassName: PropTypes.string,
    containerId: PropTypes.string,
    containerName: PropTypes.string,
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
    onChange: PropTypes.func,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    labelColor: PropTypes.string,
    labeledValues: PropTypes.arrayOf(PropTypes.number),
    labeledValuesStep: PropTypes.number,
    labelPattern: PropTypes.string,
    showMinValue: PropTypes.bool,
    showMaxValue: PropTypes.bool,
    showMiddleValue: PropTypes.bool,
    value: PropTypes.number,
    defaultValue: PropTypes.number,
    className: PropTypes.string,
  }

  static defaultProps = {
    containerId: null,
    containerName: null,
    containerClassName: '',
    className: '',
    orientation: 'horizontal',
    labelColor: '#1ab744',
    labelPattern: '[]',
    showMinValue: true,
    showMaxValue: true,
    showMiddleValue: true,
    onChange: () => {},
    labeledValues: [],
    labeledValuesStep: null,
    value: null,
    defaultValue: null,
  }

  constructor(props) {
    super(props);

    this.thumbHalfWidth = 15;
    this.isMouseFocused = false;
    this.isTouchFocused = false;
  }

  state = {
    currentValuePosition: 100 * ((
      (this.props.value || this.props.defaultValue || this.props.min) - this.props.min
    ) / (this.props.max - this.props.min)),
    isThumbHovered: false,
  }

  componentDidMount() {
    this.hideOverlappingValues();
    window.addEventListener('resize', this.hideOverlappingValues);
  }

  componentWillReceiveProps(nextProps) {
    const nextRangeValue = (
      nextProps.value
      || (this.input ? this.input.value : this.props.defaultValue)
      || nextProps.min
    );

    this.setState({
      currentValuePosition: 100 * (
        (nextRangeValue - nextProps.min) / (nextProps.max - nextProps.min)
      ),
    }, this.hideOverlappingValues);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleRangeMouseMove);
    document.removeEventListener('mouseup', this.handleRangeMouseUp);
    document.removeEventListener('touchmove', this.handleRangeTouchMove);
    document.removeEventListener('touchend', this.handleRangeTouchEnd);

    window.removeEventListener('resize', this.hideOverlappingValues);
  }

  getLabeledValuesByStep = (labeledValuesStep = this.props.max - this.props.min) => Array.from({
    length: Math.floor((this.props.max - this.props.min) / labeledValuesStep) + 1,
  }).map((value, valueIndex) => this.props.min + (valueIndex * labeledValuesStep))

  getDisplayedValues = () => {
    const {
      min,
      max,
      showMiddleValue,
      showMinValue,
      showMaxValue,
      labeledValues,
      labeledValuesStep,
    } = this.props;

    const middleValue = (this.props.max + this.props.min) / 2;

    return [
      ...new Set([
        ...(labeledValues || this.getLabeledValuesByStep(labeledValuesStep)),
        min,
        max,
        middleValue,
      ]),
    ].filter((value) => {
      const isMinValue = value === min;
      const isMaxValue = value === max;
      const isMiddleValue = value === middleValue / 2;

      const isHidden = (
        (isMaxValue && !showMaxValue)
        || (isMinValue && !showMinValue)
        || (isMiddleValue && !showMiddleValue)
      );

      return !isHidden;
    });
  }

  setThumbHover = () => {
    this.setState({
      isThumbHovered: true,
    });
  }

  resetThumbHover = () => {
    this.setState({
      isThumbHovered: false,
    });
  }

  handleRangeMouseDown = (event) => {
    this.isMouseFocused = true;

    document.addEventListener('mousemove', this.handleRangeMouseMove);
    document.addEventListener('mouseup', this.handleRangeMouseUp);

    this.handleRangeChange(event);
  }

  handleRangeMouseMove = (event) => {
    if (this.isMouseFocused) {
      this.handleRangeChange(event);
    }
  }

  handleRangeMouseUp = (event) => {
    this.isMouseFocused = false;

    document.removeEventListener('mousemove', this.handleRangeMouseMove);
    document.removeEventListener('mouseup', this.handleRangeMouseUp);

    this.handleRangeChange(event);
  }

  handleRangeTouchStart = (event) => {
    this.isTouchFocused = true;

    document.addEventListener('touchmove', this.handleRangeTouchMove);
    document.addEventListener('touchend', this.handleRangeTouchEnd);

    this.handleRangeChange(event);
  }

  handleRangeTouchMove = (event) => {
    if (this.isTouchFocused) {
      this.handleRangeChange(event);
    }
  }

  handleRangeTouchEnd = (event) => {
    this.isTouchFocused = false;

    document.removeEventListener('touchmove', this.handleRangeTouchMove);
    document.removeEventListener('touchend', this.handleRangeTouchEnd);

    this.handleRangeChange(event);
  }

  handleRangeChange = (event) => {
    const rangeValue = event.target.value;

    this.setState({
      currentValuePosition: 100 * (
        (rangeValue - this.props.min) / (this.props.max - this.props.min)
      ),
    }, () => {
      this.hideOverlappingValues();
      this.props.onChange(rangeValue);
    });
  }

  hideOverlappingValues = () => {
    if (this.container) {
      const containerWidth = this.container.offsetWidth;
      const containerHeight = this.container.offsetHeight;
      const currentValueWidth = this.currentValueContainer.offsetWidth;
      const currentValueHeight = this.currentValueContainer.offsetHeight;

      const currentValuePositionInPX = (
        (this.props.orientation === 'horizontal' ? containerWidth : containerHeight) * this.state.currentValuePosition
      ) / 100;

      this.intermediateValuesLabels.forEach((label) => {
        if (label.container) {
          const labelPositionInPX = ((this.props.orientation === 'horizontal' ? containerWidth : containerHeight) * label.position) / 100;

          const labelStartHidePosition = labelPositionInPX - (this.props.orientation === 'horizontal' ? label.container.offsetWidth : label.container.offsetHeight);
          const labelEndHidePosition = labelPositionInPX + (this.props.orientation === 'horizontal' ? currentValueWidth : currentValueHeight);

          if (
            labelStartHidePosition <= currentValuePositionInPX
            && labelEndHidePosition >= currentValuePositionInPX
          ) {
            label.container.classList.add('tm-quark-slider__label_hidden');
          } else {
            label.container.classList.remove('tm-quark-slider__label_hidden');
          }
        }
      });
    }
  }

  render() {
    const {
      containerClassName,
      containerId,
      containerName,
      className,
      orientation,
      showMinValue,
      showMiddleValue,
      showMaxValue,
      labelColor,
      labeledValues,
      labeledValuesStep,
      labelPattern,
      value,
      defaultValue,
      min,
      max,
      ...sliderProps
    } = this.props;

    this.currentValue = (
      value ||
      (this.input ? this.input.value : defaultValue || min)
    );
    this.currentValuePosition = (
      100 * ((this.currentValue - min) / (max - min))
    );
    this.intermediateValuesLabels = [];

    const currentValueText = labelPattern.replace(/\[\]/g, this.currentValue);

    const displayedValues = this.getDisplayedValues();

    return (
      <div
        className={`tm-quark-slider tm-quark-slider_orientation_${orientation} ${containerClassName}`}
        id={containerId}
        name={containerName}
        ref={(ref) => { this.container = ref; }}
      >
        <span className={`tm-quark-slider__labels tm-quark-slider__labels_orientation_${orientation}`}>
          {displayedValues.map((displayedValue) => {
            const valuePosition = (
              100 * ((displayedValue - min) / (max - min))
            );
            const valueLabelText = labelPattern.replace(/\[\]/g, displayedValue);

            return (
              <span
                className={`tm-quark-slider__label tm-quark-slider__label_value_intermediate tm-quark-slider__label_orientation_${orientation}`}
                style={{
                  left: orientation === 'horizontal' ? `${valuePosition}%` : null,
                  bottom: orientation === 'vertical' ? `${valuePosition}%` : null,
                }}
                ref={(ref) => {
                  this.intermediateValuesLabels.push({
                    container: ref,
                    position: valuePosition,
                    hidden: false,
                  });
                }}
                key={displayedValue}
              >
                {valueLabelText}
              </span>
            );
          })}

          <span
            className={`tm-quark-slider__label tm-quark-slider__label_value_current tm-quark-slider__label_orientation_${orientation}`}
            style={{
              color: labelColor,
              left: orientation === 'horizontal' ? `${this.currentValuePosition}%` : null,
              bottom: orientation === 'vertical' ? `${this.currentValuePosition}%` : null,
            }}
            ref={(ref) => { this.currentValueContainer = ref; }}
          >
            {currentValueText}
          </span>
        </span>

        <span className={`tm-quark-slider__range tm-quark-slider__range_orientation_${orientation}`}>
          <input
            {...sliderProps}
            value={!value && value !== 0 ? undefined : value}
            defaultValue={!value && value !== 0 ? defaultValue || min : undefined}
            min={min}
            max={max}
            className={`tm-quark-slider__input tm-quark-slider__input_orientation_${orientation} ${className}`}
            type="range"
            onMouseDown={this.handleRangeMouseDown}
            onMouseLeave={this.resetThumbHover}
            onTouchStart={this.handleRangeTouchStart}
            onChange={this.handleRangeChange}
            onInput={this.handleRangeChange}
            orient={orientation}
            ref={(ref) => { this.input = ref; }}
          />

          <span
            className={`tm-quark-slider__thumb tm-quark-slider__thumb_orientation_${orientation} ${this.state.isThumbHovered ? 'tm-quark-slider__thumb_hovered' : ''}`}
            style={{
              bottom: orientation === 'vertical' ? `${this.currentValuePosition}%` : null,
              left: orientation === 'horizontal' ? `${this.currentValuePosition}%` : null,
            }}
            onMouseOver={this.setThumbHover}
            ref={(ref) => { this.thumb = ref; }}
          />
        </span>

        <span className={`tm-quark-slider__track tm-quark-slider__track_orientation_${orientation}`} />
      </div>
    );
  }
}
