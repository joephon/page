'use strict'

import React from 'react';
import Nav from './nav.jsx';

let styles = {
  noMatch: {
    container: {
      position: 'relative',
      width: '100%',
      height: 'auto',
    },
    text: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '100%',
      marginLeft: '-50%',
      fontSize: '18px',
      textAlign: 'center',
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
        location.href = '/home'
      }
    },1000);
  }

  render() {
    return(
        <div style={styles.noMatch}>
          <Nav title='404' />
          <div style={styles.noMatch.container}>
            <h1 style={styles.noMatch.text}>Sorry,the page is not found, location will be redirected to home page after 5 seconds</h1>
          </div>
          <div style={styles.noMatch.num}>
            {this.state.num}
          </div>
        </div>
      );
  }
};

export default NoMatch;












