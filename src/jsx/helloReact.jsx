'use strict'

import React from 'react';
require('../css/helloReact.sass');

let text = [
  {
    step: 0,
    en: 'Hi mate, Nice to see you here! I wanna share about some key points of React. If you\'d never ever heard about it or got little bit comfused with it or casually you are a front end developer, I\'d like to sugguest you to take a look at and had better learn about it! Don\'t ask me why, you know the whole world\'s staring at React! the most famous front end framework called Twitter Bootstrap, it got a React version. The very blog system called Wordpress which powers more than 25% internet, it decided to go with React over Angular. This is just the latest signal of React\'s increasing importance and staying power. As I know, React could not be more awesome! I happen to made this App to show how React works and which part you should pay attention to. By the way, React is not for new commers, it requires some very basic skills such as HTML, CSS and JavaScript. Also it would cost you plenty of times to practice. If these will not stop you, then these will not be the problem. Anyway, trust me, it worth! Are you ready? Go!',
    cn: '嗨，童鞋，一日不聊如绝三江！今儿想分享些关于React的痛点。假如你未曾耳闻，或者它给你造成成吨的困惑，亦或者不偏不倚你正是一枚前端程序猿，那么我强烈建议你至少应该了解了解，当然了，如果能够掌握它那就更好了。先来点动态吧：在全球范围内各种侧漏的Twitter Bootstrap，前些日子推出了React版。号称世界上最好的语言所构建的Power了超过25%网站的Wordpress，已经宣布用Node ＋ React来重写。这只是最近互联网发出的个别信号，天晓得后面还会有啥重磅消息，但不管怎样，React屌炸天这一既定事实已经不可能被忽视。我整这个组件旨在聊聊React是怎么玩的，以及哪些地方需要特别注意。顺带一提，React对新手不友好，至少你要对Web三剑客（HTML，CSS，JavaScript）有扎实的基础以及对Web应用有足够的认识。这样你在接触React过程中可以从多角度去对比组件化思想和常规开发模式的区别和利弊。当然了，由于React的颠覆性，刚接触时你或许会从中挑出各种各样的刺头，那是过往开发过程中形成的既有惯性思维所导致的。随着不断深入了解，相信你会以一种开放的心态重新审视React的利弊，以及它究竟解决了什么，并且你会发现很多曾经一直困扰着你的问题，在React模式下，烟消云散了。说到这里，你准备好了吗？',
  },
  {
    step: 1,
    en: 'Great! Shall we begin? Well the first thing which may stop you from learning React would be JSX. I am not here to tell you what it is or how to use.(besides you can check out the docs from github or whatever you want) I happen to advice you\'d better get used to it! As a syntax sugar of React, it works good and freindly for programmer. It looks like XML, I prefer to call it virtual HTML but in fact that it\'s still JavaScript. The most, if you feel good with it, you can also use it in Facebook\'s React Native platform. But that\'s just a sugguestion not a must. You can use pure JavaScript to work with React too. Some people consider that JSX is a bull shit because it mixs all the CSS, HTML and JavaScript together which people worked for years to separate. But I don\'t think so. If you\'d ever tried JSX you may find that above the render function, there are all pure JavaScript logic functions and below this render function, there are all XML format JavaScript works with the virtual DOM. That\'s kinda separation inner React component. As a single component, it just need to contain only it\'s interative logic and view. I think that\'s good!  ',
    cn: '那么，我们就愉快地开始吧。走近React，第一个立即会面对的就是JSX，它很奇怪，但也就那样。（这里就不赘述关于JSX的使用方法了，建议直接上github看官方文档或者随便一搜大把精彩博文供你阅览）这里只是建议你最好能够习惯它。JSX作为React的语法糖，它主要是解决原生JavaScript对象多重嵌套造成难以阅读和维护的问题。所以总体上它对程序猿友好且能有效提高开发效率。它是以XML的格式呈现，看起来就跟HTML没多大区别，但实际上上它还是JavaScript。重点是如果你习惯了这种格式，迁移到React Native平台开发你照样能用它！这只是个温馨提示，并非强制性要求，如果你喜欢的话，React也是支持纯JavaScript开发的。有些人对JSX持有偏见且非常排斥，因为它看起来像是把所有的CSS，HTML和JavaScript又混合到一块了，然而无数前人花了N年的努力才最终将他们分开。个人认为这种见解很片面，当年将他们分开的初衷是为了更好地开发和维护，今天又将他们聚合到一起同样也是为了更好地开发和维护。如果你玩过React，你或许应该注意到render函数以上全是JavaScript逻辑，render函数以下则是影射到真实DOM的XML树状结构。React的这种组件化开发思想很值得仔细品味，未经尝试便加以断言，这是不科学的！',
  },
  {
    step: 2,
    en: 'Then the next three cute guys would be State, Porps and Refs. There would be a very last long story needed to be told. But here I just make it short, we\'ll talk more details about them next time. Be patiently and keep your passion up or you might not know well those guys clearly. I gonna talk about them one by one. The first one is State, State is kinda variable which could keep some states or data on the go. However, It\'s not just a variable that simple. Please note in mind that\'s the key point why React could automatically manage all UI updates when your underlying data changes. Props is similar with properties but not just properties. It could pass through some information from the parent component or to it\'s children components. keep in mind that it could carry states, work with states but don\'t act it as state. Remember in React pattern, there is always One Way Through! The last one is Refs, Refs is easy to be understood, you can just act it as an ID. It works like the ID of each element in the real DOM. With React, we code: this.refs.id to get the object, just like we similar to use document.getElementById(id), they both return the selected object.',
    cn: '接下来要聊的几个小伙伴是State，Props和Refs。关于这三个家伙的故事我们可以聊很多，不过这里我长话短说，以后有的是机会对他们进行深层次剖析。保持耐心和激情是必要的，不然生吞这些概念可能会引起消化不良。现在咱一个一个聊～State，就像它的名字state一样，可以简单理解为一个变量，用来保存某种状态或者某些数据，然而它并不仅仅只是一个变量那么简单。值得注意的是～正是State这种机制的存在才使得React能够实时根据数据的变化而更新表层UI。Props可以简单理解为组件的属性，同样的它也不仅仅只是属性这么简单。Props是组件与组件之间通信的重要机制。值得注意的是～它可以接收父级组件的State，并将其传递给子级组件。在React单向数据流的模式下，他们有各自的用途，千万别混用。比如每个组件内部的State只管理自身的状态和数据，外围通信交给Props处理。再比如父组件的State可以作为子组件的Props一直传递到子子孙孙组件。切记单向数据流不要逆。最后一个Refs相对简单，你可以理解为它是任意指定组件的ID。返回的是指定组件的完整对象。React早期版本返回的只是虚拟DOM里的对象，0.14后返回的是真实DOM的对象。当然它也并非只是ID这么简单，React中它的作用是方便更好地操作虚拟DOM，就像ID作为真实DOM的唯一标识符一样。在这个层面上它们很类似，用法前者是在React组件内部this.refs.refname获取，后者则是在window对象下document.getElementById(ID)获取。',
  },
  {
    step: 3,
    en: 'To be continued......',
    cn: '未完待续。。。。。。',
  },
];

class HelloReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      total: 20,
      language: 'En',
    };
  }

  componentDidMount() {
    window.addEventListener('keydown',this.onKeyDown.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('keydown',this.onKeyDown.bind(this));
  }

  onKeyDown(event) {
    event.preventDefault();
    if (event.keyCode === 37) {
      this.backward();
    }
    else if (event.keyCode === 39) {
      this.forward();
    }
  }

  language() {
    this.setState({language: this.state.language === 'En'
    ? 'Cn'
    : 'En'});
  }

  hrefBack() {
    this.refs.helloReact.className = 'hello-react animated lightSpeedOut';
    setTimeout(() => {
      location.href = '/apps';
    },800)
  }

  forward() {
    this.setState({step: this.state.step < this.state.total 
    ? this.state.step + 1
    : this.state.total});
  }

  backward() {
    this.setState({step: this.state.step > 0
    ? this.state.step - 1
    : this.state.step});
  }

  reset() {
    this.setState({step: 0});
  }


  render() {
    return(
        <div ref='helloReact' className='hello-react animated lightSpeedIn'>
          <div className='container'>
            <div ref='process' className='process'>
              <div ref='innerProcess' className='inner-process' style={{width:this.state.step/this.state.total*100 + '%'}}></div>
              <div className='step'>{Math.floor(this.state.step/this.state.total*100)}%</div>
            </div>
            {text.map((item) => {
              return (
                  <div key={item.step}
                   className='section animated lightSpeedIn'
                   style={{display:this.state.step === item.step
                   ? 'block'
                   : 'none'}}
                   >
                     {this.state.language == 'En'
                     ? item.en
                     : item.cn
                     }
                  </div>
                )
            })}
            <div className='buttons'>
              <div className='backward' onClick={this.backward.bind(this)}>
                <span className='glyphicon glyphicon-step-backward'></span>
              </div>
              <div className='forward' onClick={this.forward.bind(this)}>
                <span className='glyphicon glyphicon-step-forward'></span>
              </div>
            </div>
            <div ref='language'
                 className='language'
                 onClick={this.language.bind(this)}>{this.state.language}</div>
            <div ref='back'
                 className='back'
                 onClick={this.hrefBack.bind(this)}>X
            </div>
          </div>
          <div ref='panel'
               className='panel' 
               style={{display: this.state.step === 3
               ? 'block'
               : 'none'}}>
            <div ref='promote'
                 className='promote animated bounceInDown'>
              <h3>
                {this.state.language === 'Cn'
                  ? '关于React的痛点，还有许许多多可以聊，眼下时间有限，咱改日再续可好？'
                  : 'There are lots of key points of React that we could talk around, have a rest and then go on next time?'
                }
              </h3>
              <div ref='backIcon'
                   className='back-icon'
                   onClick={this.hrefBack.bind(this)}>
                {this.state.language === 'Cn'
                  ? '好的'
                  : 'OK'
                }
              </div>
              <div ref='resetIcon'
                   className='reset-icon'
                   onClick={this.reset.bind(this)}>
                {this.state.language === 'Cn'
                  ? '重置'
                  : 'Reset'
                }
              </div>
            </div>
          </div>
        </div>
      );
  }
};

export default HelloReact;