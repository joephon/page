'use strict'

import React from 'react';

// define home page text
const text = [
	'People leave, people go, people never ever need to know. Welcome to my tiny site, it\'s powered by React and NodeJs. looks a kinda weird right? I dont act it as a simple site, it contains every single thought that I feel like to toss. The above listed are all my skills, press the right side buttom to know more if interested : )',
	'人来人往，人去楼空；梦遂梦毁，梦不旋踵。荣幸歇脚小站，搭建小站我用了React和NodeJs，颜色偏好灰白。大概看起来有点奇葩，不过没关系，我喜欢就好。爱折腾，好鼓捣，此处俨然成了在下胡作非为的小天地，并承载着我无穷无尽的奇思怪想。上面吊着的一串串乃鄙人涉猎范围，戳左边按钮切换语言，戳右边按钮了解更多: )',
	'Well here we are! the above displayed cards are the main navigators which may lead you to any corner of my tiny world! Typecally, something was hidden under the page, I have it buried since the site was bulit. it may not be any secrets but can be some funny things. Want to dig it up? pick up a card and take forward. : )',
	'帅哥，别来无恙！人生苍茫而苦短，码海八嘎(bug)且无岸。今有幸萍水相逢，如浴春风，莫笑我站蓬荜多(灰)，然则黑白方为永恒之主题。崇尚简约风格，故这里不会有闲杂div等，但～也许会有古灵精怪的东西出现或者匪夷所思的事情发生。。。。。。不管怎样，那都是无害的。上面是几个主要入口，闲着没事，走走逛逛呗 : )',
]

// define some lets to get element objects
let skill = document.getElementsByClassName('skill');
let col = document.getElementsByClassName('col');
let tip = document.getElementsByClassName('tip');
let nav = document.getElementsByClassName('nav');
let backend = document.getElementsByClassName('backend');
let frontend = document.getElementsByClassName('frontend');
let db = document.getElementsByClassName('db');
let framework = document.getElementsByClassName('framework');
let lib = document.getElementsByClassName('lib');
let tool = document.getElementsByClassName('tool');

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// define could only press within 2.5 seconds
			press: true,
			// define the default text language as English
			text: text[0],
			// define is going nav page?
			isNav: false,
		};
	}

	componentDidMount() {
		// init locations
		this.skills();
		this.cols();
	}

/*
	init col and tips
*/
	cols() {
		for(let i = 0; i < col.length; i ++) {
			col[i].style.left = i * 150 + 50 + 'px';
			col[i].style.top = Math.random() * -200 + 'px';
			tip[i].style.transform = Math.random() >= 0.5 
			? 'rotate(' + Math.random() * 20 + 'deg)' 
			: 'rotate(' + Math.random() * -20 + 'deg)';
		}	
	}

/*
	init skills
*/
	skills() {
		for(let i = 0; i < backend.length; i ++) {
			backend[i].style.top = i * 40 + 200 + 'px';
		}
		for(let i = 0; i < frontend.length; i ++) {
			frontend[i].style.top = i * 40 + 200 + 'px';
		}
		for(let i = 0; i < db.length; i ++) {
			db[i].style.top = i * 40 + 200 + 'px';
		}
		for(let i = 0; i < framework.length; i ++) {
			framework[i].style.top = i * 40 + 200 + 'px';
		}
		for(let i = 0; i < lib.length; i ++) {
			lib[i].style.top = i * 40 + 200 + 'px';
		}
		for(let i = 0; i < tool.length; i ++) {
			tool[i].style.top = i * 40 + 200 + 'px';
		}
	}

/*
	handle profile actions
*/
	hrefProfile() {
		this.refs.profile.className = 'nav animated shake';
		setTimeout(() => {
			this.refs.home.className= 'home animated bounceOutRight';
			setTimeout(() => {
				window.location.href = '#/profile';
			},500)
		},1000)
	}

/*
	handle home page text language
*/
	textLanguage() {
		if(this.state.isNav) {
			this.state.text === text[2] 
			? this.setState({text: text[3]})
			: this.setState({text: text[2]})
		}
		else if(!this.state.isNav) {
			this.state.text === text[0] 
			? this.setState({text: text[1]})
			: this.setState({text: text[0]})
		}
	}

/*
	handle avatar hover issues
*/
	avatarHover() {
		if (this.refs.avatar.className !== 'avatar-click') {
			this.refs.avatar.className === 'avatar'
			? this.refs.avatar.className = 'avatar animated infinite pulse'
			: this.refs.avatar.className = 'avatar'
		}
	}

