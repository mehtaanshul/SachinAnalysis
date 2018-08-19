import React, { Component } from 'react';
import LineSeries1 from './LineSeries1';
import InteractivePie from './InteractivePie';
import BarSeries1 from './BarSeries1';

class ODI extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  scrollOnClick(){
    var element = document.getElementById("odi");
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  render() {
    return (
      <div>
        <hr/>
        <div className="row" id="odi">
          <h1 id="heading">One Day International records and analysis.</h1>
          <div className="col-xs-12 col-md-12">
            <InteractivePie/>
          </div>
          <div className="col-xs-12 col-md-12">
            <LineSeries1/>
          </div>
          <div className="col-xs-12 col-md-6">
            <BarSeries1/>
          </div>
          <div className="col-xs-12 col-md-6">
            <h1>Most 150+ scores (5). Most runs in a calendar year (1,894 runs in the year 1998).</h1>
            <br/>
            <h1>Most centuries in a calendar year (9 in the year 1998).</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default ODI;
