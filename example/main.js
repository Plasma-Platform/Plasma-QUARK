import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import TextFields from '../lib/textFields';
import TextAreaDemo from './TextAreaDemo.jsx';

import 'ui-toolkit/css/main.css';
import '../css/main.css';
import './main.less';

export default class App extends React.Component {
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

  // render () {
  //   return (
  //     <div className="half-width">
  //
  //       <TextFields.F4
  //         label='Enter your email'
  //         eyeTooltipText="asdasdasdds"
  //         notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
  //         notificationType='N2F'
  //         maxWidth="300"
  //         onBlur={() => null}
  //         onChange={() => null}
  //         onKeyDown={this.validate}
  //         validate={this.validate}
  //         ref="email"
  //         type='password'
  //         value=''
  //       />
  //     </div>
  //   );
  // }

  render () {
    return (<TextAreaDemo />);
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={App}/>
      <Route path="/ta" component={TextAreaDemo}/>
    </Route>
  </Router>), document.getElementById('app'));
