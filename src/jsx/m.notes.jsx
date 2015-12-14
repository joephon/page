'use strict'

import React from 'react';
import Nav from './m.nav.jsx';

require('../css/m.notes.sass');

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Brain Storm',
    };
  }

  selected(event) {
    event.stopPropagation;
    this.setState({selected: event.target.textContent});
  }

  render() {
    return(
        <div className='m-notes'>
          <Nav title='Notes' />
          <div className='container'>
            <div className='wrap'>
              <div ref='brainStorm'
                   className={this.state.selected === 'Brain Storm'
                   ? 'article animated fadeInLeft'
                   : 'article animated fadeOutRight'
                   }>
                <h1>Articles are coming soon!</h1>
              </div>
              <div ref='brainStorm'
                   className={this.state.selected === 'Technologies'
                   ? 'article animated fadeInLeft'
                   : 'article animated fadeOutRight'
                   }>
                <h1>Articles are coming soon!</h1>
              </div>
              <div ref='brainStorm'
                   className={this.state.selected === 'Daily'
                   ? 'article animated fadeInLeft'
                   : 'article animated fadeOutRight'
                   }>
                <h1>Articles are coming soon!</h1>
              </div>
              <div ref='brainStorm'
                   className={this.state.selected === 'Fictions'
                   ? 'article animated fadeInLeft'
                   : 'article animated fadeOutRight'
                   }>
                <h1>Articles are coming soon!</h1>
              </div>
            </div>
            <div className='tabs'>
              <div className='tab'
                   style={{ borderLeft:'1px solid rgba(255,255,255,.5)',
                     color:this.state.selected === 'Brain Storm'
                     ? 'rgb(65,175,224)'
                     : '#fff'
                   }}
                   onClick={this.selected.bind(this)}>Brain Storm</div>
              <div className='tab'
                   style={{
                     color:this.state.selected === 'Technologies'
                     ? 'rgb(65,175,224)'
                     : '#fff'
                   }}
                   onClick={this.selected.bind(this)}>Technologies</div>
              <div className='tab'
                   style={{
                     color:this.state.selected === 'Daily'
                     ? 'rgb(65,175,224)'
                     : '#fff'
                   }}
                   onClick={this.selected.bind(this)}>Daily</div>
              <div className='tab'
                   style={{
                     color:this.state.selected === 'Fictions'
                     ? 'rgb(65,175,224)'
                     : '#fff'
                   }}
                   onClick={this.selected.bind(this)}>Fictions</div>
            </div>
          </div>
        </div>
      );
  }
};

export default Notes;






