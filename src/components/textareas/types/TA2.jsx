import React, { Component, PropTypes } 	from 'react';

import TextArea from '../TextArea.jsx';

export default class TA2 extends Component {
    static propTypes = {        
        type                    : React.PropTypes.string,
        id                      : React.PropTypes.string,
        value                   : React.PropTypes.string,
        disabled                : React.PropTypes.bool,
        label                   : React.PropTypes.string,
        notificationText        : React.PropTypes.string,
        onValidate              : React.PropTypes.func
    };

    getValue = () => {
        return this.input.getValue();
    }

    render() {

        return (
            <TextArea
                ref			     = {input => this.input = input}
                fieldType	     = 'TA2'
                type		     = { this.props.type }
                id 			     = { this.props.id }
                value		     = { this.props.value }
                disabled	     = { this.props.disabled }
                label		     = { this.props.label }
                className	     = { this.props.className || ''}
                onValidate 	     = { this.props.onValidate }
                notificationText = {this.props.notificationText}
            />
        );
    }
}
