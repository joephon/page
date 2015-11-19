'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import Home from './home.jsx';

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
				</Route>
			</Router>
		),document.getElementById('app')
	);