/*
	handle avatar actions
*/
	avatarClick() {
		if(this.state.press) {
			this.setState({press: false})
			if(this.refs.avatar.className === 'avatar'){
				for(let i = 0; i < col.length; i ++) {
					setTimeout(() => {
						col[i].style.top = '-460px';
					},2000)
				}
				for(let i = 0; i < skill.length; i ++) {
					skill[i].style.left = '15px';
					skill[i].setAttribute('class','skill animated hinge');
				}
				this.refs.avatar.className = 'avatar-click';
				this.refs.pic.style.opacity = '1';
				this.refs.panel.className = 'panel animated swing';
				setTimeout(() => {
					this.setState({text:text[2],isNav:true});
					this.refs.light.style.left = '1500px';
					this.refs.round.style.transform = 'rotate(360deg)';
					this.refs.profile.style.display = 'block';
					this.refs.article.style.display = 'block';
					this.refs.game.style.display = 'block';
					this.refs.present.style.display = 'block';
				},2000);
			}
			else {
				for(let i = 0; i < col.length; i ++) {
					setTimeout(() => {
						col[i].style.top = Math.random() * -200 + 'px';
					},200)
				}
				for(let i = 0; i < skill.length; i ++) {
					skill[i].style.left = '-50px';
					skill[i].setAttribute('class','skill animated bounceInUp');
				}
				this.refs.light.style.left = '-1500px'
				this.refs.avatar.className = 'avatar';
				this.refs.pic.style.opacity = '0';
				this.refs.profile.style.display = 'none';
				this.refs.article.style.display = 'none';
				this.refs.game.style.display = 'none';
				this.refs.present.style.display = 'none';
				this.refs.panel.className = 'panel';
				this.setState({text:text[0],isNav:false});
				setTimeout(() => {
					this.refs.round.style.transform = 'rotate(0deg)';
				},2000)
			}
			setTimeout(() => this.setState({press: true}),2500)
		}
	}

	render() {
		return(
				<div ref='home' className='home animated rollIn'>
					<div className='container'>
						<div className='nav-wrap'>
							<div ref ='profile'
									 className='nav animated flipInY'
									 onClick={this.hrefProfile.bind(this)}>
								<div className='dress0'><span className='glyphicon glyphicon-hand-right'></span></div>
								<div className='dress1'></div>
								<div className='dress2'><span className='glyphicon glyphicon-user'></span></div>
								<div className='dress3'>Joephon, a dreamwalker programmer. click to know more.</div>
							</div>
							<div ref ='article' className='nav animated flipInY'>
								<div className='dress0'><span className='glyphicon glyphicon-hand-right'></span></div>
								<div className='dress1'></div>
								<div className='dress2'><span className='glyphicon glyphicon-pencil'></span></div>
								<div className='dress3'>Contains some chit notes, click to see around.</div>
							</div>
							<div ref ='present' className='nav animated flipInY'>
								<div className='dress0'><span className='glyphicon glyphicon-hand-right'></span></div>
								<div className='dress1'></div>
								<div className='dress2'><span className='glyphicon glyphicon-film'></span></div>
								<div className='dress3'>Some cool Apps copied or built. click to view all.</div>
							</div>
							<div ref ='game' className='nav animated flipInY'>
								<div className='dress0'><span className='glyphicon glyphicon-hand-right'></span></div>
								<div className='dress1'></div>
								<div className='dress2'><span className='glyphicon glyphicon-fire'></span></div>
								<div className='dress3'>No pain no gain, no game no bang! go get bang~</div>
							</div>
						</div>
						<div className='col-wrap'>
							<div className='col'>
								<div className='tip'>
									<span className='glyphicon glyphicon-step-backward'></span>
									Backend
								</div>
								<div className='skill backend'>Ruby</div>
								<div className='skill backend'>Node</div>
								<div className='skill backend'>Linux</div>
							</div>
							<div className='col'>
								<div className='tip'>
									<span className='glyphicon glyphicon-step-forward'></span>
									Frontend
								</div>
								<div className='skill frontend'>JavaScript</div>
								<div className='skill frontend'>CSS3</div>
								<div className='skill frontend'>Canvas</div>
								<div className='skill frontend'>HTML5</div>
							</div>
							<div className='col'>
								<div className='tip'>
									<span className='glyphicon glyphicon-cd'></span>
									DB
								</div>
								<div className='skill db'>Mysql</div>
								<div className='skill db'>MongoDB</div>
							</div>
							<div className='col'>
								<div className='tip'>
									<span className='glyphicon glyphicon-tower'></span>
									Frameworks
								</div>
								<div className='skill framework'>Express</div>
								<div className='skill framework'>Rails</div>
								<div className='skill framework'>React</div>
								<div className='skill framework'>React Native</div>
							</div>
							<div className='col'>
								<div className='tip'>
									<span className='glyphicon glyphicon-paperclip'></span>
									Libs
								</div>
								<div className='skill lib'>jQuery</div>
								<div className='skill lib'>Bootstrap</div>
							</div>
							<div className='col'>
								<div className='tip'>
									<span className='glyphicon glyphicon-wrench'></span>
									Tools
								</div>
								<div className='skill tool'>Sass</div>
								<div className='skill tool'>Webpack</div>
								<div className='skill tool'>Git</div>
							</div>
						</div>
						<div ref='panel' className='panel'>
							<div className='global-back'></div>
							<div className='round-back'></div>
							<div ref='global' className='global' onMouseOver={this.textLanguage.bind(this)}>
								<span className='glyphicon glyphicon-globe'></span>
							</div>
							<div ref='round' className='round'>
								<span className='glyphicon glyphicon-cog'></span>
							</div>
							<div ref='avatar'
									 className='avatar animated infinite pulse'
									 onMouseOver={this.avatarHover.bind(this)}
									 onMouseOut={this.avatarHover.bind(this)}
									 onClick={this.avatarClick.bind(this)}>
								<div className='pointer'><span className='glyphicon glyphicon-hand-up'></span></div>
								<div ref='pic' className='pic'>
									<img src='../src/image/joe.png' />
								</div>
							</div>
							<div ref='text' className='text'>
								{this.state.text}
							</div>
							<div ref='light' className='light'></div>
						</div>
					</div>
				</div>
			);
	}
};

export default Home;





