import React, {
  Component,
  PropTypes
} from 'react';
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
    closeIconId        : PropTypes.string,
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
    if (this.container) this.setState({width: (this.container.offsetWidth || 0) + 2});
  };

  setPosition (coords) {
    this.setState(coords);
  };

  render () {
    const classes = classnames({
      'quark-notification'                                   : true,
      [`quark-notification--${this.props.size}`]             : true,
      [`quark-notification--${this.props.status}`]           : true,
      [`quark-notification--${this.props.position}`]         : true,
      [`quark-notification--${this.props.position}-arrow`]   : true,
      [`quark-animated-tooltip_open_${this.props.position}`] : true,
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

    if ( !isEmptyObject(this.props.button) ) {
      const Button = Buttons[this.props.button.code ? this.props.button.code : 'B2J'];
      const buttonAttr = {
        onClick   : this.props.button.onClick,
        type      : this.props.button.type,
        className : this.props.button.className
      };
      if (this.props.button.id) {
        buttonAttr.id = this.props.button.id;
      }
    } else {
      const Button = null;
    }

    return (
      <div
        ref={container => this.container = container}
        className={classes}
        style={parameters}
      >
        <div className='quark-notification__container'>
          <span className='quark-notification__text' >
            {this.props.text}
            </span>
          {this.props.size === 'large'
            ? (<div className='quark-notification__closeBlock'>
            <div
              className='quark-notification__closeBlock__closeArea'
              onClick={this.props.onHideNotification}
              onTouchEnd={this.props.onHideNotification}
              id={this.props.closeIconId}
            />
          </div>)
            : null
          }
        </div>
        {Button
          ? (
            <Button {...buttonAttr}>{this.props.button.text}</Button>
          )
          : null
        }
      </div>
    );
  }
}
