import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../styles/TargetChart.css'

const sessionResults = require('../datas/averageSessions12.json')
const sessions = sessionResults.data.sessions

function CustomTooltip({ payload, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p>{payload[0].value}min</p>
      </div>
    );
  }
  return null;
}

console.log(sessions)
export default class Target extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  render() {
    return (
      <ResponsiveContainer width="100%" aspect={1.2} className="sessions_chart" >
        <AreaChart
          width={500}
          height={400}
          data={sessions}
          margin={{
            top: 0,
            right: 0,
            left: 5,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="none" />
          <XAxis dataKey="day" stroke="#FFFFFF" dx={20}/>
          <YAxis hide={true} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="sessionLength" stroke="#FFFFFF" fill="none" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
