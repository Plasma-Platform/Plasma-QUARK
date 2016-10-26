import React, {Component, PropTypes} from 'react';
import LargeNotification from '../LargeNotification.jsx';

export default class N1J extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    typographyCode: PropTypes.oneOf([
      'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'H3']).isRequired,
    width: PropTypes.string,
    className: PropTypes.string
  }

  render() {
    return (
      <LargeNotification
        className={this.props.className}
        text={this.props.text}
        typographyCode={this.props.typographyCode}
        width={this.props.width}
      />
    );
  }
}
