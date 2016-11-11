import React, { Component, PropTypes } from 'react';

import TypographyText from '../TypographyText.jsx';

export default class T3 extends Component {
    static propTypes = {
        type     : PropTypes.string,
        children : PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        className: PropTypes.string
    }

    render() {
        return (
            <TypographyText className={this.props.className} type = {this.props.type} size={3}>
                {this.props.children}
            </TypographyText>
        );
    }
}
