'use strict'

import React from 'react';
require('../css/a.home.sass');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
        <div className='a-home'>
          <div className='container'>
            <div style={{width:'100%',textAlign:'center',fontSize:'30px'}}>
              Home page is Developing......
            </div>
          </div>
        </div>
      );
  }
};

export default Home;








