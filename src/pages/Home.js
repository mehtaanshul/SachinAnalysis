import React, { Component } from 'react';
import Banner from '../img/sachin.jpg';
import Header from '../components/Header';
import ODI from './ODI/ODI';
import Overall from './Overall/Overall';


class Home extends Component {
  constructor(props){
    super(props);
    this.scrollOverall = React.createRef();
    this.scrollODI = React.createRef();
    this.scrollTo = this.scrollTo.bind(this);
  }
  scrollTo(where){
    if(where === "overall"){
      this.scrollOverall.current.scrollOnClick();
    }
    else if(where === "odi"){
      this.scrollODI.current.scrollOnClick();
    }
    else {
      var element = document.getElementById("body");
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }

  render() {
    return (
      <div className="sachin-app">
        <Header className="Header" scrollto={this.scrollTo}/>
        <div className="body" id="body">
          <img src={Banner} className="img-responsive Banner" alt="Banner"/>
          <Overall ref={this.scrollOverall}/>
          <ODI ref={this.scrollODI}/>
        </div>
      </div>
    );
  }
}

export default Home;
