'use strict'

import React from 'react';
import Nav from './nav.jsx';
require('../css/apps.sass');

class Apps extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hrefAnimation: () => {
				this.refs.apps.className = 'apps animated bounceOutLeft';
			},
		};
	}
  componentDidMount() {
    this.getIn();
  }
  
  showApps(row1s,row2s,i) {
		setTimeout(() => {
      row1s[i].style.left = '50%';
      row1s[i].style.marginLeft =  i * 320 - 490 + 'px';
      row2s[i].style.right = '50%';
      row2s[i].style.marginRight = i * 320 - 450 + 'px';
    },(i+1) * 150)
  }

  showFlash(row1s,row2s,i) {
    setTimeout(() => {
      row1s[i].setAttribute('class','item row1 animated flash');
      row2s[i].setAttribute('class','item row2 animated flash');
    },1000)
  }

  boxShadow() {
    setTimeout(() => {
    	this.refs.wrap.style.boxShadow = '1px 1px 500px rgb(10,118,183)';
    	this.refs.wrap.style.backgroundColor = 'rgba(10,118,183,.4)';
    },2000)
    setTimeout(() => {
    	this.refs.wrap.style.boxShadow = '0px 0px 0px rgb(10,118,183)';
    	this.refs.wrap.style.backgroundColor = 'rgba(10,118,183,0)';
    },2300)
  }

  getIn() {
    let row1s = document.getElementsByClassName('row1');
    let row2s = document.getElementsByClassName('row2'); 
    for (let i = 0; i < row1s.length; i ++ ) {
      this.showApps(row1s,row2s,i);
      this.showFlash(row1s,row2s,i);
    }
    this.boxShadow();
  }

  helloReact() {
  	this.refs.react.className = 'item row1 animated bounceOut';
  	setTimeout(() => {
  		window.location.href = '#/app/helloReact';
  	},800)
  }

	render() {
		return(
				<div ref='apps' className='apps animated fadeIn' style={{backgroundImage:'url(../image/aim.jpg)'}}>
					<div className='container'>
						<div ref='wrap' className='wrap'>
	          </div>
						<div ref='react'
								 className='item row1'
								 onClick={this.helloReact.bind(this)}>
	            <h1>Say Hello to React</h1>
	            <p>Coming soon!</p>
	          </div>
	          <div ref='wiki' className='item row1'>
	            <h1>Wikipedia Search Engine</h1>
	            <p>Coming soon!</p>
	          </div>
	          <div ref='calculator' className='item row1'>
	            <h1>Stainless Steel Calculator</h1>
	            <p>Coming soon!</p>
	          </div>
	          <div ref='timer' className='item row2'>
	            <h1>Pomodoro Timer Zipline</h1>
	            <p>Coming soon!</p>
	          </div>
	          <div ref='weather' className='item row2'>
	            <h1>Weather App</h1>
	            <p>Coming soon!</p>
	          </div>
	          <div ref='pacman' className='item row2'>
	            <h1>2048</h1>
	            <p>Coming soon!</p>
	          </div>
						<Nav title='Apps' hrefAnimation={this.state.hrefAnimation}/>
						</div>
						{this.props.children}
				</div>
			);
	}
};

export default Apps;






