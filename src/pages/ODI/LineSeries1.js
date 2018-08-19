import React, { Component } from 'react';
import {XYPlot, XAxis, YAxis, AreaSeries, LineSeries, makeWidthFlexible, Hint } from 'react-vis';
import ODI from '../../JSON/odi.json';

class LineSeries1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const FlexibleXYPlot = makeWidthFlexible(XYPlot);

    let areaData = [];
    let count=0;
    let avg = 0;
    for (var i = 0; i < ODI.sachin.length; i++) {
      if(ODI.sachin[i].batting_score !== "DNB"){
        avg = avg + parseInt(ODI.sachin[i].batting_score,10);
        areaData.push({x:"",y:""});
        areaData[count].x = i;
        areaData[count].y = parseInt(ODI.sachin[i].batting_score,10);
        count++;
      }
    }
    avg = avg/count;
    let lineData = [{x:0,y:avg},{x:460,y:avg}];

    return (
      <div className="line-series">
        <FlexibleXYPlot height={400}>
          <XAxis title="Match number" />
          <YAxis title="Runs scored" />
          <LineSeries data={lineData} color="green"/>
          <AreaSeries data={areaData} />
          <Hint value={{x:441,y:200}}>
            <div>
              <p>First person to score a double century in ODI</p>
            </div>
          </Hint>
        </FlexibleXYPlot>
        <p>Runs scored by Sachin during his ODI's. </p>
      </div>
    );
  }
}

export default LineSeries1;
