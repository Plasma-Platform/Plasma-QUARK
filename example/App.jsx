import React from 'react';
import 'ui-toolkit/css/main.css';
import '../css/main.css';
import './main.less';

export default class App extends React.Component {
  render () {
    return (
      <article>
        <h1 className="spacing-outer-bottom-20">Demo app</h1>
        {this.props.children}
      </article>
    );
  }
}