import React, {Component, PropTypes} from 'react';
import Notification from '../Notification.jsx';

export default class N1A extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
  }

  static defaultProps = {
    position: 'left'
  }

  setPosition(coords) {
    this.notification.setPosition(coords);
  }

  render() {
    return (
      <Notification

        ref={c => this.notification = c}
        className={this.props.className}
        position='left'
        text={this.props.text}
        status='default'
        size='small'
      />
    );
  }
}
