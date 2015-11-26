'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
require('../css/m.app.sass');

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return (
				<div className='m-app'>
				</div>
			);
	}
};

ReactDOM.render((
		<Router>
			<Route path='/' component={App}>
			</Route>
		</Router>
	),
	document.getElementById('app')
);