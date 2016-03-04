'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route, IndexRoute } from 'react-router';
import Home from './home.jsx';
import Profile from './profile.jsx';
import Apps from './apps.jsx';
import HelloReact from './helloReact.jsx';
import Games from './games.jsx';
import Notes from './notes.jsx';
import noMatch from './noMatch.jsx';
import Admin from './admin.jsx';
require('../css/default.sass');
require('../css/animate.min.css');
require('../css/app.sass');



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
        <div className='app'>
          <div className='container'>
            {this.props.children && React.cloneElement(this.props.children, {back: '#/'})}
          </div>
        </div>
      );
  }
};

ReactDOM.render((
      <Router history={createBrowserHistory()}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='home' component={Home} />
          <Route path='profile' component={Profile} />
          <Route path='apps' component={Apps} />
          <Route path='games' component={Games} />
          <Route path='notes' component={Notes} />
          <Route path='app/helloReact' component={HelloReact} />
          <Route path='admin' component={Admin} />
          <Route path='*' component={noMatch} />
        </Route>
      </Router>
    ),document.getElementById('app')
  );






