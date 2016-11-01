import React from 'react';
import ReactDOM from 'react-dom';
import TextFields from '../lib/textFields';

import 'ui-toolkit/css/main.css';
import '../css/main.css';

export default class Element extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.validate = this.validate.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
  }

  showTooltip (ref) {
    let innerRef = ref.input;

    innerRef.setValidationStatus(false, innerRef.props.notificationText);
  }

  validate () {
    this.showTooltip(this.refs.email);
  }

  render () {
    return (
      <div className="half-width">

        <TextFields.F4
          label='Enter your email'
          eyeTooltipText="asdasdasdds"
          notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
          notificationType='N2F'
          maxWidth="300"
          onBlur={() => null}
          onChange={() => null}
          onKeyDown={this.validate}
          validate={this.validate}
          ref="email"
          type='password'
          value=''
        />
      </div>
    );
  }
}

ReactDOM.render(<Element />, document.getElementById('app'));
