import React, { Component, PropTypes } from 'react';

const { object } = PropTypes;

export default class DetailInfo extends Component {
  static contextTypes = {
    router: object,
  }

  render() {
    return (
      <div>
        <div>Some detail info</div>
        <button onClick={this.context.router.goBack}>Back</button>
      </div>
    );
  }
}
