import React, { Component } from 'react';
import MostCenturies from './MostCenturies';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="overall">
        <div className="row">
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

export default Home;
