'use strict'

import React from 'react';
import Nav from './nav.jsx';
require('../css/games.sass');

let items = document.getElementsByClassName('item');
let row1s = document.getElementsByClassName('row1');
let row2s = document.getElementsByClassName('row2');

class Games extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			completed: 40,
			hrefAnimation: () => {
				this.refs.games.className = 'games animated bounceOutLeft';
			},
		};
	} 

	componentDidMount() {
		this.moveArc();
		this.initItem();
	}

	initItem() {
		for (let i = 0; i < row1s.length; i ++) {
			row1s[i].style.marginLeft = i * -250 + 175 + 'px';
			row2s[i].style.marginLeft = i * -250 + 175 + 'px';
		}
	}

	shakeItem() {
		setTimeout(() => {
			for (let i = 0; i < row1s.length; i ++) {
				row1s[i].setAttribute('class','item row1 animated wobble');
				row2s[i].setAttribute('class','item row2 animated wobble');
			}
		},4100);
	}

	boom1() {
		setTimeout(() => {
			this.refs.dress1.style.boxShadow = '0px 0px 1000px orange';
		},1000)
	}

	boom2() {
		setTimeout(() => {
			this.refs.dress3.style.transform = 'scale(1.1)';
		},1000)
	}

	boom3() {
		setTimeout(() => {
			this.refs.dress3.style.transform = 'scale(0)';
		},1800)
	}

	boom4() {
		setTimeout(() => {
			this.refs.dress2.style.boxShadow = '0px 0px 1000px red';
		},2800)
	}

	boom5() {
		setTimeout(() => {
			this.refs.dress4.style.transform = 'scale(0.9)';
		},3400)
	}

	boom6() {
		setTimeout(() => {
			this.refs.dress5.style.transform = 'scale(0.9)';
		},3800)
	}

	boom7() {
		setTimeout(() => {
			this.refs.dress6.style.transform = 'scale(0.9)';
		},4200)
	}

	moveArc() {
		setTimeout(() => {
			this.refs.dress3.style.marginLeft = '-25px';
			this.boom1();
			this.boom2();
			this.boom3();
			this.boom4();
			this.boom5();
			this.shakeItem();
			this.boom6();
			this.boom7();
		},800)
	}

	render() {
		return(
				<div ref='games' className='games animated fadeIn' style={{backgroundImage:'url(http://7xp4y4.com1.z0.glb.clouddn.com/picunivers.jpg)'}}>
					<div className='container'>
						<div ref='dress1' className='dress1'></div>
						<div ref='dress2' className='dress2'></div>
						<div ref='dress3' className='dress3'></div>
						<div ref='dress4' className='dress4'></div>
						<div ref='dress5' className='dress5'></div>
						<div ref='dress6' className='dress6'></div>
						<div ref='list' className='list'>
							<div ref='2048' className='item row1 animated bounceInDown'>
								<h1>2048</h1>
								<div className='process process-up'>
									<div className='completed' style={{width:this.state.completed + '%'}}></div>
									<h6>{this.state.completed + '%'}</h6>
								</div>
							</div>
							<div className='item row1 animated bounceInDown'>
								<h1>Undefined</h1>
								<div className='process process-up'>
									<div className='completed' style={{width:this.state.completed - 40 + '%'}}></div>
									<h6>{this.state.completed - 40 + '%'}</h6>
								</div>
							</div>
							<div className='item row1 animated bounceInDown'>
								<h1>Undefined</h1>
								<div className='process process-up'>
									<div className='completed' style={{width:this.state.completed - 40 + '%'}}></div>
									<h6>{this.state.completed - 40 + '%'}</h6>
								</div>
							</div>
							<div className='item row2 animated bounceInUp'>
								<h1>Undefined</h1>
								<div className='process process-down'>
									<div className='completed' style={{width:this.state.completed - 40 + '%'}}></div>
									<h6>{this.state.completed - 40 + '%'}</h6>
								</div>
							</div>
							<div className='item row2 animated bounceInUp'>
								<h1>Undefined</h1>
								<div className='process process-down'>
									<div className='completed' style={{width:this.state.completed - 40 + '%'}}></div>
									<h6>{this.state.completed - 40 + '%'}</h6>
								</div>
							</div>
							<div className='item row2 animated bounceInUp'>
								<h1>Undefined</h1>
								<div className='process process-down'>
									<div className='completed' style={{width:this.state.completed - 40 + '%'}}></div>
									<h6>{this.state.completed - 40 + '%'}</h6>
								</div>
							</div>
						</div>
						<Nav title='Games' hrefAnimation={this.state.hrefAnimation}/>
					</div>
				</div>
			);
	}
};

export default Games;