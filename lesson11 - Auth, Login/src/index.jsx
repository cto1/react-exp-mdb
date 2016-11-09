import React from 'react' ;
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes.jsx';
import './styles/index.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// ReactDOM.render(
// ,
//   document.getElementById('app'),
// );

const App = () => (
  <MuiThemeProvider>
    <Router
      routes={routes}
      history={browserHistory}
    />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
