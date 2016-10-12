import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

const data = [
  { id: 1, author: 'Pete Hunt', text: 'This is one comment' },
  { id: 2, author: 'Jordan Walke', text: 'This is *another* comment' },
];

export default class CommentBox extends Component {
  render() {
    return (
      <div>
        <nav>
          <IndexLink to="/" className="link" activeClassName="active">Dashboard</IndexLink>
          <Link to="/main-information" className="link" activeClassName="active">Main Information</Link>
          <Link to="/login" activeClassName="active">Login</Link>
        </nav>
        <aside>Search</aside>
        {this.props.children}
      </div>
    );
  }
}
