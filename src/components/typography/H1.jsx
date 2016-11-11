import React, { Component, PropTypes } from 'react';

import TypographyHeader from '../TypographyHeader.jsx';

export default class H1 extends Component {
    static propTypes = {
        children : PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        className: PropTypes.string
    }

    render() {
        return (
            <TypographyHeader className={this.props.className} size={1}>
                {this.props.children}
            </TypographyHeader>
        );
    }
}
