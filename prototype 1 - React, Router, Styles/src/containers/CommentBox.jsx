import React, { Component } from 'react';
import { Link } from 'react-router';
import CommentList from '../components/CommentList.jsx';
import CommentForm from './CommentForm.jsx';

const data = [
  { id: 1, author: 'Pete Hunt', text: 'This is one comment' },
  { id: 2, author: 'Jordan Walke', text: 'This is *another* comment' },
];

export default class CommentBox extends Component {
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={data} />
        <CommentForm />
        <Link to="/search" activeClassName="active">Search</Link>
        {this.props.children}
      </div>
    );
  }
}
