'use strict'

import React from 'react';
require('../css/nav.sass');

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showBlackBoard: false,
		};
	}

	componentDidMount() {
		this.refs.blackBoard.style.width = window.innerWidth + 'px';
		this.refs.blackBoard.style.height = window.innerHeight + 'px';
		this.refs.menuList.style.height = window.innerHeight + 'px';
	}

	hrefBack() {
		this.props.hrefAnimation();
	  setTimeout(() => {
			window.history.back();
	  },500)
	}

	hrefHome() {
		if(this.props.title !== 'Home') {
			this.props.hrefAnimation();
		  setTimeout(() => {
				window.location.href = '#/';
		  },500)
		}
	}

	hrefProfile() {
		if(this.props.title !== 'Profile') {
			this.props.hrefAnimation();
		  setTimeout(() => {
				window.location.href = '#/profile';
		  },500)
		}
	}

	hrefNotes() {
		if(this.props.title !== 'Notes') {
			this.props.hrefAnimation();
		  setTimeout(() => {
				window.location.href = '#/notes';
		  },500)
		}
	}

	hrefApps() {
		if(this.props.title !== 'Apps') {
			this.props.hrefAnimation();
		  setTimeout(() => {
				window.location.href = '#/apps';
		  },500)
		}
	}

	hrefGame() {
		if(this.props.title !== 'Games') {
			this.props.hrefAnimation();
		  setTimeout(() => {
				window.location.href = '#/games';
		  },500)
		}
	}

	rightNav() {
		if(this.state.showBlackBoard) {
			this.setState({showBlackBoard:false});
			this.refs.menuList.style.right = '-300px';
			this.refs.blackBoard.style.display = 'none';
		}
		else {
			this.setState({showBlackBoard:true});
			this.refs.menuList.style.right = 0;
			this.refs.blackBoard.style.display = 'block';
		}
	}


	render() {
		return(
					<div className='nav'>
						<div ref='back' className='back' onClick={this.hrefBack.bind(this)}>
							<span className='glyphicon glyphicon-arrow-left'></span>
						</div>
						<h4>{this.props.title}</h4>
						<div ref='menu' className='menu' onClick={this.rightNav.bind(this)}>
							<span className='glyphicon glyphicon-option-vertical'></span>
						</div>
						<div ref='blackBoard' className='black-board' onClick={this.rightNav.bind(this)}></div>
						<div ref='menuList' className='menu-list'>
							<div className='avatar'>
								<img src='image/joe.png' />
							</div>
							<h3>Joephon</h3>
							<p>Freelancer</p>
							<hr />
							<div ref='hrefHome'
									 className='href' 
									 style={{color:this.props.title === 'Home' ? 'rgb(45,183,245)' : '#777'}}
									 onClick={this.hrefHome.bind(this)}>
								<span className='glyphicon glyphicon-home'></span>
								<span>Home</span>
							</div>
							<div ref='hrefProfile' 
									 className='href' 
									 style={{color:this.props.title === 'Profile' ? 'rgb(45,183,245)' : '#777'}}
									 onClick={this.hrefProfile.bind(this)}>
								<span className='glyphicon glyphicon-user'></span>
								<span>Profile</span>
							</div>
							<div ref='hrefNotes'
									 className='href' 
									 style={{color:this.props.title === 'Notes' ? 'rgb(45,183,245)' : '#777'}}
									 onClick={this.hrefNotes.bind(this)}>
								<span className='glyphicon glyphicon-pencil'></span>
								<span>Notes</span>
							</div>
							<div ref='hrefApps' 
									 className='href' 
									 style={{color:this.props.title === 'Apps' ? 'rgb(45,183,245)' : '#777'}}
									 onClick={this.hrefApps.bind(this)}>
								<span className='glyphicon glyphicon-film'></span>
								<span>Apps</span>
							</div>
							<div ref='hrefGame'
									 className='href' 
									 style={{color:this.props.title === 'Games' ? 'rgb(45,183,245)' : '#777'}}
									 onClick={this.hrefGame.bind(this)}>
								<span className='glyphicon glyphicon-fire'></span>
								<span>Game</span>
							</div>
							<hr />
						</div>
					</div>
			)
	}
};










export default Nav;


