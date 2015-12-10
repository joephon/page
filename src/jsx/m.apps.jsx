'use strict'

import React from 'react';
import Nav from './m.nav.jsx';
require('../css/m.apps.sass');

class Apps extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	hrefHelloReact() {
		
	}

	render() {
		return(
				<div ref='apps' className='m-apps'>
					<Nav title='Apps' />
					<div className='container'>
						<div className='list animated bounceInUp'>
							<div ref='helloReact' className='item' onClick={this.hrefHelloReact.bind(this)}>
								<div className='dress'></div>
								<div className='process'>
									15%
									<div className='completed'></div>
								</div>
								<h3>Say Hello To React</h3>
							</div>
						</div>
					</div>
				</div>
			)
	}
};

export default Apps;