import React from 'react';
import '../Styles/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='heading-section' data-cy="header">
            <Link to={'/'} style={{textDecoration: 'none'}}>
                <h1 className='title' data-cy='page-title'>Board Game Bartender</h1>    
            </Link>
            <div aria-label="slogan and icon" className='slogan-icon'>
                <p className='slogan'>we'll take decision making off your plate ...</p>
                <img alt="Stylized drawing of two cocktails in tumbler style glasses" src={require('../assets/cocktail-glasses.png')} className='cocktail-icon'/>
            </div>
        </header>
    )
}

export default Header