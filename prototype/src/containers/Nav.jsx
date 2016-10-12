import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import NavLink from './NavLink.jsx';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/apps">Applications</NavLink></li>
          <li><NavLink to="/tasks">Tasks</NavLink></li>
          <li><NavLink to="/logs">Logs</NavLink></li>
        </ul>
      </div>
    );
  }
}
