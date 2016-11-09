import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App.jsx';
import TextAreaDemo from './TextAreaDemo.jsx';
import TextFieldDemo from './TextFieldDemo.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="textarea" component={TextAreaDemo}/>
      <Route path="textfield" component={TextFieldDemo}/>
    </Route>
  </Router>
), document.getElementById('app'));
