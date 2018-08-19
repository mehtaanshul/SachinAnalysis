import React, { Component } from 'react';
import {XYPlot, XAxis, YAxis, VerticalBarSeries, makeWidthFlexible} from 'react-vis';
import Overalldata from '../../JSON/mostcenturies.json';

class MostCenturies extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const FlexibleXYPlot = makeWidthFlexible(XYPlot);

    let data = [];
    for (var i = 0; i < Overalldata.length; i++) {
      data.push({x:'',y:null});
      data[i].x = Overalldata[i].player;
      data[i].y = Overalldata[i].centuries;
    }

    return (
      <div className="line-series">
        <FlexibleXYPlot height={400} xType="ordinal">
          <XAxis />
          <YAxis />
          <VerticalBarSeries data={data}/>
        </FlexibleXYPlot>
        <p>MOST HUNDREDS IN A CAREER (COMBINED TEST, ODI AND T20I RECORDS) </p>
      </div>
    );
  }
}

export default MostCenturies;
