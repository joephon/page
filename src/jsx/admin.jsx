'use strict'

import React from 'react';
import Home from './a.home.jsx';
require('../css/admin.sass');

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Home',
      position: '10%',
    };
  }

  selected(event) {
    event.stopPropagation;
    this.setState({selected: event.target.textContent},() => {
      switch (this.state.selected) {
        case 'Home':
        this.setState({position: '10%'});
        break;
        case 'Users':
        this.setState({position: '30%'});
        break;
        case 'Articles':
        this.setState({position: '50%'});
        break;
        case 'Feedbacks':
        this.setState({position: '70%'});
        break;
        case 'Trace':
        this.setState({position: '90%'});
        break;
      }
    });
  }

  render() {
    return(
        <div className='admin'>
          <div className='container'>
            <div className={this.state.selected === 'Home'
                 ? 'section animated fadeInLeft'
                 : 'section animated fadeOutRight'}>
              <Home />
            </div>
            <div className={this.state.selected === 'Users'
                 ? 'section animated fadeInLeft'
                 : 'section animated fadeOutRight'}>Hi I am Users
            </div>
            <div className={this.state.selected === 'Articles'
                 ? 'section animated fadeInLeft'
                 : 'section animated fadeOutRight'}>Hi I am Articles
            </div>
            <div className={this.state.selected === 'Feedbacks'
                 ? 'section animated fadeInLeft'
                 : 'section animated fadeOutRight'}>Hi I am Feedbacks
            </div>
            <div className={this.state.selected === 'Trace'
                 ? 'section animated fadeInLeft'
                 : 'section animated fadeOutRight'}>Hi I am Trace
            </div>
            <div className='navigator'>
              <div className='navigator-tip animated infinite pulse'
                   style={{left:this.state.position}}>
                <div className='navigator-tip-angle'></div>
              </div>
              <div className='navigator-item'
                   style={{borderLeft:'1px solid #fff',
                     color:this.state.selected === 'Home'
                     ? 'rgb(45,183,245)'
                     : '#fff',
                     backgroundColor:this.state.selected === 'Home'
                     ? '#000'
                     : 'rgba(0,0,0,.8)'
                   }}>
                <div className='navigator-button-up'>
                  <span className='glyphicon glyphicon-home'></span>
                </div>
                <div className='navigator-button-down'
                     onClick={this.selected.bind(this)}>Home</div>
              </div>
              <div className='navigator-item'
                   style={{borderLeft:'1px solid #fff',
                     color:this.state.selected === 'Users'
                     ? 'rgb(45,183,245)'
                     : '#fff',
                     backgroundColor:this.state.selected === 'Users'
                     ? '#000'
                     : 'rgba(0,0,0,.8)'
                   }}>
                <div className='navigator-button-up'>
                  <span className='glyphicon glyphicon-user'></span>
                </div>
                <div className='navigator-button-down'
                     onClick={this.selected.bind(this)}>Users</div>
              </div>
              <div className='navigator-item'
                   style={{borderLeft:'1px solid #fff',
                     color:this.state.selected === 'Articles'
                     ? 'rgb(45,183,245)'
                     : '#fff',
                     backgroundColor:this.state.selected === 'Articles'
                     ? '#000'
                     : 'rgba(0,0,0,.8)'
                   }}>
                <div className='navigator-button-up'>
                  <span className='glyphicon glyphicon-pencil'></span>
                </div>
                <div className='navigator-button-down'
                     onClick={this.selected.bind(this)}>Articles</div>
              </div>
              <div className='navigator-item'
                   style={{borderLeft:'1px solid #fff',
                     color:this.state.selected === 'Feedbacks'
                     ? 'rgb(45,183,245)'
                     : '#fff',
                     backgroundColor:this.state.selected === 'Feedbacks'
                     ? '#000'
                     : 'rgba(0,0,0,.8)'
                   }}>
                <div className='navigator-button-up'>
                  <span className='glyphicon glyphicon-comment'></span>
                </div>
                <div className='navigator-button-down'
                     onClick={this.selected.bind(this)}>Feedbacks</div>
              </div>
              <div className='navigator-item'
                   style={{borderLeft:'1px solid #fff',
                     color:this.state.selected === 'Trace'
                     ? 'rgb(45,183,245)'
                     : '#fff',
                     backgroundColor:this.state.selected === 'Trace'
                     ? '#000'
                     : 'rgba(0,0,0,.8)'
                   }}>
                <div className='navigator-button-up'>
                  <span className='glyphicon glyphicon-eye-open'></span>
                </div>
                <div className='navigator-button-down'
                     onClick={this.selected.bind(this)}>Trace</div>
              </div>
            </div>
          </div>
        </div>
      );
  }
};



export default Admin;