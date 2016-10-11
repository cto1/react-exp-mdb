import React, { Component } from 'react';
import { Link } from 'react-router';

export default class CommentBox extends Component {
  render() {
    return (
      <div className="commentBox">
        <h3>Main information</h3>
        <p>Some data</p>
        <Link to="/main-information/detail-info" activeClassName="active">Detail info</Link>
        {this.props.children}
      </div>
    );
  }
}
