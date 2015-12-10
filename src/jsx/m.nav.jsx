'use strict'

import React from 'react';
require('../css/m.nav.sass');

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	componentDidMount() {

	}

	hrefBack() {
		history.back();
	}

	hrefHome() {
		location.href = '#/home';
	}

	hrefProfile() {
		location.href = '#/profile';
	}

  hrefNotes() {
		location.href = '#/notes';
	}

	hrefApps() {
		location.href = '#/apps';
	}

	hrefGames() {
		location.href = '#/games';
	}

	showDrop() {
		this.refs.list.style.display === 'block'
		? this.refs.list.style.display = 'none'
		: this.refs.list.style.display = 'block';
	}

	render() {
		return(
				<div className='m-nav'>
					<div className='wrap'>
						<div className='back' onClick={this.hrefBack.bind(this)}>
							<span className='glyphicon glyphicon-arrow-left'></span>
						</div>
						<h4>{this.props.title}</h4>
						<div className='drop'>
							<span className='glyphicon glyphicon-option-vertical' 
										onClick={this.showDrop.bind(this)}></span>
							<div ref='list' className='list'>
								<div className='dress'></div>
								<div className='item'
										 onClick={this.hrefHome.bind(this)}
										 style={{color:this.props.title === 'Home' 
										 ? 'rgb(65,175,228)'
										 : '#666'}}>
									<span className='glyphicon glyphicon-home'></span>
									<span className='text'>Home</span>
								</div>
								<div className='item'
										 onClick={this.hrefProfile.bind(this)}
										 style={{color:this.props.title === 'Profile' 
										 ? 'rgb(65,175,228)'
										 : '#666'}}>
									<span className='glyphicon glyphicon-user'></span>
									<span className='text'>Profile</span>
								</div>
								<div className='item'
										 onClick={this.hrefNotes.bind(this)}
										 style={{color:this.props.title === 'Notes' 
										 ? 'rgb(65,175,228)'
										 : '#666'}}>
									<span className='glyphicon glyphicon-pencil'></span>
									<span className='text'>Notes</span>
								</div>
								<div className='item'
										 onClick={this.hrefApps.bind(this)}
										 style={{color:this.props.title === 'Apps' 
										 ? 'rgb(65,175,228)'
										 : '#666'}}>
									<span className='glyphicon glyphicon-film'></span>
									<span className='text'>Apps</span>
								</div>
								<div className='item'
										 onClick={this.hrefGames.bind(this)}
										 style={{color:this.props.title === 'Games' 
										 ? 'rgb(65,175,228)'
										 : '#666'}}>
									<span className='glyphicon glyphicon-fire'></span>
									<span className='text'>Games</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
	}
};


export default Nav;









