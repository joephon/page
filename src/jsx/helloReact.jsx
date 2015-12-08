'use strict'

import React from 'react';
require('../css/helloReact.sass');

class HelloReact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 0,
			total: 20,
		};
	}

	componentDidMount() {
		window.addEventListener('keydown',(event) => {
			event.preventDefault();
			if (event.keyCode === 37) {
				this.backward();
			}
			else if (event.keyCode === 39) {
				this.forward();
			}
		},false)
	}

	hrefBack() {
		this.refs.helloReact.className = 'hello-react animated lightSpeedOut';
		setTimeout(() => {
			history.back();
		},800)
	}

	forward() {
		this.setState({step: this.state.step + 1});
	}

	backward() {
		this.setState({step: this.state.step - 1});
	}

	render() {
		return(
				<div ref='helloReact' className='hello-react animated lightSpeedIn'>
					<div className='container'>
						<div ref='back'
								 className='back'
								 onClick={this.hrefBack.bind(this)}>X</div>
						<div ref='process' className='process'>
							<div ref='innerProcess' className='inner-process' style={{width:this.state.step/this.state.total*100 + '%'}}></div>
							<div className='step'>{Math.floor(this.state.step/this.state.total*100)}%</div>
						</div>
						<div className='buttons'>
							<div className='backward' onClick={this.backward.bind(this)}>
								<span className='glyphicon glyphicon-step-backward'></span>
							</div>
							<div className='forward' onClick={this.forward.bind(this)}>
								<span className='glyphicon glyphicon-step-forward'></span>
							</div>
						</div>
					</div>
				</div>
			);
	}
};

export default HelloReact;