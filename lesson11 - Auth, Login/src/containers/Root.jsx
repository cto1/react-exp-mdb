import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
// import axios from 'axios';
import AppBar from 'material-ui/AppBar';
import FlatButtonExampleSimple from '../FlatButtonExampleSimple.jsx';
// import MyAwesomeReactComponent from '../MyAwesomeReactComponent.jsx';
// import AppBarExample from '../AppBarExample.jsx';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';


export default class Root extends Component {
  componentDidMount() {
    // axios.get('http://localhost:3030/data')
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <div style={{ display: 'flex' }}>
          {/* <nav>
            <IndexLink to="/" className="link" activeClassName="active">Dashboard</IndexLink>
            <Link to="/main-information" className="link" activeClassName="active">Main Information</Link>
            <Link to="/login" activeClassName="active">Login</Link>
          </nav> */}
          <List style={{ width: 300 }}>
            <ListItem
              containerElement={<IndexLink to="/" />}
              primaryText="Dashboard"
              leftIcon={<ContentSend />}
            />
            <ListItem
              containerElement={<Link to="/main-information" />}
              primaryText="Main Information"
              leftIcon={<ContentDrafts />}
            />
            <ListItem to="/login" primaryText="Login" leftIcon={<ContentDrafts />} />
          </List>
          <div style={{ width: '100%' }}>
            <aside>Search</aside>
            <FlatButtonExampleSimple />
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
