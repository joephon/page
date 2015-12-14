'use strict'

import React from 'react';
import Nav from './m.nav.jsx';
require('../css/m.games.sass');

class Games extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 45,
    };
  }

  href2048() {
    this.refs['2048'].className = 'item animated bounceOut';
    setTimeout(() => {
      location.href = '/2048';
    },800)
  }

  render() {
    return(
        <div ref='games' className='m-games'>
          <Nav title='Games' />
          <div className='container'>
            <div className='list animated bounceInUp'>
              <div ref='2048' className='item' onClick={this.href2048.bind(this)}>
                <div className='dress'></div>
                <div className='process'>
                  <div className='completed' style={{width:this.state.completed + '%'}}></div>
                  <h6>{this.state.completed + '%'}</h6>
                </div>
                <h3>2048</h3>
              </div>
              <div ref='undefined0' className='item'>
                <div className='dress'></div>
                <div className='process'>
                  <div className='completed' style={{width:this.state.completed - 45 + '%'}}></div>
                  <h6>{this.state.completed - 45 + '%'}</h6>
                </div>
                <h3>Undefined</h3>
              </div>
              <div ref='undefined1' className='item'>
                <div className='dress'></div>
                <div className='process'>
                  <div className='completed' style={{width:this.state.completed - 45 + '%'}}></div>
                  <h6>{this.state.completed - 45 + '%'}</h6>
                </div>
                <h3>Undefined</h3>
              </div>
              <div ref='undefined2' className='item'>
                <div className='dress'></div>
                <div className='process'>
                  <div className='completed' style={{width:this.state.completed - 45 + '%'}}></div>
                  <h6>{this.state.completed - 45 + '%'}</h6>
                </div>
                <h3>Undefined</h3>
              </div>
            </div>
          </div>
        </div>
      )
  }
};

export default Games;