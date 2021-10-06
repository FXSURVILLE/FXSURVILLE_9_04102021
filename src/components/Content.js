import React from 'react';
import { withRouter } from "react-router";
import '../styles/content.css'
import Weight from './WeightChart';
import Target from './TargetChart';
import RadarEffort from './RadarEffort';
import Kpi from './KpiChart';
import {ReactComponent as Calories} from '../assets/calories.svg'
import {ReactComponent as Protein} from '../assets/protein.svg'
import {ReactComponent as Carbs} from '../assets/carbs.svg'
import {ReactComponent as Fat} from '../assets/fat.svg'


class Content extends React.Component {
    render () {
        return (
            <div className='content'>
                <div className='welcome'>
                    <h2>Bonjour Thomas</h2>
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
                <div className='states'>
                    <Calories className='state_icon'/>
                    <Protein className='state_icon'/>
                    <Carbs className='state_icon'/>
                    <Fat className='state_icon'/>
                </div>
            </div>
        )
    }    
}
export default withRouter(Content)