'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import Home from './home.jsx';
import Profile from './profile.jsx';
import Apps from './apps.jsx';
import HelloReact from './helloReact.jsx';
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
						{this.props.children}
					</div>
				</div>
			);
	}
};

ReactDOM.render((
			<Router>
				<Route path='/' component={App}>
					<IndexRoute component={Home} />
					<Route path='home' component={Home} />
					<Route path='profile' component={Profile} />
					<Route path='apps' component={Apps} />
					<Route path='app/helloReact' component={HelloReact} />
				</Route>
			</Router>
		),document.getElementById('app')
	);






