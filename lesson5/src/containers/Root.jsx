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
          <IndexLink to="/" className="link" activeClassName="active">Home</IndexLink>
          <Link to="/login" activeClassName="active">Login</Link>
        </nav>
        {this.props.children}
      </div>
    );
  }
}