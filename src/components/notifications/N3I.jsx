import React, {
  Component,
  PropTypes
} from 'react';
import Notification from '../Notification.jsx';

export default class N3I extends Component {
  static propTypes = {
    text               : PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]).isRequired,
    onHideNotification : PropTypes.func.isRequired,
    maxWidth           : PropTypes.string,
    className          : PropTypes.string
  }

  static defaultProps = {
    position: 'left'
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
        onHideNotification={this.props.onHideNotification}
        maxWidth={this.props.maxWidth}
        status='success'
        size='large'
        position='left'
      />
    );
  }
}
