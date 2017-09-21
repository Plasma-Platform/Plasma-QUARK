import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './StarsRating.less';

export default class StarsRating extends Component {
  static propTypes = {
    defaultRating: PropTypes.number.isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    noHovered: PropTypes.bool,
  }

  static defaultProps = {
    onChange: () => {
    },
    disabled: false,
    noHovered: false,
  }

  state = {
    value: this.props.defaultRating,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultRating !== this.props.defaultRating) {
      this.setState({
        value: nextProps.defaultRating,
      });
    }
  }

  getStarIndex = index => index

  select = (val) => {
    if (!this.props.disabled) {
      this.setState({
        value: val,
      }, this.props.onChange.bind(this, val));
    } else if (this.props.noHovered) {
      this.setState({
        value: this.props.defaultRating,
      }, this.props.onChange.bind(this, val));
    }
  }

  printStarClass = (value, i) => {
    const floor = Math.floor(value);
    const free = value - floor;

    if (floor < i && i - floor === 1) {
      if (free < 1 && free > 0.7) {
        return '';
      }

      if (free > 0.2) {
        return 'stars-rating__icon_half';
      }

      return 'stars-rating__icon_empty';
    }

    if (floor < i && i - floor > 1) {
      return 'stars-rating__icon_empty';
    }

    return '';
  }

  render() {
    const starsLength = 5;

    return (
      <div className="stars-rating-wrapper">
        <div className={`stars-rating ${this.props.disabled ? '' : 'stars-rating_hovered'}
          ${this.props.noHovered ? 'stars-rating_no-hovered' : ''}`}
        >
          {Array.from({ length: starsLength }).map((value, index) => (
            <i
              key={this.getStarIndex(index)}
              className={`stars-rating__icon ${this.printStarClass(this.state.value, index)}`}
              onClick={() => {
                this.select(index);
              }}
              role="button"
              tabIndex="0"
            />
          ))}
        </div>
      </div>
    );
  }
}
