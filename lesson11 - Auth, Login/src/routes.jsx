import React from 'react' ;
import { IndexRoute, Route } from 'react-router';
import Root from './containers/Root.jsx';
import MainInformation from './containers/MainInformation.jsx';
import DetailInfo from './containers/DetailInfo.jsx';
import Signup from './containers/Signup.jsx';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={() => <div>Welcome to the Dashboard</div>} />
    <Route path="/main-information" component={MainInformation}>
      <Route path="/main-information/detail-info" component={DetailInfo} />
    </Route>
    <Route path="/login" component={() => <div>Login</div>} />
    <Route path="/signup" component={Signup} />
  </Route>
);
