import React, { Component, PropTypes } from 'react';
import classnames                      from 'classnames';

import './TypographyText.less';

export default class TypographyText extends Component {
  static propTypes = {
    type      : PropTypes.oneOf(['default', 'secondary', 'success', 'error']).isRequired,
    size      : PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
    children  : PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    className : PropTypes.string
  };

  render () {
    const typoClass = classnames({
      'TMUI__TypographyText'                       : true,
      [`TMUI__TypographyText--${this.props.type}`] : true,
      [`TMUI__TypographyText--${this.props.size}`] : true,
      [this.props.className]                       : this.props.className
    });

    return (
      <p className={typoClass}>
        {this.props.children}
      </p>
    );
  }
}
