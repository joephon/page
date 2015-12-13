'use strict'

import React from 'react';
import Nav from './nav.jsx';
require('../css/notes.sass');

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Brain Storm',
      hrefAnimation: () => {
        this.refs.notes.className = 'notes animated bounceOutLeft';
      },
    };
  } 

  render() {
    return(
        <div ref='notes' className='notes' style={{backgroundImage:'url(http://7xp4y4.com1.z0.glb.clouddn.com/picbg3.jpg)'}}>
          <div className='container'>
            <div className='wrap'>
              <div className='tabs'>
                <div className='brain-storm tab'
                     style={{}}>Brain Strom</div>
                <div className='technologies tab'> Technologies</div>
                <div className='daily tab'> Daily</div>
                <div className='fictions tab'>Fictions</div>
              </div>
            </div>
            <Nav title='Notes' hrefAnimation={this.state.hrefAnimation}/>
          </div>
        </div>
      );
  }
}

export default Notes;