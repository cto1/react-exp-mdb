import React, { Component } from 'react' ;
import ReactDOM from 'react-dom';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
//import App from './containers/App.jsx';
import Applications from './containers/Applications.jsx';
import Tasks from './containers/Tasks.jsx';
import Logs from './containers/Logs.jsx';
import ApplicationSummary from './containers/ApplicationSummary.jsx';
import EntityOwner from './containers/EntityOwner.jsx';
import Home from './containers/Home.jsx';
import './styles/index.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import RaisedButton from 'material-ui/RaisedButton'; 
const MyAwesomeReactComponent = () => (
  <RaisedButton label="Default" />
);
 
class App extends Component {
  render() {  
    return (
      <MuiThemeProvider>
         <MyAwesomeReactComponent />
      </MuiThemeProvider>
  );
 }
}
 
ReactDOM.render(
  <App />,
  document.getElementById('app')
);

// ReactDOM.render(
//   <Router history={browserHistory}>
//     <Route path="/" component={App} >
//         <IndexRoute component={Home}/>
//         <Route path="/apps" component={Applications} />
//         <Route path="/apps/:appId" component={ApplicationSummary} />
//         <Route path="/apps/:appId/:ownerId" component={EntityOwner} />
//         <Route path="/tasks" component={Tasks} />
//         <Route path="/logs" component={Logs} />
//     </Route>
//   </Router>,
//   document.getElementById('app')
// );
