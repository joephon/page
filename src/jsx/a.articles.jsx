'use strict'

import React from 'react';
require('../css/a.articles.sass');

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'All',
    };
  }

  selected(event) {
    let text = event.target.textContent;
    event.stopPropagation;
    this.setState({selected: text});
  }

  render() {
    return(
        <div className='a-articles'>
          <div className='container'>
            <div className='buttons'>
              <div className='button list'
                   style={{
                     color: this.state.selected === 'All'
                     ? 'rgb(45,183,245)'
                     : '#fff',
                     backgroundColor: this.state.selected === 'All'
                     ? 'rgba(0,0,0,.9)'
                     : 'rgba(0,0,0,.5'
                   }}>
                <div className='button-up'>
                  <span className='glyphicon glyphicon-th-list'></span>
                </div>
                <div className='button-down'
                     onClick={this.selected.bind(this)}>All</div>
              </div>
              <div className='button new'
                   style={{
                     color: this.state.selected === 'New'
                     ? 'rgb(45,183,245)'
                     : '#fff',
                     backgroundColor: this.state.selected === 'New'
                     ? 'rgba(0,0,0,.9)'
                     : 'rgba(0,0,0,.5'
                   }}>
                <div className='button-up'>
                  <span className='glyphicon glyphicon-plus'></span>
                </div>
                <div className='button-down'
                     onClick={this.selected.bind(this)}>New</div>
              </div>
            </div>
          </div>
        </div>
      );
  }
};

export default Articles;








