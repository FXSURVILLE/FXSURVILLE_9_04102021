import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import '../styles/radarChartPerf.css'
import CallAPI from '../datas/API';

// const performancesData = require('../datas/performance12.json')

export default class RadarEffort extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      performancesData:{},
      loading:true,
      error:false
    }
  }

  componentDidMount() {
    CallAPI.getSessionIntensity(this.props.id)
    .then(data => this.setState({performancesData: data.data.data,loading:false}))
    .catch(function () {
      this.setState({error: true})
    })
  }

  render() {
    const perfoData = this.state.performancesData
    /**
    * @param {string} values from API
    * @return {array} array with kinds
    */
    const type = perfoData.kind
    /**
    * Avis customized with kind
    * @param {integer} transform the number for a kind value
    * @return {string} return the kind value
    */
    const CustomAxis = (value) => {
      return type[value]
    }
    const performances = perfoData.data
    if (this.state.loading) {
      return <div>Loading</div>;
    } else if (this.state.error) {
      return <div>Error</div>;
    } else {
    return (
      <ResponsiveContainer width="100%" aspect={1.2} className="radar_effort" >
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={performances}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" stroke="white" axisLine="false" tickFormatter={CustomAxis} />
          {/* <PolarRadiusAxis /> graduation désactivée */}
          <Radar name={performances.userId} dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    );
    }
  }
}

RadarEffort.propTypes = {
  /**
   * User's ID
   */
  id: PropTypes.number.isRequired
}