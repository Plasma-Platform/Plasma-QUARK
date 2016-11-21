import React, { Component, PropTypes } from 'react';
import classnames                      from 'classnames';

import './TypographyHeader.less';

export default class TypographyHeader extends Component {
  static propTypes = {
    size      : PropTypes.oneOf([0, 1, 2, 3]).isRequired,
    themeType : PropTypes.string,
    className : PropTypes.string
  };

  render () {
    const typoClass = classnames({
      'TMUI__TypographyHeader'                                     : true,
      [`TMUI__TypographyText--${this.props.themeType || 'light'}`] : true,
      [`TMUI__TypographyHeader--${this.props.size}`]               : true,
      [this.props.className]                                       : this.props.className
    });

    switch (this.props.size) {
      case 0:
        return (
          <h0 className={typoClass}>
            {this.props.children}
          </h0>
        );
      case 1:
        return (
          <h1 className={typoClass}>
            {this.props.children}
          </h1>
        );
      case 2:
        return (
          <h2 className={typoClass}>
            {this.props.children}
          </h2>
        );
      case 3:
        return (
          <h3 className={typoClass}>
            {this.props.children}
          </h3>
        );
    }
  }
}
