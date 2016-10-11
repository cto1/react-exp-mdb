import React, { Component } from 'react' ;
import ReactDOM from 'react-dom';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import Root from './containers/Root.jsx';
import CommentBox from './containers/CommentBox.jsx';
import Search from './containers/Search.jsx';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={CommentBox}>
        <Route path="/search" component={Search} />
      </IndexRoute>
      <Route path="/login" component={() => <div>Login</div>} />
    </Route>
  </Router>,
  document.getElementById('app')
);
