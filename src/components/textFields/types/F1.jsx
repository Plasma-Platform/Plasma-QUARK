import React, { Component, PropTypes } 	from 'react';
import TextField 						from '../../TextField.jsx';

export default class F1 extends Component {
	static propTypes = {
		sizeType    : React.PropTypes.string,
		onChange 	: React.PropTypes.func
	}

	constructor(props, context) {
		super(props, context);

		this.value = this.props.value || '';
	}

	changeHandler = (event) => {
		this.value = event.target.value;

		if(typeof this.props.onChange === 'function') {
			this.props.onChange(event);
		}
	}

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
					ref				= {input => this.input = input}
					sizeType	= 'F1'
					onChange	= {this.changeHandler}
				/>
			);
    }
}
