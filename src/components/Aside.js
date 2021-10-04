import React from 'react';
import { withRouter } from "react-router";
import '../styles/aside.css'
import {ReactComponent as Zen} from '../assets/zen.svg'
import {ReactComponent as Swim} from '../assets/swim.svg'
import {ReactComponent as Bike} from '../assets/bike.svg'
import {ReactComponent as Weight} from '../assets/weight.svg'


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