'use strict'

import React from 'react';
import Nav from './m.nav.jsx';

let styles = {
  noMatch: {
    container: {
      width: '100%',
      height: 'auto',
    },
    img: {
      width: '100%',
      height: '100%',
      marginTop: '40px',
    },
    num: {
      width: '50px',
      height: '50px',
      lineHeight: '50px',
      borderRadius: '50%',
      margin: '100px auto 0 auto',
      textAlign: 'center',
      fontSize: '25px',
      color: '#f5f5f5',
      backgroundColor: '#000',
    }
  },
}

class NoMatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 5,
      countDown: this.count(),
    };
  }

  // componentDidMount() {
  //  this.count();
  // }

  count() {
    setTimeout(() => {
      if (this.state.num > 0) {
        this.setState({num: this.state.num - 1},() => {
          this.count();
        });
      }
      else {
        clearTimeout(this.state.countDown);
        location.href = '#/home'
      }
    },1000);
  }

  render() {
    return(
        <div style={styles.noMatch}>
          <Nav title='Developing' />
          <div style={styles.noMatch.container}>
            <img style={styles.noMatch.img} src='../image/coming.jpg'/>
          </div>
          <div style={styles.noMatch.num}>
            {this.state.num}
          </div>
        </div>
      );
  }
};

export default NoMatch;












