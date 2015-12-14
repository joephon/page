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
            Hi I am Home!
          </div>
        </div>
      );
  }
};

export default Home;








