import React from 'react' ;
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes.jsx';
import './styles/index.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent.jsx';
import AppBarExample from './AppBarExample.jsx';
import FlatButtonExampleSimple from './FlatButtonExampleSimple.jsx';

// ReactDOM.render(
//   <Router
//     routes={routes}
//     history={browserHistory}
//   />,
//   document.getElementById('app'),
// );

const App = () => (
  <MuiThemeProvider>
    <div>Hello world</div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
