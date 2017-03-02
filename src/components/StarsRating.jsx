import React, {Component} from 'react';
import './StarsRating.less';

export default class StarsRating extends Component {
  static propTypes = {
    rating       : React.PropTypes.number.isRequired,
    checkStars   : React.PropTypes.func,
    value        : React.PropTypes.number,
    defaultValue : React.PropTypes.number,
    splitInHalf  : React.PropTypes.bool,
    hovered      : React.PropTypes.bool
  };
  static defaultProps = {
    checkStars   : () => {
    },
    defaultValue : 0,
    splitInHalf  : false,
    hovered      : false
  };
  state = {
    stars     : [],
    prevStars : [],
    value     : this.props.defaultValue
  };

  constructor (props) {
    super(props);
    const starsLength = 5;
    Array.from({length : starsLength}).map((starIndex, i) => {
      const star = {
        fill : i < props.rating
      };
      this.state.stars.push(JSON.parse(JSON.stringify(star)));
      this.state.value = this.props.rating;
    })
  }

  select (val) {
    if (this.props.hovered) {
      this.setState({
        value : val
      }, this.props.checkStars.bind(this, val));
    }
  }

  printStarClass (value, i) {
    const floor = Math.floor(value);
    const free = value - floor;
    if(floor < i && i-floor === 1){
      switch (true){
        case free <= 0.2:
          return 'stars-rating__icon_empty';
        case free <= 0.7:
          return 'stars-rating__icon_half';
        case free <= 0.999:
          return '';
      }
    }
    if(floor < i && i-floor > 1){
      return 'stars-rating__icon_empty'
    }
    return '';
  }

  render () {
    return (
      <div className={`stars-rating ${this.props.hovered ? 'stars-rating_hovered' : ''}`}>
        {this.state.stars.map((value, i) => {
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
    )
  };
}
