import React, { Component } from 'react' ;
import ReactDOM from 'react-dom';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import App from './containers/App.jsx';
import Applications from './containers/Applications.jsx';
import Tasks from './containers/Tasks.jsx';
import Logs from './containers/Logs.jsx';
import ApplicationSummary from './containers/ApplicationSummary.jsx';
import EntityOwner from './containers/EntityOwner.jsx';
import Home from './containers/Home.jsx';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} >
        <IndexRoute component={Home}/>
        <Route path="/apps" component={Applications} />
        <Route path="/apps/:appId" component={ApplicationSummary} />
        <Route path="/apps/:appId/:ownerId" component={EntityOwner} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/logs" component={Logs} />
    </Route>
  </Router>,
  document.getElementById('app')
);
