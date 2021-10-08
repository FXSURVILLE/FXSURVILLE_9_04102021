import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styles/barChartActivity.css'
// import {aqw} from '../datas/API'
import { clientID } from '../datas/API';

// var client = clientID();
// const activites = require('../datas/activity12.json')

// console.log(clientID())
function CustomTooltip({ payload, active }) {
  if (active) {
    return (
      <div className="custom-tooltip-bar">
        <p>{payload[0].value}Kg</p>
        <p>{payload[1].value}Kcal</p>
      </div>
    );
  }
  return null;
}

const legendText = (value) => {
  value = value === "kilogram" ? "Poids (kg)" : "Calories brûlées (Kcal)"

  return (<span>{value}</span>);
};

// const client = "18"

export default class Example extends PureComponent {
  constructor() {
    super();
    this.state = {activities:{}}
  }

  componentDidMount() {
    // fetchActivity()
    fetch('http://localhost:3000/user/'+clientID()+'/activity')
  .then(response => response.json())
  .then(activity => this.setState({activities: activity?.data.sessions}))
  }


  render() {
    // let aa =this.state.azer
    // console.log(this.state.activities)
    // console.log(activites)
    return (
      <ResponsiveContainer width="100%" height="100%" className="activity_chart" >
        <BarChart
          width={500}
          height={320}
          data={this.state.activities}
          margin={{
            top: 20,
            right: 30,
            left: 30,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" stroke="#9B9EAC" />
          <YAxis yAxisId="left" orientation="right" stroke="#9B9EAC" tickCount={3} />
          <YAxis hide={true} yAxisId="right" orientation="right" stroke="#9B9EAC" />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            iconType="circle" 
            iconSize="8" 
            verticalAlign="top" 
            height={65} 
            align="right" 
            formatter={legendText}
          />
          <Bar yAxisId="left" dataKey="kilogram" fill="#282D30" barSize={7} radius={[3,3,0,0]} />
          <Bar yAxisId="right" dataKey="calories" fill="#E60000" barSize={7} radius={[3,3,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
