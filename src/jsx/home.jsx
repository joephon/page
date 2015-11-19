'use strict'

import React from 'react';


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			interval: true,
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.run();
		},0);
		setInterval(() => {
			this.run()
		},6100);
	}

	run() {
		let skill = document.getElementsByClassName('skill');
		if(this.state.interval) {
			for(let i = 0; i < skill.length; i ++) {
				skill[i].style.left = Math.random() * window.innerWidth + 'px';
				skill[i].style.top = Math.random() * window.innerHeight  + 'px';
				skill[i].style.fontSize = Math.random() * 50 + 'px';
				skill[i].style.color = Math.random() >= 0.9 ? 'red' : '#eee' ;
				// skill[i].style.transform = Math.random() > 0.5 ? 'rotate(' + Math.random() * 360 + 'deg)' : 'rotate(' + Math.random() * -360 + 'deg)';
			}
		}
	}

	avatarHover() {
		if (this.refs.avatar.className !== 'avatar-click') {
			this.refs.avatar.className === 'avatar'
			? this.refs.avatar.className = 'avatar animated infinite pulse'
			: this.refs.avatar.className = 'avatar'
		}
	}


	avatarClick() {
		this.setState({interval:this.state.interval ? false : true})
		let skill = document.getElementsByClassName('skill');
		if(this.refs.avatar.className === 'avatar'){
			for(let i = 0; i < skill.length; i ++) {
				skill[i].setAttribute('class','skill animated hinge')
			}
			this.refs.avatar.className = 'avatar-click';
			this.refs.pic.style.opacity = '1';
			setTimeout(() => {
				this.refs.round.style.transform = 'rotate(360deg)';
			},200)
		}
		else {
			for(let i = 0; i < skill.length; i ++) {
				skill[i].setAttribute('class','skill animated rotateInUpLeft')
			}
			this.refs.avatar.className = 'avatar';
			this.refs.pic.style.opacity = '0';
			setTimeout(() => {
				this.refs.round.style.transform = 'rotate(0deg)';
			},200)
		}
	}

	render() {
		return(
				<div className='home'>
					<div className='container'>
						<div ref='round' className='round'>
							<span className='glyphicon glyphicon-cog'></span>
						</div>
						<div ref='avatar'
								 className='avatar animated infinite pulse'
								 onMouseOver={this.avatarHover.bind(this)}
								 onMouseOut={this.avatarHover.bind(this)}
								 onClick={this.avatarClick.bind(this)}>
							<div ref='pic' className='pic'>
								<img src='../src/image/joe.png' />
							</div>
						</div>
						<div className='skill'>JavaScript</div>
						<div className='skill'>CSS3</div>
						<div className='skill'>Canvas</div>
						<div className='skill'>HTML5</div>
						<div className='skill'>Node</div>
						<div className='skill'>Express</div>
						<div className='skill'>Rails</div>
						<div className='skill'>Ruby</div>
						<div className='skill'>React</div>
						<div className='skill'>React Native</div>
						<div className='skill'>Sass</div>
						<div className='skill'>jQuery</div>
						<div className='skill'>Bootstrap</div>
						<div className='skill'>Webpack</div>
						<div className='skill'>Mysql</div>
						<div className='skill'>MongoDB</div>
						<div className='skill'>Git</div>
						<div className='skill'>Linux</div>
					</div>
				</div>
			);
	}
};

export default Home;





