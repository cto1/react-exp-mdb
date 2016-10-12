import React, { Component } from 'react' ;
import ReactDOM from 'react-dom';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import Dashboard from './containers/Dashboard.jsx';
import MainInformation from './containers/MainInformation.jsx';
import DetailInfo from './containers/DetailInfo.jsx';
import './styles/index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Dashboard}>
      <IndexRoute component={() => <div>Welcome to the Dashboard</div>} />
      <Route path="/main-information" component={MainInformation}>
        <Route path="/main-information/detail-info" component={DetailInfo} />
      </Route>
    </Route>
    <Route path="/login" component={() => <div>Login</div>} />
  </Router>,
  document.getElementById('app')
);
