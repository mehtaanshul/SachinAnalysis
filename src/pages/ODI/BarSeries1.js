import React, { Component } from 'react';
import {XYPlot, XAxis, YAxis, VerticalBarSeries, makeWidthFlexible} from 'react-vis';
import ODI from '../../JSON/odi.json';

class BarSeries1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const FlexibleXYPlot = makeWidthFlexible(XYPlot);

    let data = [];
    let count=0;
    for (var i = 0; i < ODI.sachin.length; i++) {
      let date = ODI.sachin[i].date.split(" ");
      if(ODI.sachin[i].batting_score !== "DNB" && date[2] === "1998"){
        data.push({x:"",y:""});
        data[count].x = count;
        data[count].y = parseInt(ODI.sachin[i].batting_score,10);
        count++;
      }
    }

    return (
      <div className="line-series">
        <FlexibleXYPlot height={400}>
          <XAxis/>
          <YAxis title="Runs"/>
          <VerticalBarSeries data={data}/>
        </FlexibleXYPlot>
        <p>RUNS BY SACHIN IN ALL THE ODI'S IN THE YEAR 1998 (XAxis - Match number, YAxis - Runs scored)</p>
      </div>
    );
  }
}

export default BarSeries1;
