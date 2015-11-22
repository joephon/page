'use strict'

import React from 'react';

// define section objects
let section = document.getElementsByClassName('section');

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isPicked: false,
			hover: null,
			section: null,
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
				section[i].style.right = window.innerWidth/4 + 'px';
				setTimeout(() => {
					section[i].style.transform = 'rotate(' + i*20 + 'deg)';
					this.refs.main.className = 'section';
				},800)
			},i*200);
		}
	}

	hrefBack() {
		this.refs.profile.className = 'profile animated bounceOutLeft';
		setTimeout(() => {
			window.location.href = '#/';
		},500)
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
				this.setState({hover:'main'})
				this.refs.main.className = 'section section-hover';
				this.refs.main.style.right = window.innerWidth/5 + 'px'
			}
			else {
				this.setState({hover:null})
				this.refs.main.className = 'section';
				this.refs.main.style.right = window.innerWidth/4 + 'px';
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
						<div className='nav'>
							<div ref='back' className='back' onClick={this.hrefBack.bind(this)}>
								<span className='glyphicon glyphicon-arrow-left'></span>
							</div>
							<h4>Profile</h4>
							<div ref='menu' className='menu'>
								<span className='glyphicon glyphicon-option-vertical'></span>
							</div>
						</div>
						<div className='body'>
							<div ref='black' className='black' onClick={this.hideBlack.bind(this)}></div>
							<div ref='main'
									 className='section section-shadow'
									 onClick={this.clickMain.bind(this)}
									 onMouseEnter={this.hoverMain.bind(this)}
									 onMouseLeave={this.hoverMain.bind(this)}>
								<div className='header'>
									<div className='dress1'></div>
									Hi i am main
								</div>
							</div>
							<div ref='skill' 
									 className='section'
									 onClick={this.clickSkill.bind(this)}
									 onMouseEnter={this.hoverSkill.bind(this)}
									 onMouseLeave={this.hoverSkill.bind(this)}>
								<div className='header'>
									<div className='dress1'></div>
									Hi i am skill
								</div>
							</div>
							<div ref='plan'
									 className='section'
									 onClick={this.clickPlan.bind(this)}
									 onMouseEnter={this.hoverPlan.bind(this)}
									 onMouseLeave={this.hoverPlan.bind(this)}>
								<div className='header'>
									<div className='dress1'></div>
									Hi i am plan
								</div>
							</div>
							<div ref='hobby'
									 className='section'
									 onClick={this.clickHobby.bind(this)}
									 onMouseEnter={this.hoverHobby.bind(this)}
									 onMouseLeave={this.hoverHobby.bind(this)}>
								<div className='header'>
									<div className='dress1'></div>
									Hi i am hobby
								</div>
							</div>
						</div>
					</div>
				</div>
			);
	}
};

export default Profile;








