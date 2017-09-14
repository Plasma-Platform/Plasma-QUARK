import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import F1 from 'quark/lib/components/fields/F1';
import 'quark/lib/components/fields/F1.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <F1 value="test" />
      </div>
    );
  }
}

export default App;
