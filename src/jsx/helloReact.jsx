'use strict'

import React from 'react';
require('../css/helloReact.sass');

let text = [
	{
		step: 0,
		en: 'Hi mate, Nice to see you here! I wanna talk about some key points of React. If you\'d never ever heard about it or got litte bit comfused with it or casually you are a front end developer, I\'d like to sugguest you to take a look at and had better learn about it! Don\'t ask me why, you know the whole world\'s staring at React! the most famous front end framework called Twitter Bootstrap, it got a React version. The very blog system called Wordpress which powers more than 25% internet, it decided to go with React over Angular. This is just the latest signal of React\'s increasing importance and staying power. As I know, React could not be more awesome! I happen to made this App to show how React works and which part you should pay attention to. By the way, React is not for new commers, it requires some very basic skills such as HTML, CSS and JavaScript. Also it would cost you plenty of times to practice. If these will not stop you, then these will not be the problem. Anyway, trust me, it worth! Are you ready? Go!',
		cn: '一',
	},
	{
		step: 1,
		en: 'two',
		cn: '二',
	},
	{
		step: 2,
		en: 'three',
		cn: '三',
	},
];

class HelloReact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 0,
			total: 20,
			language: 'En',
		};
	}

	componentDidMount() {
		window.addEventListener('keydown',this.onKeyDown.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('keydown',this.onKeyDown.bind(this));
	}

	onKeyDown(event) {
		event.preventDefault();
		if (event.keyCode === 37) {
			this.backward();
		}
		else if (event.keyCode === 39) {
			this.forward();
		}
	}

	language() {
		this.setState({language: this.state.language === 'En'
		? 'Cn'
		: 'En'});
	}

	hrefBack() {
		this.refs.helloReact.className = 'hello-react animated lightSpeedOut';
		setTimeout(() => {
			history.back();
		},800)
	}

	forward() {
		this.setState({step: this.state.step < this.state.total 
		? this.state.step + 1
		: this.state.total});
	}

	backward() {
		this.setState({step: this.state.step > 0
		? this.state.step - 1
		: this.state.step});
	}


	render() {
		return(
				<div ref='helloReact' className='hello-react animated lightSpeedIn'>
					<div className='container'>
						<div ref='process' className='process'>
							<div ref='innerProcess' className='inner-process' style={{width:this.state.step/this.state.total*100 + '%'}}></div>
							<div className='step'>{Math.floor(this.state.step/this.state.total*100)}%</div>
						</div>
						{text.map((item) => {
							return (
									<div key={item.step}
									 className='section animated lightSpeedIn'
									 style={{display:this.state.step === item.step
									 ? 'block'
									 : 'none'}}
									 >
									 {this.state.language == 'En'
									 ? item.en
									 : item.cn}
									</div>
								)
						})}
						<div className='buttons'>
							<div className='backward' onClick={this.backward.bind(this)}>
								<span className='glyphicon glyphicon-step-backward'></span>
							</div>
							<div className='forward' onClick={this.forward.bind(this)}>
								<span className='glyphicon glyphicon-step-forward'></span>
							</div>
						</div>
						<div ref='language'
								 className='language'
								 onClick={this.language.bind(this)}>{this.state.language}</div>
						<div ref='back'
								 className='back'
								 onClick={this.hrefBack.bind(this)}>X</div>
					</div>
				</div>
			);
	}
};

export default HelloReact;