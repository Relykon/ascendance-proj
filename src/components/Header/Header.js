import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
        <div className="Header">        
            <div href="#" className="logo">Project Ascendance</div>

            <ul id="nav-mobile" className="menu">
                <li><a class="active" href="#home">Home</a></li>
                <li><a href="#ProjectPreview">My Projects</a></li>
                <li><a href="#recruit">Recruit Volunteers</a></li>
                <li><a href="#about">Our Mission</a></li>
            </ul>
        </div>
        </nav>
    )
};

export default Header;


