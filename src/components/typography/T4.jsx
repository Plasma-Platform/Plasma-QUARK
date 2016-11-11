import React, { Component, PropTypes } from 'react';

import TypographyText from '../TypographyText.jsx';

export default class T4 extends Component {
    static propTypes = {
        type     : PropTypes.string,
        children : PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        className: PropTypes.string
    }

    render() {
        return (
            <TypographyText className={this.props.className} type = {this.props.type} size={4}>
                {this.props.children}
            </TypographyText>
        );
    }
}
