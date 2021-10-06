import React, { PureComponent } from 'react';
import '../styles/CardInfos.css'
import {ReactComponent as Calories} from '../assets/calories.svg'
import {ReactComponent as Protein} from '../assets/protein.svg'
import {ReactComponent as Carbs} from '../assets/carbs.svg'
import {ReactComponent as Fat} from '../assets/fat.svg'

const main = require('../datas/main12.json')


export default class CardInfos extends PureComponent {

    render() {
      return (
        <div className='states'>
                <div className='state'>
                    <Calories className='state_icon'/>
                    <div className='state_infos'>
                        <h5>{main.data.keyData.calorieCount}kCal</h5>
                        <p>Calories</p>
                    </div>
                </div>
                <div className='state'>
                    <Protein className='state_icon'/>
                    <div className='state_infos'>
                        <h5>{main.data.keyData.proteinCount}g</h5>
                        <p>Protéines</p>
                    </div>
                </div>
                <div className='state'>
                    <Carbs className='state_icon'/>
                    <div className='state_infos'>
                        <h5>{main.data.keyData.carbohydrateCount}g</h5>
                        <p>Glucides</p>
                    </div>
                </div>
                <div className='state'>
                    <Fat className='state_icon'/>
                    <div className='state_infos'>
                        <h5>{main.data.keyData.lipidCount}g</h5>
                        <p>Lipides</p>
                    </div>
                </div>
        </div>
      );
    }
  }