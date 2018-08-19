import React, { Component } from 'react';
import MostCenturies from './MostCenturies';

class Overall extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  scrollOnClick(){
    var element = document.getElementById("overall");
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  render() {
    return (
      <div id="overall">
        <div className="row">
          <h1 id="heading">Overall (Test, ODI and T20 Record)</h1>
          <div className="col-xs-12 col-md-6">
            <MostCenturies/>
          </div>
          <div className="col-xs-12 col-md-6">
            <h1>Sachin has scored a whopping 100 international hundreds, and reached this much-awaited, mind-boggling milestone on 16th March, 2012.</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Overall;
