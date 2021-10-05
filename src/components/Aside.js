import React from 'react';
import { withRouter } from "react-router";
import '../styles/aside.css'
import {ReactComponent as Zen} from '../assets/zen.svg'
import {ReactComponent as Swim} from '../assets/swim.svg'
import {ReactComponent as Bike} from '../assets/bike.svg'
import {ReactComponent as Weight} from '../assets/weight.svg'

import { LineChart, Line } from 'recharts';
const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },];


class Aside extends React.Component {
    render () {
        return (
            <div className='aside'>
                <div className='aside_choices'>
                    <Zen className='aside_icon'/>
                    <Swim className='aside_icon'/>
                    <Bike className='aside_icon'/>
                    <Weight className='aside_icon'/>
                </div>
                <p >Copyright, SportSee 2020</p>
            </div>
        )
    }    
}
export default withRouter(Aside)