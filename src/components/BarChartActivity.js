import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styles/barChartActivity.css'
import CallAPI from '../datas/API';


// const activites = require('../datas/activity12.json')
// const rrrr=CallAPI.getActivity()
// console.log(getActivity)

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
  constructor(props) {
    super(props);
    this.state = {
      activities:{},
      loading:true,
      error:false
    }
  }

  componentDidMount() {
    // this.setState({loading: 'Bonjour'});
    // fetch('http://localhost:3000/user/'+12+'/activity')
    CallAPI.getActivity()
    // .then(response => response.json())
    .then(data => this.setState({activities: data.data,loading:false}))
    // .then(activity => console.log(activity.data.data.sessions))
    .catch(function () {
      this.setState({error: true})
    })
  }


  render() {
    const CustomXaxis = (value) => {
      return value.substring(value.length - 1 ,value.length)
    }
    const activites = this.state.activities
    if (this.state.loading) {
      return <div>Loading</div>;
    } else if (this.state.error) {
      return <div>Error</div>;
    } else {
    return (
      <ResponsiveContainer width="100%" height="100%" className="activity_chart" >
        <BarChart
          width={500}
          height={320}
          data={activites.data.sessions}
          margin={{
            top: 20,
            right: 30,
            left: 30,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" stroke="#9B9EAC" tickFormatter={CustomXaxis} />
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
}
