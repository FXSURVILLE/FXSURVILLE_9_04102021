import React from 'react';
import { NavLink } from 'react-router-dom'
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
                  <NavLink to="/" className='navlink' activeClassName="selected">
                    <Zen className='aside_icon'/>
                  </NavLink>
                  <NavLink to="/" className='navlink' activeClassName="selected">
                    <Swim className='aside_icon'/>
                  </NavLink>
                  <NavLink to="/" className='navlink' activeClassName="selected">
                    <Bike className='aside_icon'/>
                  </NavLink>
                  <NavLink to="/" className='navlink' activeClassName="selected">
                    <Weight className='aside_icon'/>
                  </NavLink>
                </div>
                <p >Copyright, SportSee 2020</p>
            </div>
        )
    }    
}
export default withRouter(Aside)