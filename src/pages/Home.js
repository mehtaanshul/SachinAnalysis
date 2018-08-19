import React, { Component } from 'react';
import Banner from '../img/sachin.jpg';
import Header from '../components/Header';
import ODI from './ODI/ODI';
import Overall from './Overall/Overall';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="sachin-app">
        <Header className="Header"/>
        <img src={Banner} className="img-responsive Banner" alt="Banner"/>
        <Overall/>
        <ODI/>
      </div>
    );
  }
}

export default Home;
