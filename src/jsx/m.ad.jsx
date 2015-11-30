'use strict'

import React from 'react';
require('../css/m.ad.sass');

let text = document.getElementsByClassName('text');

class Ad extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	componentDidMount() {
		this.initText();
	}

	initText() {
		setTimeout(() => {
			this.joephon();
			this.blog();
			this.bounceInUp();
			this.textMove();
			this.icon();
		},600);
	}

	joephon() {
		let b;
		for (let i = 0; i < text.length; i ++ ) {
			setTimeout(() => {
				text[i].style.top = '65%';
				if (window.innerWidth <= 320) {
					text[i].style.left = 60 + i * 25 + 'px';
				}
				else if (window.innerWidth <= 375) {
					text[i].style.left = 80 + i * 25 + 'px';
				}
				else if (window.innerWidth <= 414) {
					text[i].style.left = 100 + i * 25 + 'px';
				}
				else if (window.innerWidth <= 768) {
					text[i].style.left = 250 + i * 25 + 'px';
				}
			},i * 200)
		}
	}

	blog() {
		setTimeout(() => {				
			this.refs.text2.className = 'text2 animated bounceInUp';
			this.refs.text2.style.display = 'block';
		},1500)
	}

	bounceInUp() {
		setTimeout(() => {
			this.refs.wrap.className = 'wrap animated flip'
		},2200)
	}

	textMove() {
		setTimeout(() => {
			for (let i = 0; i < text.length; i ++ ) {
				text[i].style.top = '52%';
				text[i].style.left = window.innerWidth > 320 
				? 80 + i * 25 + 'px' 
				: 60 + i * 25 + 'px';
				text[i].style.color = 'rgba(238,214,68,.9)';
				text[i].style.textShadow = '1px 1px 60px rgb(238,214,68)';
			}
			this.refs.text2.style.top = '60%';
			this.refs.text2.style.color = 'rgba(238,214,68,.9)';
			this.refs.text2.style.textShadow = '1px 1px 60px rgb(238,214,68)';
		},4100)
	}

	icon() {
		this.iconStep1();
		this.iconStep2();
		this.iconStep3();
		this.iconStep4();
		this.iconStep5();
	}

	iconStep1() {
		setTimeout(() => {
			this.refs.icon.style.left = window.innerWidth - 20 + 'px';
			this.refs.icon.style.top = '20%';
			this.refs.icon.style.boxShadow = '1px 1px 50px rgb(238,214,68)';
		},2800);
	}

	iconStep2() {
		setTimeout(() => {
			this.refs.icon.style.left = 0;
			this.refs.icon.style.top = '50%';
		},3100);
	}

	iconStep3() {
		setTimeout(() => {
			this.refs.icon.style.left = window.innerWidth - 20 + 'px';
			this.refs.icon.style.top = '80%';
		},3400);
	}

	iconStep4() {
		setTimeout(() => {
			this.refs.icon.style.left = '50%';
			this.refs.icon.style.top = window.innerHeight - 20 + 'px';
		},3700);
	}

	iconStep5() {
		setTimeout(() => {
			this.refs.glyphicon.style.opacity = 1;
			this.refs.icon.style.left = window.innerWidth/2 - 50 + 'px';
			this.refs.icon.style.top = '75%';
			this.refs.icon.style.width = '100px';
			this.refs.icon.style.height = '100px';
			this.refs.icon.style.border = '10px solid rgba(255,255,255,.3)';
			this.refs.icon.style.lineHeight = '80px';
			this.refs.icon.style.fontSize = '25px';
			this.refs.icon.style.backgroundColor = 'rgba(0,0,0,.3)';
			this.refs.icon.className = 'icon animated infinite pulse';
		},4000);
	}

	hrefHome() {
		this.refs.icon.className = 'icon animated bounceOut';
		setTimeout(() => {
			this.refs.mAd.className = 'm-ad animated fadeOutRight';
			setTimeout(() => {
				location.href = '#/home';
			},1000)
		},500)
	}

	render() {
		return(
				<div ref='mAd' className='m-ad'>
					<div ref='container' className='container'>
						<img src='../image/ad.png' />
						<div ref='wrap' className='wrap'>
							<div className='text j'>J</div>
							<div className='text o'>o</div>
							<div className='text e'>e</div>
							<div className='text p'>p</div>
							<div className='text h'>h</div>
							<div className='text o'>o</div>
							<div className='text n'>n</div>
							<div className='text s'>'s</div>
							<div ref='text2' className='text2'>Blog</div>
							<div ref='icon' className='icon' onClick={this.hrefHome.bind(this)}>
								<span ref='glyphicon' className='glyphicon glyphicon-hand-up'></span>
							</div>
						</div>
					</div>
				</div>
			);
	}
};


export default Ad;









