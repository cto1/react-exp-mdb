import React, { Component } from 'react';

const data = [
  { id: 1, entityName: 'Above Technology Ltd', status: 'Not verified'},
  { id: 2, entityName: 'Best World Bars Ltd', status: 'Verified'},
  { id: 3, entityName: 'Common Ground Ltd', status: 'Not verified'},
];

export default class Applications extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this.setState({ data });
  }

  render() {
      var applications = this.state.data.map(app => (
        <div key={app.id}> id={app.id} entityName={app.entityName} status={app.status}</div>
      ));
    return (
      <div>Applications table
        <p>{applications}}</p>
      </div>
    );
  }
}
