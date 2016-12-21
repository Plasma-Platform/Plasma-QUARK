import React, {Component, PropTypes} from 'react';
import Buttons from './buttons';
import classnames                      from 'classnames';
import {isEmptyObject} from './utils/isEmptyObject';

import '../assets/styles/animations.less';
import './Notification.less';

export default class Notification extends Component {
  static propTypes = {
    className          : PropTypes.string,
    text               : PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]).isRequired,
    button             : PropTypes.object,
    size               : PropTypes.string.isRequired,
    maxWidth           : PropTypes.string,
    onHideNotification : PropTypes.func,
    status             : PropTypes.oneOf(['default', 'success', 'error']).isRequired,
    position           : PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired
  };

  state = {
    top    : 'initial',
    left   : 'initial',
    right  : 'initial',
    bottom : 'initial'
  };

  componentDidMount () {
    this.getContainerWidth();
  };

  getContainerWidth = () => {
    if (this.container) this.setState({width: this.container.offsetWidth + 2});
  };

  setPosition (coords) {
    this.setState(coords);
  };

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

    const Button = !isEmptyObject(this.props.button) ? Buttons[this.props.button.code ? this.props.button.code : 'B2J'] : null;
    return (
      <div
        ref={container => this.container = container}
        className={classes}
        style={parameters}
      >
        <div className='notification__container'>
          <span className='notification__text' dangerouslySetInnerHTML={{__html: this.props.text}}>{this.props.children}</span>
          {this.props.size === 'large'
            ? (<div className='notification__closeBlock'>
            <div
              className='notification__closeBlock__closeArea'
              onClick={this.props.onHideNotification}
              onTouchEnd={this.props.onHideNotification}
            />
          </div>)
            : null
          }
        </div>
        {Button
          ? (
            <Button action={this.props.button.action} type={this.props.button.type} className={this.props.button.className}>{this.props.button.text}</Button>
          )
          : null
        }
      </div>
    );
  }
}
