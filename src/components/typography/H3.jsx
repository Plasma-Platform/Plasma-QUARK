import React, { Component, PropTypes } from 'react';

import TypographyHeader from '../TypographyHeader.jsx';

export default class H3 extends Component {
  static propTypes = {
    themeType : PropTypes.string,
    className : PropTypes.string
  }

  render () {
    return (
      <TypographyHeader
        className={this.props.className}
        size={3}
        themeType={this.props.themeType}
      >
        {this.props.children}
      </TypographyHeader>
    );
  }
}
