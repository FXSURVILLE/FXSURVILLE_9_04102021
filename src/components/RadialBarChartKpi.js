import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import '../styles/radialBarChartKpi.css'

const kpi = require('../datas/main12.json')

const data = [
  // {
  //   name: '18-24',
  //   uv: 100,
  //   pv: 2400,
  //   fill: '#8884d8',
  // },
  {
    name: '25-29',
    uv: 12,
    pv: 4567,
    fill: 'red',
  },
];


export default class Kpi extends PureComponent {

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

// import React, { PureComponent } from 'react';
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

//   render() {
//     return (
//       <PieChart width={800} height={400}>
//         <Pie
//           data={data}
//           cx={120}
//           cy={100}
//           innerRadius={60}
//           outerRadius={80}
//           fill="red"
//           paddingAngle={0}
//           dataKey="value"
//           startAngle={90}
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//       </PieChart>
//     );
//   }
// }