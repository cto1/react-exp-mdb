import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import axios from 'axios';

export default class extends Component {
  componentDidMount() {
    axios.get('http://localhost:3030/data')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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
