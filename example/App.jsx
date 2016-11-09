import React from 'react';
import { Link } from 'react-router';
import 'ui-toolkit/css/main.css';
import '../css/main.css';
import './main.less';

export default class App extends React.Component {
  render () {
    return (
      <article>
        <div className="flex align-center">
          <h1 className="spacing-outer-bottom-20">QUARK Components Demo App</h1>
          <ul className="flex align-center demo-menu">
            <li className="spacing-right-20">
              <Link to="/textfield">Textfield</Link>
            </li>
            <li className="spacing-right-20">
              <Link to="/textarea">Textarea</Link>
            </li>
          </ul>
        </div>
        {this.props.children}
      </article>
    );
  }
}