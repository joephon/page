'use strict'

import React from 'react';
import Nav from './nav.jsx';
require('../css/notes.sass');

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Brain Storm',
      position: '20%',
      hrefAnimation: () => {
        this.refs.notes.className = 'notes animated bounceOutLeft';
      },
    };
  } 


  selected(event) {
    let text = event.target.textContent;
    event.stopPropagation;
    this.setState({selected: text},() => {
      switch (this.state.selected) {
        case 'Brain Storm':
        this.setState({position: '20%'});
        break;
        case 'Technologies':
        this.setState({position: '40%'});
        break;
        case 'Daily':
        this.setState({position: '60%'});
        break;
        case 'Fictions':
        this.setState({position: '80%'});
        break;
      }
    });
  }

  render() {
    return(
        <div ref='notes' className='notes' style={{backgroundImage:'url(http://7xp4y4.com1.z0.glb.clouddn.com/picbg3.jpg)'}}>
          <div className='container'>
            <div ref='brainStorm'
                 className={this.state.selected === 'Brain Storm'
                 ? 'article animated rollIn'
                 : 'article animated rollOut'
                 }>
              <h1>Articles are coming soon!</h1>
            </div>
            <div ref='technologies'
                 className={this.state.selected === 'Technologies'
                 ? 'article animated rollIn'
                 : 'article animated rollOut'
                 }>
              <h1>Articles are coming soon!</h1>
            </div>
            <div ref='daily'
                 className={this.state.selected === 'Daily'
                 ? 'article animated rollIn'
                 : 'article animated rollOut'
                 }>
              <h1>Articles are coming soon!</h1>
            </div>
            <div ref='fictions'
                 className={this.state.selected === 'Fictions'
                 ? 'article animated rollIn'
                 : 'article animated rollOut'
                 }>
              <h1>Articles are coming soon!</h1>
            </div>
            <div className='wrap'>
              <div className='tabs'>
                <div className='tip animated infinite pulse'
                     style={{left:this.state.position}}>
                  <div className='tip-angle'></div>
                </div>               
                <div className='tab animated rotateInDownLeft'
                     style={{
                       color:this.state.selected === 'Brain Storm'
                       ? 'rgb(45,183,245)'
                       : '#000',
                       backgroundColor:this.state.selected === 'Brain Storm'
                       ? 'rgba(0,0,0,.5)'
                       : 'rgba(255,255,255,.5)'
                     }}
                     onClick={this.selected.bind(this)}>Brain Storm</div>
                <div className='tab animated rotateInDownLeft'
                     style={{
                       color:this.state.selected === 'Technologies'
                       ? 'rgb(45,183,245)'
                       : '#000',
                       backgroundColor:this.state.selected === 'Technologies'
                       ? 'rgba(0,0,0,.5)'
                       : 'rgba(255,255,255,.5)'
                     }}
                     onClick={this.selected.bind(this)}>Technologies</div>
                <div className='tab animated rotateInDownLeft'
                     style={{
                       color:this.state.selected === 'Daily'
                       ? 'rgb(45,183,245)'
                       : '#000',
                       backgroundColor:this.state.selected === 'Daily'
                       ? 'rgba(0,0,0,.5)'
                       : 'rgba(255,255,255,.5)'
                     }}
                     onClick={this.selected.bind(this)}>Daily</div>
                <div className='tab animated rotateInDownLeft'
                     style={{
                       color:this.state.selected === 'Fictions'
                       ? 'rgb(45,183,245)'
                       : '#000',
                       backgroundColor:this.state.selected === 'Fictions'
                       ? 'rgba(0,0,0,.5)'
                       : 'rgba(255,255,255,.5)'
                     }}
                     onClick={this.selected.bind(this)}>Fictions</div>
              </div>
            </div>
            <Nav title='Notes' hrefAnimation={this.state.hrefAnimation}/>
          </div>
        </div>
      );
  }
}

export default Notes;