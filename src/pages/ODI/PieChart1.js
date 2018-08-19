import React, { Component } from 'react';
import { RadialChart } from 'react-vis';
import ODI from '../../JSON/odi.json';

class PieChart1 extends Component {

  render() {

    let won = 0;
    let lost = 0;
    if(this.props.compare === "more"){
      for (let i = 0; i < ODI.sachin.length; i++) {
        if(parseInt(ODI.sachin[i].batting_score,10) >= this.props.runs && ODI.sachin[i].match_result === "won"){
          won = won+1;
        }
        else if(parseInt(ODI.sachin[i].batting_score,10) >= this.props.runs && ODI.sachin[i].match_result === "lost"){
          lost = lost+1;
        }
      }
    }
    else {
     for (let i = 0; i < ODI.sachin.length; i++) {
        if(ODI.sachin[i].batting_score <= this.props.runs && ODI.sachin[i].match_result === "won"){
          won = won+1;
        }
        else if(ODI.sachin[i].batting_score <= this.props.runs && ODI.sachin[i].match_result === "lost"){
          lost = lost+1;
        }
      } 
    }
    
    const myData = [{angle: won,label: 'India WON ('+won+')'}, {angle: lost,label: 'India LOST ('+lost+')'}]

    return (
      <div>
        <RadialChart
          data={myData}
          width={300}
          height={300}
          showLabels = {true} />
      </div>
    );
  }
}

export default PieChart1;
