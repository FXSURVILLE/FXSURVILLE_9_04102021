import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styles/barChartActivity.css'
import CallAPI from '../datas/API';


// const activites = require('../datas/activity12.json')

/**
* Tooltip customized
* @param {array} payload:The source data of the content to be displayed in the tooltip 
* @param {boolean} active: If set true, the tooltip is displayed
* @return {string} tooltip completed with values
*/
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

/**
* text for legend
* @param {string} check if "kilogram"
* @return {string} if "kilogram" return text1, else text2
*/
const legendText = (value) => {
  value = value === "kilogram" ? "Poids (kg)" : "Calories brûlées (Kcal)"
  return (<span>{value}</span>);
};

export default class Weight extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activities:{},
      loading:true,
      error:false
    }
  }

  componentDidMount() {
    CallAPI.getActivity(this.props.id)
    .then(data => this.setState({activities: data.data,loading:false}))
    .catch(function () {
      this.setState({error: true})
    })
  }


  render() {
    /**
   * Xaxis values customized
   * @param {string} value received for Xaxis (date) 
   * @return {string} keep only the 2 last characters from the string(day)
   */
    const CustomXaxis = (value) => {
      return value.substring(value.length-2)
    }
    const activites = this.state.activities
    if (this.state.loading) {
      return <div>Loading</div>;
    } else if (this.state.error) {
      return <div>Error</div>;
    } else {
    return (
      <div className="bar-chart-activity">
      <h3>Activité quotidienne</h3>
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
      </div>
    );
    }
  }
}

Weight.propTypes = {
  /**
   * User's ID
   */
  id: PropTypes.number.isRequired
}