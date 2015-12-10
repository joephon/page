'use strict'

import React from 'react';
import Nav from './m.nav.jsx';
require('../css/m.profile.sass');

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mainEn: true,
			skillEn: true,
			planEn: true,
			hobbyEn: true,
		};
	}

	componentDidMount() {

	}

	mainText() {
		if (this.state.mainEn) {
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
		if (this.state.skillEn) {
			return {title: 'Skills'}
		}
		else {
			return {title: '技能'}
		} 
	}

	planText() {
		if (this.state.planEn) {
			return {
				title: 'Bull Shit',
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
				title: '胡扯',
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
		if (this.state.hobbyEn) {
			return {
				title: 'Current Focus',
				sentence: [
					'Currently, I am focusing on React, React Native and NodeJs. I think deep digging in that stuffs may help me to reach the very future. Also Node is awesome, React too!',
					'Using React could save me plenty of times, the most, it works excellent and fast! freindly for programmers. Makes complex task simple and clear. With that benifits I could be stronger to handle more and more applications.',
					'On the server side Node is powerful, it\'s ecosystem too! I think Node is changing something even will change much more in the coming future. So in order to avoid left behind too far away from the world, I should and must know well it!',
					'Finally, the big guy is React Native! I dont know how to describe my feeling when I met that guy! He saves my time and makes my life easier, powers me by allowing people use pure javaScript to develop native app! Just like Facebook said: learn once develop everywhere! I am greatful appreciated for their genius!',
					'At last, open mind for new technologies, such as meteor, vuejs. I would keep my eyes on these.',
				],
			}
		}
		else {
			return {
				title: '眼前专注',
				sentence: [
					'近期，专注于玩转React， React Native 和NodeJs。我觉得能熟悉并良好运用他们，可以更好地适应未来的趋势，毕竟～这些技术实在太棒了！',
					'用React，首先是节省了时间，这不一定意味着代码量会减少，但从整体来看，可以省去很多处理复杂业务逻辑所耗费的时间。React很快，结构清晰，思路清爽，用着过瘾。14年出来的东西15年才得以接触，简直相见恨晚！',
					'在服务器端方面，Node的高温是很难忽略的一种存在！随着诸多优秀前端整合工具的迭代出现，越来越多的前端开发者都会选择基于Node的npm模块管理工具来管理和打包各种的资源，这意味着，无论前端后端，越来越依赖Node了。关于未来，即便不能精通它，至少也要能熟悉运用它。',
					'然而压轴的正是React Native，这家伙岂止是高富帅能够比拟的，简直貌比潘安，才盖诸葛！他最大的帅点就是大大减少开发者的学习成本，同样是javaScript，同样是JSX，写出不亚于原生的native app！往后真的可以四面开发，八方留情了，人人都能做楚留香！拭目以待～',
					'末了，保持一颗改革开放的心，并始终坚定不移地贯彻可持续发展战略！对于vuejs，meteor这类东西，是可以谈谈一带一路，深入探索和保持关注的。',
				],
			}
		}
	}

	mainContent() {
		if (this.refs.mainContent.style.height === 'auto') {
			this.refs.mainContent.style.height = '180px';
			this.refs.mainHeader.style.backgroundColor = '#999';
			this.refs.mainHeader.style.color = '#444';
		}
		else {
			this.refs.mainContent.style.height = 'auto';
			this.refs.mainHeader.style.backgroundColor = '#000';
			this.refs.mainHeader.style.color = '#f5f5f5';
		}
	}

	skillContent() {
		if (this.refs.skillContent.style.height === 'auto') {
			this.refs.skillContent.style.height = '180px';
			this.refs.skillHeader.style.backgroundColor = '#999';
			this.refs.skillHeader.style.color = '#444';
		}
		else {
			this.refs.skillContent.style.height = 'auto';
			this.refs.skillHeader.style.backgroundColor = '#000';
			this.refs.skillHeader.style.color = '#f5f5f5';
		}
	}

	planContent() {
		if (this.refs.planContent.style.height === 'auto') {
			this.refs.planContent.style.height = '180px';
			this.refs.planHeader.style.backgroundColor = '#999';
			this.refs.planHeader.style.color = '#444';
		}
		else {
			this.refs.planContent.style.height = 'auto';
			this.refs.planHeader.style.backgroundColor = '#000';
			this.refs.planHeader.style.color = '#f5f5f5';
		}
	}

	hobbyContent() {
		if (this.refs.hobbyContent.style.height === 'auto') {
			this.refs.hobbyContent.style.height = '180px';
			this.refs.hobbyHeader.style.backgroundColor = '#999';
			this.refs.hobbyHeader.style.color = '#444';
		}
		else {
			this.refs.hobbyContent.style.height = 'auto';
			this.refs.hobbyHeader.style.backgroundColor = '#000';
			this.refs.hobbyHeader.style.color = '#f5f5f5';
		}
	}

	mainSwitch() {
		if (this.state.mainEn) {
			this.setState({mainEn: false},() => {
				this.refs.mainSwitch.style.backgroundColor = 'rgba(65,175,228,.5)';
				this.refs.mainIcon.style.backgroundColor = 'rgb(65,175,228)';
				this.refs.mainIcon.style.left = '12px';
				this.refs.mainIcon.style.boxShadow = '2px 2px 20px rgb(65,175,228)';
			});
		}
		else {
			this.setState({mainEn: true},() => {
				this.refs.mainSwitch.style.backgroundColor = '#eee';
				this.refs.mainIcon.style.backgroundColor = '#fff';
				this.refs.mainIcon.style.left = 0;
				this.refs.mainIcon.style.boxShadow = '1px 1px 10px #fff';
			});
		}
	}

	skillSwitch() {
		if (this.state.skillEn) {
			this.setState({skillEn: false},() => {
				this.refs.skillSwitch.style.backgroundColor = 'rgba(65,175,228,.5)';
				this.refs.skillIcon.style.backgroundColor = 'rgb(65,175,228)';
				this.refs.skillIcon.style.left = '12px';
				this.refs.skillIcon.style.boxShadow = '2px 2px 20px rgb(65,175,228)';
			});
		}
		else {
			this.setState({skillEn: true},() => {
				this.refs.skillSwitch.style.backgroundColor = '#eee';
				this.refs.skillIcon.style.backgroundColor = '#fff';
				this.refs.skillIcon.style.left = 0;
				this.refs.skillIcon.style.boxShadow = '1px 1px 10px #fff';
			});
		}
	}

	planSwitch() {
		if (this.state.planEn) {
			this.setState({planEn: false},() => {
				this.refs.planSwitch.style.backgroundColor = 'rgba(65,175,228,.5)';
				this.refs.planIcon.style.backgroundColor = 'rgb(65,175,228)';
				this.refs.planIcon.style.left = '12px';
				this.refs.planIcon.style.boxShadow = '2px 2px 20px rgb(65,175,228)';
			});
		}
		else {
			this.setState({planEn: true},() => {
				this.refs.planSwitch.style.backgroundColor = '#eee';
				this.refs.planIcon.style.backgroundColor = '#fff';
				this.refs.planIcon.style.left = 0;
				this.refs.planIcon.style.boxShadow = '1px 1px 10px #fff';
			});
		}
	}

	hobbySwitch() {
		if (this.state.hobbyEn) {
			this.setState({hobbyEn: false},() => {
				this.refs.hobbySwitch.style.backgroundColor = 'rgba(65,175,228,.5)';
				this.refs.hobbyIcon.style.backgroundColor = 'rgb(65,175,228)';
				this.refs.hobbyIcon.style.left = '12px';
				this.refs.hobbyIcon.style.boxShadow = '2px 2px 20px rgb(65,175,228)';
			});
		}
		else {
			this.setState({hobbyEn: true},() => {
				this.refs.hobbySwitch.style.backgroundColor = '#eee';
				this.refs.hobbyIcon.style.backgroundColor = '#fff';
				this.refs.hobbyIcon.style.left = 0;
				this.refs.hobbyIcon.style.boxShadow = '1px 1px 10px #fff';
			});
		}
	}

	render() {
		return(
				<div className='m-profile animated fadeIn'>
					<Nav title='Profile' />
					<div className='container'>
						<div className='wrap'>
							<div className='list'>
								<div className='item animated bounceInUp'>
									<div ref='mainHeader' className='header'>
										<div className='dress0'>
										</div>
										<h4>{this.mainText().title}</h4>
										<div ref='mainSwitch' className='switch'>
											<div className='board' onClick={this.mainSwitch.bind(this)}>
												<div ref='mainIcon' className='icon'></div>
											</div>
										</div>
										<div className='dress1'>
											<span className='glyphicon glyphicon-sunglasses'></span>
										</div>
									</div>
									<div ref='mainContent'
											 className='content'
											 onClick={this.mainContent.bind(this)}>
										<div className='row'>
											<div className='col-xs-12'>
												<p>{this.mainText().name}</p>
											</div>
											<div className='col-xs-12'>
												<p>{this.mainText().gender}</p>
											</div>
										</div>
										<div className='row'>
											<div className='col-xs-12'>
												<p>{this.mainText().origin}</p>
											</div>
											<div className='col-xs-12'>
												<p>{this.mainText().nation}</p>
											</div>
										</div>
										<div className='row'>
											<div className='col-xs-12'>
												<p>{this.mainText().birthday}</p>
											</div>
											<div className='col-xs-12'>
												<p>{this.mainText().age}</p>
											</div>
										</div>
										<div className='row'>
											<div className='col-xs-12'>
												<p>{this.mainText().stature}</p>
											</div>
											<div className='col-xs-12'>
												<p>{this.mainText().phone}</p>
											</div>
										</div>
										<div className='row'>
											<div className='col-xs-12'>
												<p>{this.mainText().mail}</p>
											</div>
											<div className='col-xs-12'>
												<p>{this.mainText().github}</p>
											</div>
										</div>
										<div className='row'>
											<div className='col-xs-12'>
												<p className='sentence'>{this.mainText().sentence}</p>
											</div>
										</div>
									</div>
								</div>
								<div className='item animated bounceInUp'>
									<div ref='skillHeader' className='header'>
										<div className='dress0'>
										</div>
										<h4>{this.skillText().title}</h4>
										<div ref='skillSwitch' className='switch'>
											<div className='board'>
												<div ref='skillIcon'
														 className='icon'
														 onClick={this.skillSwitch.bind(this)}></div>
											</div>
										</div>
										<div className='dress1'>
											<span className='glyphicon glyphicon-star'></span>
										</div>
									</div>
									<div ref='skillContent'
											 className='content'
											 onClick={this.skillContent.bind(this)}>
										<div className='row'>
											<div className='col-xs-12'>
												<div className='col-xs-3'>Ruby</div>
												<div className='col-xs-9'><div className='language ruby'>20%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-xs-12'>
												<div className='col-xs-3'>Node</div>
												<div className='col-xs-9'><div className='language node'>30%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-xs-12'>
												<div className='col-xs-3'>Linux</div>
												<div className='col-xs-9'><div className='language linux'>40%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-xs-12'>
												<div className='col-xs-3'>JavaScript</div>
												<div className='col-xs-9'><div className='language javascript'>55%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-xs-12'>
												<div className='col-xs-3'>HTML</div>
												<div className='col-xs-9'><div className='language html'>90%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-xs-12'>
												<div className='col-xs-3'>CSS</div>
												<div className='col-xs-9'><div className='language css'>80%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-xs-12'>
												<div className='col-xs-3'>Express</div>
												<div className='col-xs-9'><div className='language express'>75%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-xs-12'>
												<div className='col-xs-3'>Rails</div>
												<div className='col-xs-9'><div className='language rails'>45%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-xs-12'>
												<div className='col-xs-3'>React</div>
												<div className='col-xs-9'><div className='language react'>90%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-xs-12'>
												<div className='col-xs-3'>React Native</div>
												<div className='col-xs-9'><div className='language react-native'>75%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-xs-12'>
												<div className='col-xs-3'>Mysql</div>
												<div className='col-xs-9'><div className='language mysql'>45%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-xs-12'>
												<div className='col-xs-3'>MongoDB</div>
												<div className='col-xs-9'><div className='language mongodb'>35%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-xs-12'>
												<div className='col-xs-3'>jQuery</div>
												<div className='col-xs-9'><div className='language jquery'>70%</div></div>
											</div>
										</div>
										<div className='row'>
											<div className='col-xs-12'>
												<div className='col-xs-3'>Bootstrap</div>
												<div className='col-xs-9'><div className='language bootstrap'>65%</div></div>
											</div>
										</div>
									</div>
								</div>
								<div className='item animated bounceInUp'>
									<div ref='planHeader' className='header'>
										<div className='dress0'>
										</div>
										<h4>{this.planText().title}</h4>
										<div ref='planSwitch' className='switch'>
											<div className='board'>
												<div ref='planIcon'
														 className='icon'
														 onClick={this.planSwitch.bind(this)}></div>
											</div>
										</div>
										<div className='dress1'>
											<span className='glyphicon glyphicon-cloud'></span>
										</div>
									</div>
									<div ref='planContent'
											 className='content'
											 onClick={this.planContent.bind(this)}>
										<div className='row'>
											<div className='col-xs-12'>
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
								<div className='item animated bounceInUp'>
									<div ref='hobbyHeader' className='header'>
										<div className='dress0'>
										</div>
										<h4>{this.hobbyText().title}</h4>
										<div ref='hobbySwitch' className='switch'>
											<div className='board'>
												<div ref='hobbyIcon'
														 className='icon'
														 onClick={this.hobbySwitch.bind(this)}></div>
											</div>
										</div>
										<div className='dress1'>
											<span className='glyphicon glyphicon-heart'></span>
										</div>
									</div>
									<div ref='hobbyContent'
											 className='content'
											 onClick={this.hobbyContent.bind(this)}>
										<div className='row'>
											<div className='col-xs-12'>
												<div className='sentence'>
													<p>{this.hobbyText().sentence[0]}</p>
													<p>{this.hobbyText().sentence[1]}</p>
													<p>{this.hobbyText().sentence[2]}</p>
													<p>{this.hobbyText().sentence[3]}</p>
													<p>{this.hobbyText().sentence[4]}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
	}
};


export default Profile;









