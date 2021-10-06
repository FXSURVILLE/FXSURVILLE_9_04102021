import React from 'react';
import { withRouter } from "react-router";
import '../styles/content.css'
import Weight from '../components/BarChartActivity';
import Target from '../components/LineChartTarget';
import RadarEffort from '../components/RadarChartPerf';
import Kpi from '../components/RadialBarChartKpi';
import CardInfos from '../components/CardInfos';

const main = require('../datas/main12.json')

class Content extends React.Component {
    render () {
        return (
            <div className='content'>
                <div className='welcome'>
                    <h2>Bonjour  <span>{main.data.userInfos.firstName}</span> </h2>
                    <p >Félicitation ! Vous avez explosé vos objectifs hier 👏</p>                
                </div>
                <div className='graphes'>
                    <div className='poids'>
                        <Weight/>
                    </div>
                    <div className='cible'>
                        <Target />
                    </div>
                    <div className='radar_effort'>
                        <RadarEffort/>
                    </div>
                    <div className='kpi'>
                        <Kpi />
                    </div>
                </div>
                <CardInfos />
            </div>
        )
    }    
}
export default withRouter(Content)