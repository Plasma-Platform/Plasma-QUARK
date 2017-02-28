import React, {Component} from 'react';
import './StarsRating.less';

export default class StarsRating extends Component {
  static propTypes = {
    rating: React.PropTypes.oneOfType([
      React.PropTypes.number.isRequired,
      React.PropTypes.oneOf([0, 1, 2, 3, 4, 5])
    ]),
    checkStars: React.PropTypes.func
  };
  static defaultProps = {
    checkStars: () => {
    }
  };
  state = {
    stars     : [],
    prevStars : []
  };

  constructor(props) {
    super(props);
    for (let i = 0; i < 5; i++) {
      const star = {
        fill: i < props.rating
      };
      this.state.stars.push(JSON.parse(JSON.stringify(star)));
      this.state.prevStars.push(JSON.parse(JSON.stringify(star)));
    }
  }

  hoverStar = (id) => {
    const newStars = this.state.stars.map((star, index) => {
      star.fill = index <= id;
      return star;
    });
    this.setState({
      ...this.state,
      stars: [...newStars]
    });
  };

  revertPrev = () => {
    const state = JSON.parse(JSON.stringify(this.state));
    this.setState({
      ...this.state,
      stars: state.prevStars
    });
  };

  checkStars = (id) => {
    const newStars = this.state.stars.map((star, index) => {
      star.fill = index <= id;
      return star;
    });
    this.setState({
      ...this.state,
      prevStars: [...newStars]
    });
    this.props.checkStars(id+1);
  };

  render() {
    this.refsArray = [];
    return (
      <div className="stars-rating">
        {this.state.stars.map((star, i) => {
          return (<i
            key={i}
            data-id={i}
            ref={(e) => {
              this.refsArray.push(e);
            }}
            onMouseOver={this.hoverStar.bind(null, i)}
            onMouseOut={this.revertPrev}
            onClick={this.checkStars.bind(null, i)}
            className={`stars-rating__icon stars-rating__icon_${star.fill ? 'fill' : 'empty'}`}/>);
        })}
      </div>
    )
  };
}
