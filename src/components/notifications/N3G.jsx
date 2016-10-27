import React, {Component, PropTypes} from 'react';
import Notification from '../Notification.jsx';

export default class N3G extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onHideNotification: PropTypes.func.isRequired,
    maxWidth: PropTypes.string,
    className: PropTypes.string
  }

  static defaultProps = {
    position: 'right'
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
        onHideNotification={this.props.onHideNotification}
        maxWidth={this.props.maxWidth}
        status='success'
        size='large'
        position='right'
      />
    );
  }
}
