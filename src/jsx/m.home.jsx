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

	hrefProfile() {
		this.refs.profile.className = 'item animated bounceOut';
		setTimeout(() => {
			location.href = '#/profile';
		},800)
	}

	hrefNotes() {
		this.refs.notes.className = 'item animated bounceOut';
		setTimeout(() => {
			location.href = '#/notes';
		},800)
	}

	hrefApps() {
		this.refs.apps.className = 'item animated bounceOut';
		setTimeout(() => {
			location.href = '#/apps';
		},800)
	}

	hrefGames() {
		this.refs.games.className = 'item animated bounceOut';
		setTimeout(() => {
			location.href = '#/games';
		},800)
	}


	render() {
		return(
				<div className='m-home animated fadeIn'>
					<Nav title='Home' />
					<div className='container'>
						<div className='list animated bounceInUp'>
							<div ref='profile' className='item' onClick={this.hrefProfile.bind(this)}>
								<div className='dress'></div>
								<div className='icon'>
									<span className='glyphicon glyphicon-user'></span>
								</div>
								<div className='text'>
									<div className='description'>
										Joephon, a dreamwalker programmer. click to know more.
									</div>
								</div>
							</div>
						</div>
						<div className='list animated bounceInUp'>
							<div ref='notes' className='item' onClick={this.hrefNotes.bind(this)}>
								<div className='dress'></div>
								<div className='icon'>
									<span className='glyphicon glyphicon-pencil'></span>
								</div>
								<div className='text'>
									<div className='description'>
										Contains some chit notes, click to see around.
									</div>
								</div>
							</div>
						</div>
						<div className='list animated bounceInUp'>
							<div ref='apps' className='item' onClick={this.hrefApps.bind(this)}>
								<div className='dress'></div>
								<div className='icon'>
									<span className='glyphicon glyphicon-film'></span>
								</div>
								<div className='text'>
									<div className='description'>
										Some cool Apps copied or built. click to view all.
									</div>
								</div>
							</div>
						</div>
						<div className='list animated bounceInUp'>
							<div ref='games' className='item' onClick={this.hrefGames.bind(this)}>
								<div className='dress'></div>
								<div className='icon'>
									<span className='glyphicon glyphicon-fire'></span>
								</div>
								<div className='text'>
									<div className='description'>
										No pain no gain, no game no bang! go get bang~
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
	}
};


export default Home;









