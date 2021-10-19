import React, { PureComponent } from 'react';
import '../styles/CardInfos.css'
import {ReactComponent as Calories} from '../assets/calories.svg'
import {ReactComponent as Protein} from '../assets/protein.svg'
import {ReactComponent as Carbs} from '../assets/carbs.svg'
import {ReactComponent as Fat} from '../assets/fat.svg'
import CallAPI from '../datas/API';

// const main = require('../datas/main12.json')


export default class CardInfos extends PureComponent {
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
        const userData = this.state.userDatas.keyData
        // console.log(userData)
        if (this.state.loading) {
          return <div>Loading</div>;
        } else if (this.state.error) {
          return <div>Error</div>;
        } else {
            return (
              <div className='states'>
                      <div className='state'>
                          <Calories className='state_icon'/>
                          <div className='state_infos'>
                              <h5>{userData.calorieCount}kCal</h5>
                              <p>Calories</p>
                          </div>
                      </div>
                      <div className='state'>
                          <Protein className='state_icon'/>
                          <div className='state_infos'>
                              <h5>{userData.proteinCount}g</h5>
                              <p>Protéines</p>
                          </div>
                      </div>
                      <div className='state'>
                          <Carbs className='state_icon'/>
                          <div className='state_infos'>
                              <h5>{userData.carbohydrateCount}g</h5>
                              <p>Glucides</p>
                          </div>
                      </div>
                      <div className='state'>
                          <Fat className='state_icon'/>
                          <div className='state_infos'>
                              <h5>{userData.lipidCount}g</h5>
                              <p>Lipides</p>
                          </div>
                      </div>
              </div>
            );
        }
    }
  }