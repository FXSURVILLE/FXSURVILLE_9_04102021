import React from 'react';
import { withRouter } from "react-router";
import '../styles/content.css'
import Weight from '../components/BarChartActivity';
import Target from '../components/LineChartTarget';
import RadarEffort from '../components/RadarChartPerf';
import Kpi from '../components/RadialBarChartKpi';
import CardInfos from '../components/CardInfos';
import CallAPI from '../datas/API';

// const main = require('../datas/main12.json')

class Content extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userDatas:{},
        loading:true,
        error:false,
        /**
         * Users id: for Call API URL
         * @param {integer} id 12 or 18 available
        */
        id:12
      }
    }

    componentDidMount() {
      CallAPI.getUserById(this.state.id)
      .then(data => this.setState({userDatas: data.data.data,loading:false}))
      .catch(function () {
        this.setState({error: true})
      })
    }
    render () {
        const userData = this.state.userDatas.userInfos
        if (this.state.loading) {
          return <div>Loading</div>;
        } else if (this.state.error) {
          return <div>Error</div>;
        } else {
        return (
            <div className='content'>
                <div className='welcome'>
                    <h2>Bonjour  <span>{userData.firstName}</span> </h2>
                    <p >Félicitation ! Vous avez explosé vos objectifs hier 👏</p>                
                </div>
                <div className='graphes'>
                    <div className='poids'>
                        <Weight id={this.state.id} /> 
                    </div>
                    <div className='cible'>
                        <Target id={this.state.id} />
                    </div>
                    <div className='radar_effort'>
                        <RadarEffort id={this.state.id} />
                    </div>
                    <div className='kpi'>
                        <Kpi id={this.state.id} />
                    </div>
                </div>
                <CardInfos id={this.state.id} />
            </div>
        )
        }
    }    
}
export default withRouter(Content)