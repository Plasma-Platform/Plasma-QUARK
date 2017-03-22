import React, {Component} from 'react';
import './StarsRating.less';

export default class StarsRating extends Component {
  static propTypes = {
    defaultRating  : React.PropTypes.number.isRequired,
    onChange       : React.PropTypes.func,
    value          : React.PropTypes.number,
    disabled       : React.PropTypes.bool,
    noHovered      : React.PropTypes.bool
  };
  static defaultProps = {
    onChange : () => {
    },
    disabled  : false,
    noHovered : false
  };
  state = {
    value : this.props.defaultRating
  };

  constructor (props) {
    super(props);
  }

  select (val) {
    if (!this.props.disabled) {
      this.setState({
        value : val
      }, this.props.onChange.bind(this, val));
    } else if (this.props.noHovered) {
      this.setState({
        value : this.props.defaultRating
      }, this.props.onChange.bind(this, val));
    }
  }

  printStarClass (value, i) {
    const floor = Math.floor(value);
    const free = value - floor;
    if (floor < i && i - floor === 1) {
      switch (true) {
        case free <= 0.2:
          return 'stars-rating__icon_empty';
        case free <= 0.7:
          return 'stars-rating__icon_half';
        case free <= 0.999:
          return '';
      }
    }
    if (floor < i && i - floor > 1) {
      return 'stars-rating__icon_empty'
    }
    return '';
  }

  render () {
    const starsLength = 5;
    return (
      <div className="stars-rating-wrapper">
        <div className={`stars-rating ${this.props.disabled ? '' : 'stars-rating_hovered'}
          ${this.props.noHovered ? 'stars-rating_no-hovered' : ''}`}>
          {Array.from({length : starsLength}).map((value, i) => {
            i++;
            return (
              <i
                key={i}
                className={`stars-rating__icon ${this.printStarClass(this.state.value, i)}`}
                onClick={this.select.bind(this, i)}
              >
              </i>
            )
          })}
        </div>
      </div>
    )
  };
}
