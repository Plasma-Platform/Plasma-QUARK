import React, { Component, PropTypes } from 'react';
import classnames                      from 'classnames';

import './TypographyText.less';

export default class TypographyText extends Component {
  static propTypes = {
    type      : PropTypes.oneOf(['default', 'secondary', 'success', 'error']).isRequired,
    themeType : PropTypes.string,
    size      : PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
    className : PropTypes.string
  };

  render () {
    const typoClass = classnames({
      'TMUI__TypographyText'                                       : true,
      [`TMUI__TypographyText--${this.props.themeType || 'light'}`] : true,
      [`TMUI__TypographyText--${this.props.type}`]                 : true,
      [`TMUI__TypographyText--${this.props.size}`]                 : true,
      [this.props.className]                                       : this.props.className
    });

    return (
      <span className={typoClass}>
        {this.props.children}
      </span>
    );
  }
}
