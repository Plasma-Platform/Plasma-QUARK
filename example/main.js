import React from 'react';
import ReactDOM from 'react-dom';
import TextFields from '../lib/textFields';
import Typography from '../lib/typography';

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
          eyeTooltipText="Test text"
          notificationText='Test text Test text Test text Test text Test text'
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

        <Typography.H0 >Text<a href="#">111</a><a href="#" className="error-link">111</a><a href="#" className="success-link">111</a></Typography.H0>
        <Typography.H1 >Text</Typography.H1>
        <Typography.H2 >Text</Typography.H2>
        <Typography.H3 >Text</Typography.H3><br/>

        <Typography.T1 type="default">Text <a href="#">111</a></Typography.T1><br/>
        <Typography.T4 type="secondary">Text <a href="#">111</a></Typography.T4><br/>
        <Typography.T2 type="error">Text <a href="#">111</a></Typography.T2><br/>
        <Typography.T3 type="success">Text <a href="#">111</a></Typography.T3><br/>

        <Typography.T5 type="default">Text</Typography.T5><br/>
        <Typography.T6 type="default">Text</Typography.T6>

        <div style={{backgroundColor: '#000000'}}>
          <Typography.H0 themeType="dark">Text<a href="#">111</a><a href="#" className="error-link">111</a><a href="#" className="success-link">111</a></Typography.H0>
          <Typography.H1 themeType="dark">Text</Typography.H1>
          <Typography.H2 themeType="dark">Text</Typography.H2>
          <Typography.H3 themeType="dark">Text</Typography.H3><br/>

          <Typography.T1 type="default" themeType="dark">Text <a href="#">111</a></Typography.T1><br/>
          <Typography.T4 type="secondary" themeType="dark">Text <a href="#">111</a></Typography.T4><br/>
          <Typography.T2 type="error" themeType="dark">Text <a href="#">111</a></Typography.T2><br/>
          <Typography.T3 type="success" themeType="dark">Text <a href="#">111</a></Typography.T3><br/>

          <Typography.T5 type="default" themeType="dark">Text</Typography.T5><br/>
          <Typography.T6 type="default" themeType="dark">Text</Typography.T6>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Element />, document.getElementById('app'));
