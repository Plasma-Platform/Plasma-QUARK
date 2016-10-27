import React, {Component, PropTypes} from 'react';
import Notification from '../Notification.jsx';

export default class N2B extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
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
        status='error'
        size='small'
        position='right'
      />
    );
  }
}
