'use strict'

import React from 'react';
import Nav from './m.nav.jsx';
require('../css/m.apps.sass');

class Apps extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			completed: 15,
		};
	}

	hrefHelloReact() {
		this.refs.helloReact.className = 'item animated bounceOut';
		setTimeout(() => {
			location.href = '#/helloReact';
		},800)
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
									<div className='completed' style={{width:this.state.completed + '%'}}></div>
									<h6>{this.state.completed  +  '%'}</h6>
								</div>
								<h3>Say Hello To React</h3>
							</div>
							<div ref='undefined0' className='item' onClick={this.hrefHelloReact.bind(this)}>
								<div className='dress'></div>
								<div className='process'>
									<div className='completed' style={{width:this.state.completed - 15 + '%'}}></div>
									<h6>{this.state.completed - 15 +  '%'}</h6>
								</div>
								<h3>Undefined</h3>
							</div>
							<div ref='undefined1' className='item' onClick={this.hrefHelloReact.bind(this)}>
								<div className='dress'></div>
								<div className='process'>
									<div className='completed' style={{width:this.state.completed - 15 + '%'}}></div>
									<h6>{this.state.completed - 15 +  '%'}</h6>
								</div>
								<h3>Undefined</h3>
							</div>
							<div ref='undefined2' className='item' onClick={this.hrefHelloReact.bind(this)}>
								<div className='dress'></div>
								<div className='process'>
									<div className='completed' style={{width:this.state.completed - 15 + '%'}}></div>
									<h6>{this.state.completed - 15 +  '%'}</h6>
								</div>
								<h3>Undefined</h3>
							</div>
						</div>
					</div>
				</div>
			)
	}
};

export default Apps;