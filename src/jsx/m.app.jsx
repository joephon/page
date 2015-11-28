'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import Ad from './m.ad.jsx';
import Home from './m.home.jsx';
require('../css/animate.min.css');
require('../css/default.sass');
require('../css/m.app.sass');

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return (
				<div className='container'>
					{this.props.children}
				</div>
			);
	}
};

ReactDOM.render((
		<Router>
			<Route path='/' component={App}>
				<IndexRoute component={Ad} />
				<Route path='home' component={Home} />
			</Route>
		</Router>
	),
	document.getElementById('m-app')
);