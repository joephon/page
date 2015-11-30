'use strict'

import React from 'react';
import Nav from './m.nav.jsx';
require('../css/m.home.sass');

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	componentDidMount() {

	}

	render() {
		return(
				<div className='m-home animated fadeIn'>
					<Nav title='Home' href={this.props.back}/>
					<div className='container'>
						i am home!
					</div>
				</div>
			);
	}
};


export default Home;









