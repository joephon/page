'use strict'

import React from 'react';
require('../css/a.articles.sass');

let data = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

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
              <h1>Articles</h1>
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
            <div className='content'>
              <div className='header'>
                <div className='item select-all'>
                  <input type='checkbox' name='select-all' className='checkbox'/>
                </div>
                <div className='item number'>#</div>
                <div className='item title'>Title</div>
                <div className='item views'>Views</div>
                <div className='item comments'>Comments</div>
                <div className='item date'>Date</div>
                <div className='item edit'>Edit</div>
                <div className='item delete'>Delete</div>
              </div>
              {data.map((item) => {
                return (
                    <div key={item} className='body'>
                      <div className='item select-all'>
                        <input type='checkbox' name='select-one' className='checkbox'/>
                      </div>
                      <div className='item number'>{item}</div>
                      <div className='item title'>Title</div>
                      <div className='item views'>
                        <span className='glyphicon glyphicon-eye-open'></span>
                        <span>200</span>
                      </div>
                      <div className='item comments'>
                        <span className='glyphicon glyphicon-comment'></span>
                        <span>50</span>
                      </div>
                      <div className='item date'>
                        <span>2015年12月14日</span>
                      </div>
                      <div className='item edit'>
                        <span className='glyphicon glyphicon-edit'></span>
                      </div>
                      <div className='item delete'>
                        <span className='glyphicon glyphicon-trash'></span>
                      </div>
                    </div>
                  )
              })}
            </div>
          </div>
        </div>
      );
  }
};

export default Articles;








