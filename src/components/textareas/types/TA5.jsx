import React, { Component, PropTypes } 	from 'react';

import TextArea from '../TextArea.jsx';

export default class TA5 extends Component {
    static propTypes = {
        id                      : React.PropTypes.string,
        value                   : React.PropTypes.string,
        disabled                : React.PropTypes.bool,
        label                   : React.PropTypes.string,
        notificationText        : React.PropTypes.string,
        onValidate              : React.PropTypes.func,
        maxLength               : React.PropTypes.number
    };

    getValue = () => {
        return this.input.getValue();
    }

    render() {

        return (
            <TextArea
                id 			= { this.props.id }
                ref			= {input => this.input = input}
                fieldType	= 'TA5'
                value		= { this.props.value }
                disabled	= { this.props.disabled }
                label		= { this.props.label }
                className	= { this.props.className || ''}
                onValidate 	= { this.props.onValidate }
                maxLength 	= { this.props.maxLength }
                notificationText = {this.props.notificationText}
            />
        );
    }
}
