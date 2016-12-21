import React, {Component, PropTypes} from 'react';
import Notification from '../Notification.jsx';

export default class N1B extends Component {
  static propTypes = {
    text      : PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]).isRequired,
    className : PropTypes.string
  }

  static defaultProps = {
    position: 'right'
  }

  setPosition (coords) {
    this.notification.setPosition(coords);
  }

  render () {
    return (
      <Notification
        {...this.props}
        ref={c => this.notification = c}
        className={this.props.className}
        text={this.props.text}
        status='default'
        size='small'
        position='right'
        maxWidth={this.props.maxWidth}
      />
    );
  }
}
