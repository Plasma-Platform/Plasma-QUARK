import React, {Component, PropTypes} from 'react';
import Notification from '../Notification.jsx';

export default class N2C extends Component {
  static propTypes = {
    text      : PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]).isRequired,
    className : PropTypes.string
  }

  static defaultProps = {
    position: 'bottom'
  }

  setPosition(coords) {
    this.notification.setPosition(coords);
  }

  render() {
    return (
      <Notification
        ref={c => this.notification = c}
        className={this.props.className}
        text={this.props.text}
        position='bottom'
        status='error'
        size='small'
        maxWidth={this.props.maxWidth}
      />
    );
  }
}
