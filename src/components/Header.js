import React from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/header.css';
import logo from '../assets/logo.png'
// import '../styles/Header.css'

class Header extends React.Component {
    render() {
      return (
        <div className='sportsee-header'>
          <nav className='sportsee-nav'>
            <img src={logo} alt='logo-sportsee' className='sportsee-logo'/>
            <NavLink to="/" className='navlink' activeClassName="selected">Accueil</NavLink>
            <NavLink to="/" className='navlink' activeClassName="selected">Profil</NavLink>
            <NavLink to="/" className='navlink' activeClassName="selected">Réglage</NavLink>
            <NavLink to="/" className='navlink' activeClassName="selected">Communauté</NavLink>
          </nav>
        </div>
      );
    }
}

export default Header