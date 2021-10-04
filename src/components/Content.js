import React from 'react';
import { withRouter } from "react-router";
import '../styles/content.css'
import {ReactComponent as Zen} from '../assets/zen.svg'
import {ReactComponent as Swim} from '../assets/swim.svg'
import {ReactComponent as Bike} from '../assets/bike.svg'
import {ReactComponent as Weight} from '../assets/weight.svg'


class Content extends React.Component {
    render () {
        return (
            <div className='content'>
                <h2>Bonjour Thomas</h2>
                <p >Copyright, SportSee 2020</p>
                <div className='graphes'>
                    <div className='activité'>
                        <p >Activité quotidienne</p>
                    </div>
                    <div className='durée'>
                        <p >Activité quotidienne</p>
                    </div>
                    <div className='intensité'>
                        <p >Activité quotidienne</p>
                    </div>
                    <div className='score'>
                        <p >Activité quotidienne</p>
                    </div>
                </div>
                <div className='states'>
                    
                </div>
            </div>
        )
    }    
}
export default withRouter(Content)