import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <nav>
            <div className="Header">        
                <div className="logo">
                    <a href="/">
                        <img src="//static1.squarespace.com/static/5a342961692ebe0d3d366ef0/t/5cb776d10852292ef64cc35f/1567550363916/?format=1500w" alt="Project Ascendance"/>
                    </a>
                </div>

                <Navigation id="nav-mobile" className="menu"/>
            </div>
        </nav>
    )
};

export default Header;