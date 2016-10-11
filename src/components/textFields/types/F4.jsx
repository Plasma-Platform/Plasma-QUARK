import React, { Component, PropTypes }  from 'react';
import TextField                        from '../../TextField.jsx';

export default class F4 extends Component {
    static propTypes = {
        sizeType    : React.PropTypes.string,
        onChange 	: React.PropTypes.func
    }

    constructor(props, context) {
        super(props, context);
    }

    get value(){
        return this.getValue();
    }

    set value(val) {}

    getValue = () => {
        return this.input.getValue();
    }

    focus = () => {
        this.input.focus();
    }

    render() {

        return (
            <TextField
                {...this.props}
                ref       = {input => this.input = input}
                sizeType  = 'F4'
                onChange	= {this.changeHandler}
            />
        );
    }
}
