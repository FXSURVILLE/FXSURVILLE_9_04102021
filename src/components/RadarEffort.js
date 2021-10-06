import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import '../styles/RadarEffort.css'

const performances = require('../datas/performance12.json')
const data1= performances.data.kind
const data2= performances.data.data
const data3= data2.map(e=>e.data)
// const data4= [performances.data.kind,performances.data]


console.log(data1)
console.log(data2)
console.log(data3)
export default class RadarEffort extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-radar-chart-rjoc6';

  render() {
    return (
      <ResponsiveContainer width="100%" aspect={1.2} className="radar_effort" >
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data2}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" stroke="white" axisLine="false" />
          {/* <PolarRadiusAxis /> graduation désactivée */}
          <Radar name={performances.userId} dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
