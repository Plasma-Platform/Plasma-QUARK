import React, {Component, PropTypes} from 'react';
import Notification from '../Notification.jsx';

export default class N3A extends Component {
  static propTypes = {
    text      : PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]).isRequired,
    className : PropTypes.string
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
        text={this.props.text}
        status='success'
        size='small'
        position='left'
        maxWidth={this.props.maxWidth}
      />
    );
  }
}
