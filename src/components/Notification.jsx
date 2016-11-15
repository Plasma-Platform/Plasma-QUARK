import React, {Component, PropTypes} from 'react';
import classnames                      from 'classnames';

import '../assets/styles/animations.less';
import './Notification.less';

export default class Notification extends Component {
  static propTypes = {
    className          : PropTypes.string,
    text               : PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]).isRequired,
    size               : PropTypes.string.isRequired,
    maxWidth           : PropTypes.string,
    onHideNotification : PropTypes.func,
    status             : PropTypes.oneOf(['default', 'success', 'error']).isRequired,
    position           : PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired
  }

  state = {
    top    : 'initial',
    left   : 'initial',
    right  : 'initial',
    bottom : 'initial'
  }

  componentDidMount () {
    this.getContainerWidth();
  }

  getContainerWidth = () => {
    if (this.container) this.setState({width: this.container.offsetWidth + 2});
  }

  setPosition (coords) {
    this.setState(coords);
  }

  render () {
    const classes = classnames({
      'notification'                                   : true,
      [`notification--${this.props.size}`]             : true,
      [`notification--${this.props.status}`]           : true,
      [`notification--${this.props.position}`]         : true,
      [`notification--${this.props.position}-arrow`]   : true,
      [`animated-tooltip_open_${this.props.position}`] : true,
      [this.props.className]                           : this.props.className
    });

    const parameters = {
      top      : this.state.top,
      left     : this.state.left,
      right    : this.state.right,
      bottom   : this.state.bottom,
      maxWidth : this.props.maxWidth,
      width    : this.state.width
    };

    return (
      <div
        ref={container => this.container = container}
        className={classes}
        style={parameters}
      >
        <div className='notification__container'>
          <span className='notification__text'>{this.props.text}</span>
          {this.props.size === 'large'
            ? (<div className='notification__closeBlock'>
            <div
              className='notification__closeBlock__closeArea'
              onTouchTap={this.props.onHideNotification}
            />
          </div>)
            : null
          }
        </div>
      </div>
    );
  }
}
