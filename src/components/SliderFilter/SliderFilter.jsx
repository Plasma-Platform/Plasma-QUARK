import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SliderFilter.less';

export default class SliderFilter extends Component {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    min: 0,
    max: 100,
    value: {
      min: 0,
      max: 100,
    },
  };

  getValueColor = (value) => {
    if (value <= 24) {
      return '#d84315';
    } else if (value <= 49) {
      return '#ffb302';
    } else if (value <= 74) {
      return '#2196f3';
    }

    return '#1ab744';
  };

  handleMinChange = (event) => {
    this.props.onChange({
      min: parseInt(event.target.value, 10),
      max: this.props.value.max,
    });
  };

  handleMaxChange = (event) => {
    this.props.onChange({
      min: this.props.value.min,
      max: parseInt(event.target.value, 10),
    });
  };

  render() {
    const { min, max, value } = this.props;

    const middle = (value.max - value.min) / 2;
    const minMax = Math.floor(value.min + middle);
    const maxMin = Math.ceil(value.max - middle);
    const minWidth = minMax;
    const maxWidth = 100 - minMax;

    return (
      <span className="TMSliderFilter">
        <input
          className="TMSliderFilter__input TMSliderFilter__input--type--min"
          type="range"
          min={min}
          max={minMax}
          value={value.min}
          onChange={this.handleMinChange}
          style={{
            width: `${minWidth}%`,
          }}
        />

        <input
          className="TMSliderFilter__input TMSliderFilter__input--type--max"
          type="range"
          min={maxMin}
          max={max}
          value={value.max}
          onChange={this.handleMaxChange}
          style={{
            width: `${maxWidth}%`,
          }}
        />

        <span className="TMSliderFilter__track" />

        <span
          className="TMSliderFilter__selectedRange"
          style={{
            left: `${100 * ((value.min - min) / (max - min))}%`,
            right: `${100 - (100 * ((value.max - min) / (max - min)))}%`,
          }}
        />

        <span
          className="TMSliderFilter__value TMSliderFilter__value--type--min"
          style={{
            left: `${100 * ((value.min - min) / (max - min))}%`,
            transform: `translateY(-50%) translateX(-${100 * ((value.min - min) / (max - min))}%)`,
          }}
        >
          {value.min}

          <span
            className="TMSliderFilter__colored-value"
            style={{
              color: this.getValueColor(value.min),
            }}
          >
            {value.min}
          </span>
        </span>

        <span
          className="TMSliderFilter__value TMSliderFilter__value--type--max"
          style={{
            left: `${100 * ((value.max - min) / (max - min))}%`,
            transform: `translateY(-50%) translateX(-${100 * ((value.max - min) / (max - min))}%)`,
          }}
        >
          {value.max}

          <span
            className="TMSliderFilter__colored-value"
            style={{
              color: this.getValueColor(value.max),
            }}
          >
            {value.max}
          </span>
        </span>
      </span>
    );
  }
}
