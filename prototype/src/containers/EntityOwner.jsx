import React, { Component } from 'react';

export default class EntityOwner extends Component {
  render() {
    return (
      <div>
        <h1>EntityOwner page</h1>
        Display data
        <ul>
        <li>Application: {this.props.params.appId}</li>
        <li>Owner id: {this.props.params.ownerId}</li>
        </ul>
      </div>
    );
  }
}
