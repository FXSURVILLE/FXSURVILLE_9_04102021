import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
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
    CallAPI.getUserById(this.props.id)
    .then(data => this.setState({userDatas: data.data.data,loading:false}))
    .catch(function () {
      this.setState({error: true})
    })
  }

  render() {
    const userScore = this.state.userDatas
    let scoreId=userScore.todayScore
    if (!scoreId>0) {scoreId=userScore.score}
    // console.log(scoreId)
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

Kpi.propTypes = {
  /**
   * User's ID
   */
  id: PropTypes.number.isRequired
}