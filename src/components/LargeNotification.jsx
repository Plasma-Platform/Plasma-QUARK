import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';

import Typography from 'ui-toolkit/lib/typography';

import './LargeNotification.less';

export default class LargeNotification extends Component {
  static propTypes = {
    className      : PropTypes.string,
    text           : PropTypes.string.isRequired,
    typographyCode : PropTypes.oneOf([
      'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'H3']).isRequired,
    width: PropTypes.string
  }

  render () {
    const classes = classnames({
      'notification_large'   : true,
      [this.props.className] : this.props.className
    });

    const Text = Typography[this.props.typographyCode];

    return (
      <div className={classes} style={{width: this.props.width}}>
        <div className='notification_large__icon'/>

        <div className='notification_large__text'>
          <Text type='default'>{this.props.text}</Text>
        </div>
      </div>
    );
  }
}
