import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import '../styles/radialBarChartKpi.css'
import CallAPI from '../datas/API';

// const kpi = require('../datas/main12.json')

export default class Kpi extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userDatas:{},
      loading:true,
      error:false
    }
  }

  componentDidMount() {
    CallAPI.getUserById()
    .then(data => this.setState({userDatas: data.data.data,loading:false}))
    .catch(function () {
      this.setState({error: true})
    })
  }

  render() {
    const userScore = this.state.userDatas
    let scoreId=userScore.todayScore
    if (!scoreId>0) {scoreId=userScore.score}
    console.log(scoreId)
    const data = [
      { uv: 1, fill: '#FBFBFB' },
      { uv: scoreId,fill: 'red'}
    ];
    if (this.state.loading) {
      return <div>Loading</div>;
    } else if (this.state.error) {
      return <div>Error</div>;
    } else {
      return (
        <div className="radial-chart" >
        <div className="radialName" >Score</div>
        <ResponsiveContainer width="100%" aspect={1.2}>
          <RadialBarChart cx="50%" cy="60%" innerRadius="50%" outerRadius="100%" barSize={10} 
          startAngle={90}
          data={data}>
            <RadialBar
              // minAngle={15}
              // label={{ position: 'insideStart', fill: '#fff' }}
              background
              clockWise
              dataKey="uv"
              cornerRadius={50}
            />
            {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} /> */}
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="radialInfos" >{scoreId*100}%
          <p>de votre objectif</p>
        </div>
        </div>
      );
    }
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