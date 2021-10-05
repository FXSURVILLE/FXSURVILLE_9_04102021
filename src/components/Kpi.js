import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '18-24',
    uv: 100,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: '25-29',
    uv: 12,
    pv: 4567,
    fill: 'red',
  },
];

// const style = {
//   top: '50%',
//   right: 0,
//   transform: 'translate(0, -50%)',
//   lineHeight: '24px',
// };

export default class Kpi extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-radial-bar-chart-qf8fz';

  render() {
    return (
      <ResponsiveContainer width="100%" aspect={1.2}>
        <RadialBarChart cx="50%" cy="50%" innerRadius="50%" outerRadius="80%" barSize={10} data={data}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="uv"
          />
          {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} /> */}
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}
