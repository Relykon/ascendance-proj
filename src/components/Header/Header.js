import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
        <div className="Header">        
            <div href="LandingPage" className="logo">
            <img src="//static1.squarespace.com/static/5a342961692ebe0d3d366ef0/t/5cb776d10852292ef64cc35f/1567550363916/?format=1500w" alt="Project Ascendance" class="Header-branding-logo" />

            </div>

            

            <ul id="nav-mobile" className="menu">
                <li><a href="HomePage">Home</a></li>
                <li><a href="ProjectPreview">My Projects</a></li>
                <li><a href="#recruit">Recruit Volunteers</a></li>
                <li><a href="#about">Our Mission</a></li>
                <li><a href="SignIn">Sign In</a></li>
                
            </ul>
        </div>
        </nav>
    )
};

export default Header;


