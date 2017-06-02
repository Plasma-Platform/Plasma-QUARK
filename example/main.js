import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App.jsx';
import TextAreaDemo from './src/pages/TextAreaDemo.jsx';
import TextFieldDemo from './src/pages/TextFieldDemo.jsx';
import StarsRatingDemo from './src/pages/StarsRatingDemo.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="textarea" component={TextAreaDemo}/>
      <Route path="textfield" component={TextFieldDemo}/>
      <Route path="stars-rating" component={StarsRatingDemo}/>
    </Route>
  </Router>
), document.getElementById('app'));
