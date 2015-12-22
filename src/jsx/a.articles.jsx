'use strict'

import React from 'react';
require('../css/a.articles.sass');

let form = new FormData(document.forms.namedItem('articleForm')); 
let xhr = new XMLHttpRequest();

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selected: 'All',
      category: 'Brain Storm',
      cnTitle: null,
      enTitle: null,
      category: null,
      cnContent: null,
      enContent: null,
    };
  }

  componentDidMount() {
    this.ajax();
  }

  ajax() {
    setTimeout(() => {
      xhr.open('GET','http://192.168.1.103:3000/article');
      xhr.send();
      if (xhr.status === 200)
        this.setState({data: xhr.response.articles});
    },10)
  }

  selected(event) {
    let text = event.target.textContent;
    event.stopPropagation();
    this.setState({selected: text});
  }

  category(event) {
    let text = event.target.value;
    event.stopPropagation();
    this.setState({category: text})
  }

  cnTitle(event) {
    let text = event.target.value;
    event.stopPropagation();
    this.setState({cnTitle: text});
  }

  enTitle(event) {
    let text = event.target.value;
    event.stopPropagation();
    this.setState({enTitle: text});
  }

  cnContent(event) {
    let text = event.target.value;
    event.stopPropagation();
    this.setState({cnContent: text});
  }

  enContent(event) {
    let text = event.target.value;
    event.stopPropagation();
    this.setState({enContent: text});
  }

  submit() {
    // let data = {
    //   category: this.state.category,
    //   cnTitle: this.state.cnTitle,
    //   enTitle: this.state.enTitle,
    //   cnContent: this.state.cnContent,
    //   enContent: this.state.enContent,
    // };
    xhr.open('POST','http://192.168.1.103:3000/article');
    // form.append('category',this.state.category);
    // form.append('cnTitle',this.state.cnTitle);
    // form.append('enTitle',this.state.enTitle);
    // form.append('cnContent',this.state.cnContent);
    // form.append('enContent',this.state.enContent);
    if (xhr.status === 200) {
      alert('submited');
    }
    xhr.send(form);
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
              <div className='button brain-storm'
                   style={{
                     color: this.state.selected === 'Brain Storm'
                     ? 'rgb(45,183,245)'
                     : '#fff',
                     backgroundColor: this.state.selected === 'Brain Storm'
                     ? 'rgba(0,0,0,.9)'
                     : 'rgba(0,0,0,.5'
                   }}
                   onClick={this.selected.bind(this)}>
                Brain Storm
              </div>
              <div className='button technologies'
                   style={{
                     color: this.state.selected === 'Technologies'
                     ? 'rgb(45,183,245)'
                     : '#fff',
                     backgroundColor: this.state.selected === 'Technologies'
                     ? 'rgba(0,0,0,.9)'
                     : 'rgba(0,0,0,.5'
                   }}
                   onClick={this.selected.bind(this)}>
                Technologies
              </div>
              <div className='button daily'
                   style={{
                     color: this.state.selected === 'Daidy'
                     ? 'rgb(45,183,245)'
                     : '#fff',
                     backgroundColor: this.state.selected === 'Daidy'
                     ? 'rgba(0,0,0,.9)'
                     : 'rgba(0,0,0,.5'
                   }}
                   onClick={this.selected.bind(this)}>
                Daidy
              </div>
              <div className='button fictions'
                   style={{
                     color: this.state.selected === 'Fictions'
                     ? 'rgb(45,183,245)'
                     : '#fff',
                     backgroundColor: this.state.selected === 'Fictions'
                     ? 'rgba(0,0,0,.9)'
                     : 'rgba(0,0,0,.5'
                   }}
                   onClick={this.selected.bind(this)}>
                Fictions
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
            <div className='content animated slideInUp'
                 style={{display:this.state.selected !== 'New' && this.state.selected !== 'Edit'
                  ? 'block'
                  : 'none'
                 }}>
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
              {this.state.data.map((item) => {
                return (
                    <div key={item.id} className='body'>
                      <div className='item select-all'>
                        <input type='checkbox' name='select-one' className='checkbox'/>
                      </div>
                      <div className='item number'>{item._id}</div>
                      <div className='item title'>{item.enTitle}</div>
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
            <div className='add animated slideInUp'
                 style={{display:this.state.selected === 'New'
                  ? 'block'
                  : 'none'
                 }}
                >
              <div className='article-form'>
                <form ref='form'
                      name='articleForm'
                      encType='multipart/form-data'
                      >
                  <div className='form-group'>
                    <select name='category'
                            className='form-control'
                            value={this.state.category}
                            onChange={this.category.bind(this)}>
                      <option value='Brain Storm'
                              >Brain Storm</option>
                      <option value='Technologies'
                              >Technologies</option>
                      <option value='Daily'
                              >Daily</option>
                      <option value='Fictions'
                              >Fictions</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <input name='cnTitle' 
                           className='form-control'
                           type='text' name='en-title'
                           placeholder='标题'
                           value={this.state.cnTitle}
                           onChange={this.cnTitle.bind(this)} />
                  </div>
                  <div className='form-group'>
                    <input name='enTitle'
                           className='form-control'
                           type='text' name='en-title'
                           placeholder='Title'
                           value={this.state.enTitle}
                           onChange={this.enTitle.bind(this)} />
                  </div>
                  <div className='form-group'>
                    <textarea name='cnContent'
                              className='form-control'
                              style={{height: 300}}
                              type='text' name='cn-content'
                              placeholder='正文'
                              value={this.state.cnContent}
                              onChange={this.cnContent.bind(this)} ></textarea>
                  </div>
                  <div className='form-group'>
                    <textarea name='enContent'
                              className='form-control'
                              style={{height: 300}}
                              type='text' name='en-content'
                              placeholder='Content'
                              value={this.state.enContent}
                              onChange={this.enContent.bind(this)} ></textarea>
                  </div>
                  <div className='btn btn-lg btn-default btn-block'
                       onClick={this.submit.bind(this)}>Submit</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
  }
};

export default Articles;








