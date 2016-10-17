import React, { Component } from 'react';

export default class ApplicationSummary extends Component {
  render() {
    return (
      <div>
      <h1>ApplicationSummary page</h1>
      Display data
        <ul>
        <li>Application: {this.props.params.appId}</li>
        </ul>
      </div>
    );
  }
}
