import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './App.jsx';
import TextAreaDemo from './TextAreaDemo.jsx';
import TextFieldDemo from './TextFieldDemo.jsx';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="ta" component={TextAreaDemo}/>
      <Route path="tf" component={TextFieldDemo}/>
    </Route>
  </Router>), document.getElementById('app'));
