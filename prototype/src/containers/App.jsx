import React, { Component } from 'react';
import Nav from './Nav.jsx';
import Home from './Home.jsx';

export default class App extends Component {
  render() {
    return (
      <div>App
        <Nav />
        {this.props.children || <Home/>}
      </div>
    );
  }
}
