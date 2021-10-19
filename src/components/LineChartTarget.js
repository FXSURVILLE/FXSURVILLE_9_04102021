import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../styles/lineChartTarget.css'
import CallAPI from '../datas/API';

// const sessionResults = require('../datas/averageSessions12.json')
// const sessions = sessionResults.data.sessions

function CustomTooltip({ payload, active }) {
  if (active) {
    return (
      <div className="custom-tooltip-line">
        <p>{payload[0].value}min</p>
      </div>
    );
  }
  return null;
}

// console.log(sessions)
export default class Target extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sessionResults:{},
      loading:true,
      error:false
    }
  }

  componentDidMount() {
    CallAPI.getSessionDuration(this.props.id)
    .then(data => this.setState({sessionResults: data.data.data.sessions,loading:false}))
    .catch(function () {
      this.setState({error: true})
    })
  }

  render() {
    const day = {
      1: "L",
      2: "M",
      3: "M",
      4: "J",
      5: "V",
      6: "S",
      7: "D",
    }
    const CustomXaxis = (value) => {
      return day[value]
    }
    const sessions = this.state.sessionResults
    if (this.state.loading) {
      return <div>Loading</div>;
    } else if (this.state.error) {
      return <div>Error</div>;
    } else {
    return (
      <div className="line-chart-activity">
      <h3>Durée moyenne des sessions</h3>
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
          <XAxis dataKey="day" stroke="#FFFFFF" dx={10} tickFormatter={CustomXaxis} />
          <YAxis hide={true} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="sessionLength" stroke="#FFFFFF" fill="none" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    );
    }
  }
}

Target.propTypes = {
  /**
   * User's ID
   */
  id: PropTypes.number.isRequired
}