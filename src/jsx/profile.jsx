'use strict'

import React from 'react';
import Nav from './nav.jsx';

// define section objects
let section = document.getElementsByClassName('section');

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			info: null,
			en: true,
			translate: true,
			isPicked: false,
			hover: null,
			section: null,
			// main: this.mainText(),
			hrefAnimation: () => {
				this.refs.profile.className = 'profile animated bounceOutLeft';
			},
		};
	}

	componentDidMount() {
		setTimeout(() => this.showSections(),400)
	}

	showSections() {
		// define black's width and height to make sure it would display full page
		this.refs.black.style.width = window.innerWidth + 'px';
		this.refs.black.style.height = window.innerHeight + 'px';
		// define animation for sections
		for(let i = 0; i < section.length; i ++) {
			setTimeout(() => {
				section[i].style.top = '100px';
				section[i].style.right = '50%';
				window.innerWidth <= 768 + 'px' 
				? section[i].style.marginRight = '-400px'
				: section[i].style.marginRight = '-300px'
				setTimeout(() => {
					section[i].style.transform = 'rotate(' + i*20 + 'deg)';
					this.refs.main.className = 'section';
				},800)
			},i*200);
		}
	}

	hideBlack() {
		if(this.state.section === 'main') {
			this.clickMain();
		}
		else if(this.state.section === 'skill') {
			this.clickSkill();
		}
		else if(this.state.section === 'plan') {
			this.clickPlan();
		}
		else if(this.state.section === 'hobby') {
			this.clickHobby();
		}
	}
 
 	switch(event) {
 		let info = event.target.getAttribute('data-info');
 		this.setState({info:info},() => {
	 		if(this.state.translate) {
		 		this.setState({translate:false, en:this.state.en ? false : true},() => {
			 		if(this.state.en) {
			 			this.refs.button.style.boxShadow = 'none';
			 			this.refs.switch.style.backgroundColor = '#999';
			 			this.refs.button.style.right = '20px';
			 			this.refs.button.style.backgroundColor = '#fff';
			 		}
			 		else {
			 			this.refs.button.style.boxShadow = '1px 1px 20px rgb(45,183,245)';
			 			this.refs.switch.style.backgroundColor = 'rgba(45,183,245,.5)';
			 			this.refs.button.style.right = 0;
			 			this.refs.button.style.backgroundColor = 'rgb(45,183,245)';
			 		}
		 		});
		 		setTimeout(() => {
		 			this.setState({translate: true})
		 		},500)
	 		}
 		});
 	}

	mainText() {
		if(this.state.en) {
			return {title: 'Basic'}
		}
		else {
			return {title: '基本信息'}
		}
	}

	clickMain() {
		if(!this.state.isPicked) {
			this.setState({isPicked:true,section:'main'});
			this.refs.black.style.display = 'block';
			this.refs.main.className = 'section section-picked section-shadow';
		}
		else {
			this.setState({isPicked:false});
			this.refs.black.style.display = 'none';
			this.refs.main.className = 'section';
		}
	}

	hoverMain() {
		if(!this.state.isPicked) {
			if(this.state.hover != 'main') {
				this.setState({hover:'main'});
				this.refs.main.className = 'section section-hover';
				this.refs.main.style.marginRight = '-400px';
			}
			else {
				this.setState({hover:null})
				this.refs.main.className = 'section';
				this.refs.main.style.marginRight = '-300px';
			}
		}
	}

	clickSkill() {
		if(!this.state.isPicked) {
			this.setState({isPicked:true,section:'skill'});
			this.refs.black.style.display = 'block';
			this.refs.skill.className = 'section section-picked section-shadow';
		}
		else {
			this.setState({isPicked:false});
			this.refs.black.style.display = 'none';
			this.refs.skill.className = 'section';
		}
	}

	hoverSkill() {
		if(!this.state.isPicked) {
			if(this.state.hover != 'skill') {
				this.setState({hover:'skill'})
				this.refs.skill.className = 'section section-hover';
			}
			else {
				this.setState({hover:null})
				this.refs.skill.className = 'section';
			}
		}
	}

	clickPlan() {
		if(!this.state.isPicked) {
			this.setState({isPicked:true,section:'plan'});
			this.refs.black.style.display = 'block';
			this.refs.plan.className = 'section section-picked section-shadow';
		}
		else {
			this.setState({isPicked:false});
			this.refs.black.style.display = 'none';
			this.refs.plan.className = 'section';
		}
	}

	hoverPlan() {
		if(!this.state.isPicked) {
			if(this.state.hover != 'plan') {
				this.setState({hover:'plan'})
				this.refs.plan.className = 'section section-hover';
			}
			else {
				this.setState({hover:null})
				this.refs.plan.className = 'section';
			}
		}
	}

	clickHobby() {
		if(!this.state.isPicked) {
			this.setState({isPicked:true,section:'hobby'});
			this.refs.black.style.display = 'block';
			this.refs.hobby.className = 'section section-picked section-shadow';
		}
		else {
			this.setState({isPicked:false});
			this.refs.black.style.display = 'none';
			this.refs.hobby.className = 'section';
		}
	}

	hoverHobby() {
		if(!this.state.isPicked) {
			if(this.state.hover != 'hobby') {
				this.setState({hover:'hobby'})
				this.refs.hobby.className = 'section section-hover';
			}
			else {
				this.setState({hover:null})
				this.refs.hobby.className = 'section';
			}
		}
	}
	render() {
		return(
				<div ref='profile' className='profile animated bounceInLeft'>
					<div className='container'>
						<div className='body'>
							<div ref='black' className='black' onClick={this.hideBlack.bind(this)}></div>
							<div ref='main'
									 className='section section-shadow'
									 onClick={this.clickMain.bind(this)}
									 onMouseEnter={this.hoverMain.bind(this)}
									 onMouseLeave={this.hoverMain.bind(this)}>
								<div className='header'>
									<div className='dress1'></div>
									<div className='dress2'><span className='glyphicon glyphicon-sunglasses'></span></div>
									{this.mainText().title}
								</div>
								<div className='content'>
									<div ref={this.state.info == 'main' ? 'switch' : null} className='switch'>
										<div ref={this.state.info == 'main' ? 'button' : null} className='button' data-info='main' onMouseOver={this.switch.bind(this)}></div>
									</div>
								</div>
							</div>
							<div ref='skill' 
									 className='section'
									 onClick={this.clickSkill.bind(this)}
									 onMouseEnter={this.hoverSkill.bind(this)}
									 onMouseLeave={this.hoverSkill.bind(this)}>
								<div className='header'>
									<div className='dress1'></div>
									<div className='dress2'><span className='glyphicon glyphicon-star'></span></div>
									Hi i am skill
								</div>
								<div className='content'>
									<div ref={this.state.info == 'skill' ? 'switch' : null} className='switch'>
										<div ref={this.state.info == 'skill' ? 'button' : null} className='button' data-info='skill' onMouseOver={this.switch.bind(this)}></div>
									</div>
								</div>
							</div>
							<div ref='plan'
									 className='section'
									 onClick={this.clickPlan.bind(this)}
									 onMouseEnter={this.hoverPlan.bind(this)}
									 onMouseLeave={this.hoverPlan.bind(this)}>
								<div className='header'>
									<div className='dress1'></div>
									<div className='dress2'><span className='glyphicon glyphicon-cloud'></span></div>
									Hi i am plan
								</div>
								<div className='content'>
									<div ref={this.state.info == 'plan' ? 'switch' : null} className='switch'>
										<div ref={this.state.info == 'plan' ? 'button' : null} className='button' data-info='plan' onMouseOver={this.switch.bind(this)}></div>
									</div>
								</div>
							</div>
							<div ref='hobby'
									 className='section'
									 onClick={this.clickHobby.bind(this)}
									 onMouseEnter={this.hoverHobby.bind(this)}
									 onMouseLeave={this.hoverHobby.bind(this)}>
								<div className='header'>
									<div className='dress1'></div>
									<div className='dress2'><span className='glyphicon glyphicon-heart'></span></div>
									Hi i am hobby
								</div>
								<div className='content'>
									<div ref={this.state.info == 'hobby' ? 'switch' : null} className='switch'>
										<div ref={this.state.info == 'hobby' ? 'button' : null} className='button' data-info='hobby' onMouseOver={this.switch.bind(this)}></div>
									</div>
								</div>
							</div>
						</div>
						<Nav title='Profile' hrefAnimation={this.state.hrefAnimation}/>
					</div>
				</div>
			);
	}
};

export default Profile;








