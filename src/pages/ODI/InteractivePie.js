import React, { Component } from 'react';
import PieChart1 from './PieChart1';

class ODI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runs: 100,
      compare: "more"
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <h3>When sachin scored</h3>
            <div className="row">
              <div className="col-md-6">
                <select name="compare" onChange={this.onChange} value={this.state.compare} className="form-control">
                  <option value="more">More than</option>
                  <option value="less">Less than</option>
                </select>
              </div>
              <div className="col-md-6">
                <input type="number" name="runs" className="form-control" onChange={this.onChange} value= {this.state.runs} min="" max=""title=""/>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <PieChart1 runs={this.state.runs} compare={this.state.compare}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ODI;
