'use strict'

import React from 'react';
import Nav from './nav.jsx';

// define section objects
let section = document.getElementsByClassName('section');
let content = document.getElementsByClassName('content');

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
				content[i].style.display = 'none';
				window.innerWidth <= 768 + 'px' 
				? section[i].style.marginRight = '-400px'
				: section[i].style.marginRight = '-300px'
				setTimeout(() => {
					content[i].style.display = 'block';
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
		 		this.setState({translate:false,en:this.state.en ? false : true},() => {
			 		if(this.state.en) {
			 			this.refs.button.style.boxShadow = 'none';
			 			this.refs.switch.style.backgroundColor = '#999';
			 			this.refs.button.style.right = '20px';
			 			this.refs.button.style.backgroundColor = '#fff';
			 		}
			 		else if(!this.state.en){
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
			return {
				title: 'Basic',
				name: 'Name: Joephon Dan',
				gender: 'Gender: Male',
				origin: 'Origin: Chao Zhou(China)',
				nation: 'Nation: Han',
				birthday: 'Birthday: 1987-02-20',
				age: 'Age: 29',
				stature: 'Stature: 178cm',
				phone: 'Phone: 86-13539379779',
				mail: 'Mail: 306519779@qq.com',
				github: 'Github: https://github.com/oddindan',
				sentence: 'I like programming. even now, I still trust that coding could change the world. For me, it\'s not just a simple job or what else, it\'s kinda somewhat like living style or fath or dream. I can\'t figure out what exactly it is, but I am 100% sure that\'s what I really want! If possible, I feel like to code till the end of the world~',
			}
		}
		else {
			return {
				title: '基本信息',
				name: '姓名: 陈智雄',
				gender: '性别: 男',
				origin: '籍贯: 潮州',
				nation: '民族: 汉族',
				birthday: '生日: 1987-02-20',
				age: '年龄: 29',
				stature: '身高: 178cm',
				phone: '手机: 86-13539379779',
				mail: '邮箱: 306519779@qq.com',
				github: 'Github: https://github.com/oddindan',
				sentence: '喜欢编程，热爱生活。相信编程改变世界，愿将代码撸到天崩地裂。',
			}
		}
	}

	skillText() {
		if(this.state.en) {
			return {title: 'Skills'}
		}
		else {
			return {title: '技能'}
		} 
	}

	planText() {
		if(this.state.en) {
			return {
				title: 'Chit-Chat',
				sentence: [
					'I got a dream, one day I would create a thing that could change the world. And that thing is totally made via my hands, from the sortware parts to the hardware parts. That sounds impossible right? yup, it\'s quite difficult and complicated. But it said that~where there is a will, there is a way! It also said~ follow your mind and then pick up your dream. I am the guy who\'s on that way.',
					'They say power is everything, money is life and girls are gifts. I say no, power is just one thing, life contains lots of money and girls are still complicated just like the univers which is hard to predict. People always be told not to do something, again and agian, days by days till one day he finally lost the ability of making miracal happen. So I never stop, if someone tell me something\'s bad or wrong, I would not success, etc etc, I will listen but prefer to find out the answer by myself! So I have used to faild~lol, But I never ever lose fath : )',
					'I like coding, apreciated for the great Internet and the awesome open source world, thanks that I learn tons. My major is not that kind of stuff, but I found out that I\'ve deeply fall in love with that kinds of job.',
					'Everyday, self study and move forward......',
					]
			}
		}
		else {
			return {
				title: '浅谈',
				sentence: [
					'我有一个梦想，做出能影响人们行为习惯的产品，如果可以的话，从硬件到软件都要出自我手。这听起来有点发白日梦对吧？子曰：胡搞瞎搞，好过啥都不搞。于是我就先瞎搞搞，万一成功了呢？未来这种事情很难说的。',
					'常言道：有自知，事竞成。我是很有自知之明的，所以感觉应该会成～lol。然而这个世界并非那么想当然，所以大多数时候，我都在品尝失败的滋味。不管怎样，人生可以经历无数次失败，然则能有一次成功，可能就登顶了。我乐观地认为，一切的不如意，一路的种种挫折，都是在为最后那一刹的成功而默默铺垫着，我感激这种洗礼。故，大脚迈步，梦踏前方！',
					'我喜欢编程，感激互联网的馈赠以及开源世界的无私。她看似无所不能无所不有，我也因此受惠良多。我的专业本不在这方面，不过现在已为它废寝忘食，夙兴夜寐。这种高强度的精力和热情的倾注，生平未偿有也。愿将代码撸到地老天荒，山崩地裂。期待未来某一天，世界真的被改变！',
					'末了，好好学习，天天向上！',
					],
			}
		}
	}

	hobbyText() {
		if(this.state.en) {
			return {title: 'Hobbies'}
		}
		else {
			return {title: '兴趣爱好'}
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
									<div className='details'>
										<div className='row'>
											<div className='col-sm-6'>
												<p>{this.mainText().name}</p>
											</div>
											<div className='col-sm-6'>
												<p>{this.mainText().gender}</p>
											</div>
										</div>
										<div className='row'>
											<div className='col-sm-6'>
												<p>{this.mainText().origin}</p>
											</div>
											<div className='col-sm-6'>
												<p>{this.mainText().nation}</p>
											</div>
										</div>
										<div className='row'>
											<div className='col-sm-6'>
												<p>{this.mainText().birthday}</p>
											</div>
											<div className='col-sm-6'>
												<p>{this.mainText().age}</p>
											</div>
										</div>
										<div className='row'>
											<div className='col-sm-6'>
												<p>{this.mainText().stature}</p>
											</div>
											<div className='col-sm-6'>
												<p>{this.mainText().phone}</p>
											</div>
										</div>
										<div className='row'>
											<div className='col-sm-6'>
												<p>{this.mainText().mail}</p>
											</div>
											<div className='col-sm-6'>
												<p>{this.mainText().github}</p>
											</div>
										</div>
										<div className='row'>
											<div className='col-sm-12'>
												<p className='sentence'>{this.mainText().sentence}</p>
											</div>
										</div>
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
									{this.skillText().title}
								</div>
								<div className='content'>
									<div ref={this.state.info == 'skill' ? 'switch' : null} className='switch'>
										<div ref={this.state.info == 'skill' ? 'button' : null} className='button' data-info='skill' onMouseOver={this.switch.bind(this)}></div>
									</div>
									<div className='details'>
										<div className='row'>
											<div className='col-sm-12'>
												<div className='col-sm-2'>Ruby</div>
												<div className='col-sm-10'><div className='language ruby'>20%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-sm-12'>
												<div className='col-sm-2'>Node</div>
												<div className='col-sm-10'><div className='language node'>30%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-sm-12'>
												<div className='col-sm-2'>Linux</div>
												<div className='col-sm-10'><div className='language linux'>40%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-sm-12'>
												<div className='col-sm-2'>JavaScript</div>
												<div className='col-sm-10'><div className='language javascript'>55%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-sm-12'>
												<div className='col-sm-2'>HTML</div>
												<div className='col-sm-10'><div className='language html'>90%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-sm-12'>
												<div className='col-sm-2'>CSS</div>
												<div className='col-sm-10'><div className='language css'>80%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-sm-12'>
												<div className='col-sm-2'>Express</div>
												<div className='col-sm-10'><div className='language express'>75%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-sm-12'>
												<div className='col-sm-2'>Rails</div>
												<div className='col-sm-10'><div className='language rails'>45%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-sm-12'>
												<div className='col-sm-2'>React</div>
												<div className='col-sm-10'><div className='language react'>90%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-sm-12'>
												<div className='col-sm-2'>React Native</div>
												<div className='col-sm-10'><div className='language react-native'>75%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-sm-12'>
												<div className='col-sm-2'>Mysql</div>
												<div className='col-sm-10'><div className='language mysql'>45%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-sm-12'>
												<div className='col-sm-2'>MongoDB</div>
												<div className='col-sm-10'><div className='language mongodb'>35%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-sm-12'>
												<div className='col-sm-2'>jQuery</div>
												<div className='col-sm-10'><div className='language jquery'>70%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-sm-12'>
												<div className='col-sm-2'>Bootstrap</div>
												<div className='col-sm-10'><div className='language bootstrap'>65%</div></div>
											</div>
										</div>
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
									{this.planText().title}
								</div>
								<div className='content'>
									<div ref={this.state.info == 'plan' ? 'switch' : null} className='switch'>
										<div ref={this.state.info == 'plan' ? 'button' : null} className='button' data-info='plan' onMouseOver={this.switch.bind(this)}></div>
									</div>
									<div className='details'>
										<div className='row'>
											<div className='col-sm-12'>
												<div className='sentence'>
													<p>{this.planText().sentence[0]}</p>
													<p>{this.planText().sentence[1]}</p>
													<p>{this.planText().sentence[2]}</p>
													<p>{this.planText().sentence[3]}</p>
												</div>
											</div>
										</div>
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
									{this.hobbyText().title}
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








