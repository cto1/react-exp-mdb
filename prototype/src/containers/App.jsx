import React, { Component } from 'react';
import Nav from './Nav.jsx';
import Home from './Home.jsx';


const data = [
  { id: 1, entityName: 'Above Technology Ltd', status: 'Not verified'},
  { id: 2, entityName: 'Best World Bars Ltd', status: 'Verified'},
  { id: 3, entityName: 'Common Ground Ltd', status: 'Not verified'},
];

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
